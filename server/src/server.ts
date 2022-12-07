import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt';

import { authRoutes } from './routes/auth'
import { userRoutes } from './routes/user'
import { gameRoutes } from './routes/game'
import { poolRoutes } from './routes/pool'
import { guessRoutes } from './routes/guess'
import { rankingRoutes } from './routes/ranking';

async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true,
    })

    // Em produção isso precisa ser uma variável ambiente
    await fastify.register(jwt, {
        secret: "nlwcopa",
    })

    await fastify.register(authRoutes)
    await fastify.register(userRoutes)
    await fastify.register(gameRoutes)
    await fastify.register(poolRoutes)
    await fastify.register(guessRoutes)
    await fastify.register(rankingRoutes)

    await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap()