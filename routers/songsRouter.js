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
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Canzone numero ${id}`);
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