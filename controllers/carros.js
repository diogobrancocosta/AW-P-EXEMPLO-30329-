const fs = require('fs');

//devolve todos os carros
exports.getAll = async (req, res) => {
    return res.send("ok");
}

//devolve o carro com o id
exports.getById = async (req, res) => {
    //obter o id do carro
    const id = req.params.id;
    //just return same id
    return res.send(id);
}

//cria um carro
exports.create = async (req, res) => {
    //obter o carro pelas características enviadas
    const {id, Marca, Detalhes, Foto} = req.body;
    //envia o carro criado
    return res.status(201).send(req.body);
}

const fs = require('fs');

//devolve todos os carros
exports.getAll = async (req, res) => {
    return res.send("ok");
}

//devolve o carro com o id
exports.getById = async (req, res) => {
    //obter o id do carro
    const id = req.params.id;
    //just return same id
    return res.send(id);
}

//cria um carro
exports.create = async (req, res) => {
    //obter o carro pelas características enviadas
    const {id, Marca, Detalhes, Foto} = req.body;
    //envia o carro criado
    return res.status(201).send(req.body);
}
