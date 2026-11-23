import { faker } from "@faker-js/faker";
import prisma from "../lib/prisma.js";

async function main() {
    console.log('Seeding started')

    await prisma.genre.deleteMany();

    const genresNames = ['rock', 'r&b', 'hip-hop', 'jazz', 'pop', 'reggaeton', 'rap', 'afro', 'k-pop']

    await prisma.genre.createMany({
        data: genresNames.map(genre => ({
            name: genre,
        }))
    })

    const genres = await prisma.genre.findMany();
    // console.log(genres);

    const songs = [];
    for (let i = 0; i < 15; i++) {
        songs.push({
            title: faker.music.songName(),
            artist: faker.music.artist(),
            lyrics: faker.lorem.paragraphs({ min: 3, max: 6 }),
            releaseDate: faker.number.int({ min: 1990, max: 2024 }),
            genreId: faker.helpers.arrayElement(genres).id,
        })
    }

    await prisma.song.createMany({
        data: songs,
    })

    console.log('Seeding completed')
}

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(() => prisma.$disconnect)