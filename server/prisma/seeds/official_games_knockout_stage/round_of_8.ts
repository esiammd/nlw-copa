import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function round_of_8() {
    // OFFICIAL GAMES KNOCKOUT STAGE
    // ROUND OF 8
    await prisma.game.create({
        data: {
            date: "2022-12-09T15:00:00.000Z", //data em UTC-0
            firstTeamCountryCode: "HR",
            secondTeamCountryCode: "BR",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-09T19:00:00.000Z",
            firstTeamCountryCode: "NL",
            secondTeamCountryCode: "AR",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-10T15:00:00.000Z",
            firstTeamCountryCode: "MA",
            secondTeamCountryCode: "PT",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-10T19:00:00.000Z",
            firstTeamCountryCode: "GR",
            secondTeamCountryCode: "FR",
        }
    })
}