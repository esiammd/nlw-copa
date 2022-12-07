import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'
import { authenticate } from '../plugins/authenticate'

export async function rankingRoutes(fastify: FastifyInstance) {
    fastify.get('/pools/:poolId/ranking', {
        onRequest: [authenticate]
    }, async (request) => {
        const getPoolParams = z.object({
            poolId: z.string(),
        })

        const { poolId } = getPoolParams.parse(request.params)

        const ranking = await prisma.participant.findMany({
            where: {
                poolId: poolId,
            },
            include: {
                user: {
                    select: {
                        name: true,
                        avatarUrl: true,
                    }
                }
            }
        })

        return { 
            ranking: ranking.map((item, index) => {
                return {
                    id: item.id,
                    name: item.user.name, 
                    avatarUrl: item.user.avatarUrl,
                    points: 0,
                    position: (index + 1),
                    isYou: request.user.sub === item.userId, 
                }
            })
        }
    })
}