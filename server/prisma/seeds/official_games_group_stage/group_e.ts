import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function group_e() {
    // OFFICIAL GAMES GROUP STAGE
    // GROUP E
    await prisma.game.create({
        data: {
            date: "2022-11-23T13:00:00.000Z", //data em UTC-0
            firstTeamCountryCode: "DE",
            secondTeamCountryCode: "JP",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-23T16:00:00.000Z",
            firstTeamCountryCode: "ES",
            secondTeamCountryCode: "CR",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-27T10:00:00.000Z",
            firstTeamCountryCode: "JP",
            secondTeamCountryCode: "CR",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-27T19:00:00.000Z",
            firstTeamCountryCode: "ES",
            secondTeamCountryCode: "DE",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-01T19:00:00.000Z",
            firstTeamCountryCode: "JP",
            secondTeamCountryCode: "ES",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-01T19:00:00.000Z",
            firstTeamCountryCode: "CR",
            secondTeamCountryCode: "DE",
        }
    })
}