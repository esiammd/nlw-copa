import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function group_g() {
    // OFFICIAL GAMES GROUP STAGE
    // GROUP G
    await prisma.game.create({
        data: {
            date: "2022-11-24T10:00:00.000Z", //data em UTC-0
            firstTeamCountryCode: "CH",
            secondTeamCountryCode: "CM",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-24T19:00:00.000Z",
            firstTeamCountryCode: "BR",
            secondTeamCountryCode: "RS",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-28T10:00:00.000Z",
            firstTeamCountryCode: "CM",
            secondTeamCountryCode: "RS",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-28T16:00:00.000Z",
            firstTeamCountryCode: "BR",
            secondTeamCountryCode: "CH",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-02T19:00:00.000Z",
            firstTeamCountryCode: "CM",
            secondTeamCountryCode: "BR",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-02T19:00:00.000Z",
            firstTeamCountryCode: "RS",
            secondTeamCountryCode: "CH",
        }
    })
}