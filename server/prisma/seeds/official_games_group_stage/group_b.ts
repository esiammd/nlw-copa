import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function group_b() {
    // OFFICIAL GAMES GROUP STAGE
    // GROUP B
    await prisma.game.create({
        data: {
            date: "2022-11-21T13:00:00.000Z", //data em UTC-0
            firstTeamCountryCode: "GB",
            secondTeamCountryCode: "IR",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-21T19:00:00.000Z",
            firstTeamCountryCode: "US",
            secondTeamCountryCode: "WA",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-25T10:00:00.000Z",
            firstTeamCountryCode: "WA",
            secondTeamCountryCode: "IR",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-25T19:00:00.000Z",
            firstTeamCountryCode: "GB",
            secondTeamCountryCode: "US",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-29T19:00:00.000Z",
            firstTeamCountryCode: "IR",
            secondTeamCountryCode: "US",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-29T19:00:00.000Z",
            firstTeamCountryCode: "WA",
            secondTeamCountryCode: "GB",
        }
    })
}