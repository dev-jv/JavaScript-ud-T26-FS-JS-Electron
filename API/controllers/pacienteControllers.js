


// Cuando se crea un nuevo cliente
exports.nuevoCliente = (req, res, next) => {
    // TODO : Insertar en la base de datos
    console.log(req.body);

    res.json({ mensaje : 'El cliente de agregó correctamente'});
}



