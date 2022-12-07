import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function final() {
    // OFFICIAL GAMES KNOCKOUT STAGE
    // FINAL
    await prisma.game.create({
        data: {
            date: "2022-12-18T15:00:00.000Z", //data em UTC-0
            firstTeamCountryCode: "",
            secondTeamCountryCode: "",
        }
    })
}