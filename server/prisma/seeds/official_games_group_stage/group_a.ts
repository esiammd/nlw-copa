import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function group_a() {
    // OFFICIAL GAMES GROUP STAGE
    // GROUP A
    await prisma.game.create({
        data: {
            date: "2022-11-20T16:00:00.000Z", //data em UTC-0
            firstTeamCountryCode: "QA",
            secondTeamCountryCode: "EC",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-21T16:00:00.000Z",
            firstTeamCountryCode: "SN",
            secondTeamCountryCode: "NL",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-25T13:00:00.000Z",
            firstTeamCountryCode: "QA",
            secondTeamCountryCode: "SN",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-25T16:00:00.000Z",
            firstTeamCountryCode: "NL",
            secondTeamCountryCode: "EC",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-29T15:00:00.000Z",
            firstTeamCountryCode: "NL",
            secondTeamCountryCode: "QA",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-11-29T15:00:00.000Z",
            firstTeamCountryCode: "EC",
            secondTeamCountryCode: "SN",
        }
    })
}