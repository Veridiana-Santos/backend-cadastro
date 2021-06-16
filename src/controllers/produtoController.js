// Define a utilização do model cliente e a dependência http-status
const Produto = require('../models/cliente');
const status = require('http-status');
 
// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const preco = req.body.preco;
    const dataCadastro = req.body.dataCadastro;
    const ativo = req.body.ativo;
 
    // Popula cada um dos campos do model com os campos recebido na request
    Produto.create({
        nome: nome,
        preco: preco,
        dataCadastro: dataCadastro,
        ativo: ativo,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(Produto => {
            if (Produto) {
                res.status(status.OK).send(Produto);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};