import { Router } from "express";
import {getAllDogs, getDogById, createDog, updateDog, deletedDog} from '../controllers/dogController.js'
const router = Router ()

router.get('/', getAllDogs)

router.get('/:id', getDogById)

router.post('/', createDog)

router.put('/:id', updateDog)

router.delete('/:id', deletedDog)

export default router; 