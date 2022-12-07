import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function group_f() {
    // OFFICIAL GAMES GROUP STAGE
    // GROUP F
    await prisma.game.create({
        data: {
            date: "2022-11-23T10:00:00.000Z", //data em UTC-0
            firstTeamCountryCode: "MA",
            secondTeamCountryCode: "HR",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-23T19:00:00.000Z",
            firstTeamCountryCode: "BE",
            secondTeamCountryCode: "CA",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-27T13:00:00.000Z",
            firstTeamCountryCode: "BE",
            secondTeamCountryCode: "MA",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-27T16:00:00.000Z",
            firstTeamCountryCode: "HR",
            secondTeamCountryCode: "CA",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-01T15:00:00.000Z",
            firstTeamCountryCode: "HR",
            secondTeamCountryCode: "BE",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-01T15:00:00.000Z",
            firstTeamCountryCode: "CA",
            secondTeamCountryCode: "MA",
        }
    })
}