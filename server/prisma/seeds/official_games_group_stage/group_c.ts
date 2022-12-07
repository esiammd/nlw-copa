import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function group_c() {
    // OFFICIAL GAMES GROUP STAGE
    // GROUP C
    await prisma.game.create({
        data: {
            date: "2022-11-22T10:00:00.000Z", //data em UTC-0
            firstTeamCountryCode: "AR",
            secondTeamCountryCode: "SA",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-22T16:00:00.000Z",
            firstTeamCountryCode: "MX",
            secondTeamCountryCode: "PL",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-26T13:00:00.000Z",
            firstTeamCountryCode: "PL",
            secondTeamCountryCode: "SA",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-26T19:00:00.000Z",
            firstTeamCountryCode: "AR",
            secondTeamCountryCode: "MX",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-30T19:00:00.000Z",
            firstTeamCountryCode: "PL",
            secondTeamCountryCode: "AR",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-30T19:00:00.000Z",
            firstTeamCountryCode: "SA",
            secondTeamCountryCode: "MX",
        }
    })
}