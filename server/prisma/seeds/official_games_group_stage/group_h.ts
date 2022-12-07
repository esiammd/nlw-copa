import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function group_h() {
    // OFFICIAL GAMES GROUP STAGE
    // GROUP H
    await prisma.game.create({
        data: {
            date: "2022-11-24T13:00:00.000Z", //data em UTC-0
            firstTeamCountryCode: "UY",
            secondTeamCountryCode: "KR",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-24T16:00:00.000Z",
            firstTeamCountryCode: "PT",
            secondTeamCountryCode: "GH",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-28T13:00:00.000Z",
            firstTeamCountryCode: "KR",
            secondTeamCountryCode: "GH",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-28T19:00:00.000Z",
            firstTeamCountryCode: "PT",
            secondTeamCountryCode: "UY",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-01T15:00:00.000Z",
            firstTeamCountryCode: "KR",
            secondTeamCountryCode: "PT",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-01T15:00:00.000Z",
            firstTeamCountryCode: "GH",
            secondTeamCountryCode: "UY",
        }
    })
}