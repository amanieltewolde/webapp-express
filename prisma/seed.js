import prisma from "../lib/prisma.js";

async function main() {
    console.log('Seeding started')


    console.log('Seeding completed')
}

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(() => prisma.$disconnect)