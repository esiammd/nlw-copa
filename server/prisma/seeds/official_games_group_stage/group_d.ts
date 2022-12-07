import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function group_d() {
    // OFFICIAL GAMES GROUP STAGE
    // GROUP D
    await prisma.game.create({
        data: {
            date: "2022-11-22T13:00:00.000Z", //data em UTC-0
            firstTeamCountryCode: "DK",
            secondTeamCountryCode: "TN",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-22T19:00:00.000Z",
            firstTeamCountryCode: "FR",
            secondTeamCountryCode: "AU",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-26T10:00:00.000Z",
            firstTeamCountryCode: "TN",
            secondTeamCountryCode: "AU",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-26T16:00:00.000Z",
            firstTeamCountryCode: "FR",
            secondTeamCountryCode: "DK",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-30T15:00:00.000Z",
            firstTeamCountryCode: "TN",
            secondTeamCountryCode: "FR",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-30T15:00:00.000Z",
            firstTeamCountryCode: "AU",
            secondTeamCountryCode: "DK",
        }
    })
}