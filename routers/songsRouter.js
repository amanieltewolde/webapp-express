import { Router } from "express";
import prisma from "../lib/prisma.js";
import sendErrors from "../lib/utlities/sendErrors.js";

const router = Router();

// base URL /songs

//Index 
router.get('/', async (req, res) => {
    const { limit, skip } = req.query;

    const songs = await prisma.song.findMany({
        select: {
            id: true,
            title: true,
            artist: true,
            genre: {
                select: {
                    id: true,
                    name: true
                }
            }
        },
        take: limit ? Number(limit) : undefined,
        skip: skip ? Number(skip) : undefined,
    });

    res.json(songs);
})

//Show 
router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);

    // Validazione formato ID
    if (!Number.isInteger(id)) {
        return sendErrors(res, 400, 'Invalid Id')
    }

    const song = await prisma.song.findUnique({
        where: {
            id,
        },
        include: {
            genre: {
                select: {
                    id: true,
                    name: true,
                }
            }
        }, omit: {
            genreId: true,
        }
    })

    // Validazione esistenza ID
    if (!song) {
        return sendErrors(res, 404, 'Song you are looking for does not exist')
    }

    res.json(song);
})

//Store 
router.post('/', (req, res) => {
    const { id } = req.body

    res.send(`Creazione canzone numero ${id}`);
})

//Update 
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Modifica canzone numero ${id}`);
})

// Delete
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Eliminazione canzone numero ${id}`);

})

export default router