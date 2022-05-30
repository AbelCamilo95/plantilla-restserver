const{response,request} = require('express');


const usuariosGet = (req = request, res = response) => {

    const {q, nombre='no name', apikey} = req.query;

    res.json({
        msg:'get Api - controlador',
        q,
        nombre,
        apikey
    });
}
const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.status(400).json({
        msg:'put Api - controlador',
        id
    });
}
const usuariosPost = (req, res = response) => {

    const {Nombre,edad} = req.body;

    res.status(201).json({
        msg:'post Api - controlador',
        Nombre,
        edad
    });
}
const usuariosDelete = (req, res = response) => {
    res.status(201).json({
        msg:'delete Api - controlador'
    });
}

module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}