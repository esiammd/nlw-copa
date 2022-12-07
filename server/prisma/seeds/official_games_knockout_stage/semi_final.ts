import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function semi_final() {
    // OFFICIAL GAMES KNOCKOUT STAGE
    // SEMI-FINAL
    await prisma.game.create({
        data: {
            date: "2022-12-13T19:00:00.000Z", //data em UTC-0
            firstTeamCountryCode: "",
            secondTeamCountryCode: "",
        }
    })

    await prisma.game.create({
        data: {
            date: "2022-12-14T19:00:00.000Z",
            firstTeamCountryCode: "",
            secondTeamCountryCode: "",
        }
    })
}