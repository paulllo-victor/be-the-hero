//CRIAR O ID ALEATORIAMENTE
const crypto = require('crypto');
//IMPORTANDO CONEXAO COM O BANCO DE DADOS
const connection = require('../database/connection');
module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },
    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        //INSERINDO DADOS NO BANCO DE DADOS
        //ASYNC = SICRONIZACAO - AWAIT= ASSIM QUE CHEGAR NO METODO ELE VAI 
        //TER QUE ESPERAR O MESMO FINALIZAR POR COMPLETO
        await connection('ongs').insert({
            id,
            name, 
            email,
            whatsapp,
            city,
            uf,
        });
        return response.json({ id });
    }
};