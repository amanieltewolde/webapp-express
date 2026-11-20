import { Router } from "express";

const router = Router();

// base URL /songs

//Index 
router.get('/', (req, res) => {
    res.send('Lista delle canzoni');
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