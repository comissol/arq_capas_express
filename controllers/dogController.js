import Dog from '../models/dog.js';
import { createError } from '../middlewares/errorHandler.js';

export async function getAllDogs(req,res, next){
    try {
        const allDogs = await Dog.find();
        if (!allDogs.length){
            throw createError ({status: 404, message: 'No hay perros en la base de datos'})
        }
    return res.status(200).json(allDogs)
} catch (error) {
    next (error);
}}

export async function getDogById (req,res, next){
    try{
        const { id } = req.params
        const dog = await Dog.findById(id)
        if (!dog) {
            return res.status(404).json({ message: "Perro no encontrado" });
        }
    return res.status(200).json(dog);
    } catch (error) {
    next(error);
    }
}

export async function createDog (req,res, next) {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: "El cuerpo de la solicitud no puede estar vacío" });
        }
        const newDog = new Dog(req.body);
        const insertedDog = await newDog.save();   
        return res.status(201).json({"mensaje": "Perro agregado exitosamente", "perro": insertedDog});
    } catch (error) {
        next(error);
    }
}

export async function updateDog(req, res, next) {
    try {
        const { id } = req.params;
        const updatedDog = await Dog.findByIdAndUpdate(id, req.body, { 
            returnDocument: 'after',
            runValidators: true});
        if (!updatedDog) {
            return res.status(404).json({ message: "Perro no encontrado" });
        }
        return res.status(200).json({"mensaje": "Perro actualizado exitosamente", "perro":updatedDog});
    } catch (error) {
        next(error);
    }
}

export async function deletedDog(req, res, next) {
    try {
        const { id } = req.params;
        const deletedDog = await Dog.findByIdAndDelete(id);
        if (!deletedDog) {
            return res.status(404).json({ message: "Perro no encontrado, no se pudo eliminar" });
        }
        return res.status(200).json({ message: "Perro eliminado correctamente", deletedDog });
    } catch (error) {
        next(error);
    }
}