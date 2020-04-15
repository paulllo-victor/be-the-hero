//CRIADO CONEXAO COM O BANCO DE DADOS
const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;