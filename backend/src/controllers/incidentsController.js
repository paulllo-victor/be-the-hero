//COMO ESTAMOS  USANDO O PADRAO MVC O IDEAÇ É SER CRIADO APENAS 5 METODOS
//CREATE, LIST, DELETE, UPDATE ETC
//PASSOU DISSO O IDEAL É CRIAR OUTRO CONTROLLER COMO FOI O CASO DO PROFIRE
const connection = require('../database/connection');
module.exports = {
    async index(request, response){
        const { page = 1} = request.query;

        const [count] = await connection('incidents').count();

        

        const incidents = await connection('incidents').join('ongs', 'ong_id', '=', 'incidents.ong_id')
        .limit(5).offset((page - 1) * 5)
        .select(['incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },
    async create(request, response){
        const{ title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({id});
    },
    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents').where('id', id).select('ong_id').first();

        if(incident.ong_id != ong_id){
            //HTTP STATUS - 401 SIGNICA USUARIO NÃO AUTORIZADO
            return response.status(401).json({error : 'Operation not permitted.'});
        }
        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};