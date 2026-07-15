export function createError (status, message){
   const err = new Error (message);
   err.status = status;
   return err;
}

export function notFoundHandler(req,res,next) {
    next (createError(404, `Ruta no encontrada ${req.method} - ${req.originalUrl}`));
}

export function globalHandler (err, req,res,next) {
    //caso de uso: formato de _id válido CastError
    if (error.name === "CastError") {
        return res.status(400).json({message: err.name})
    }
    //caso de uso: error de validación de mongoose ValidationError
    if (error.name === "ValidationError") {
        return res.status(400).json({message: err.name})
    }
    const status = err.status || 500;
    return res.status (status).json ({message: err.message} || 'Error interno del Servidor');
}