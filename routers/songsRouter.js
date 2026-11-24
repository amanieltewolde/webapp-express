import { Router } from "express";
import { destroy, index, show, store, update } from "../controllers/songController.js";

const router = Router();

// base URL /songs

//Index 
router.get('/', index)

//Show 
router.get('/:id', show)

//Store 
router.post('/', store)

//Update 
router.patch('/:id', update)

// Delete
router.delete('/:id', destroy)

export default router