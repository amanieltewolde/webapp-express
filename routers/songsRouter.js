import { Router } from "express";
import prisma from "../lib/prisma.js";

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

    if (!Number.isInteger(id)) {
        return res.status(400).json({
            error: 'Invalid Id',
        })
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

    if (!song) {
        return res.status(404).json({
            error: 'Song you were looking for does not exist',
        })
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