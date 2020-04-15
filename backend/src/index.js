const express = require('express');
const cors = require('cors');
/**IMPORTANDO O ARQUIVO ROUTES DA PASTA SRC | O ./ SERVE PARA REFERENCIA A PASTA DO MESMO ARQUIVO QUE 
 *ESTÁ NA PASTA | ../ SERVE PARA SAIR DE UMA PASTA
 */
const routes = require('./route');
const app = express();

/**TRADUÇÃO DE ARQUIVO JSON PARA OBJETO DO JS */
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
/**
 * MÉTODOS HTTP:
 * GET - buscar/listar uma informação do backend
 * POST - criar uma informação no backend
 * PUT - alterar uma informação no backend 
 * DELETE -deletar uma informação no backend
 */
/**
 * TIPOS DE PARÂMETROS
 * QUERY PARAMS: parâmetros nomeados enviados na rota após "?" (filtro,paginação)
 * ROUTE PARAMS: parâmetros utilizados para identificar recursos
 * REQUEST BODY: corpo da requisição, utilizando para criar ou alterar recursos 
 */
/**
 * SQL: MYSQL, SQLITE, POSTGRESQL, ORACLE, MICROSOFT SQL SERVER 
 * NOSQL: MONGODB, COUCHDB, ETC
*/
