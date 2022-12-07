import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function round_of_16() {
    // OFFICIAL GAMES KNOCKOUT STAGE
    // ROUND OF 16
    await prisma.game.create({
        data: {
            date: "2022-12-03T15:00:00.000Z", //data em UTC-0
            firstTeamCountryCode: "NL",
            secondTeamCountryCode: "US",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-03T19:00:00.000Z",
            firstTeamCountryCode: "AR",
            secondTeamCountryCode: "AU",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-04T15:00:00.000Z",
            firstTeamCountryCode: "FR",
            secondTeamCountryCode: "PL",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-04T19:00:00.000Z",
            firstTeamCountryCode: "GB",
            secondTeamCountryCode: "SN",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-05T15:00:00.000Z",
            firstTeamCountryCode: "JP",
            secondTeamCountryCode: "HR",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-05T19:00:00.000Z",
            firstTeamCountryCode: "BR",
            secondTeamCountryCode: "KR",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-06T15:00:00.000Z",
            firstTeamCountryCode: "MA",
            secondTeamCountryCode: "ES",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-06T19:00:00.000Z",
            firstTeamCountryCode: "PT",
            secondTeamCountryCode: "CH",
        }
    })
}