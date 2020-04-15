
exports.up = function(knex) {
  //METODO UP SEMPRE RESPONSÁVEL PELA CRIAÇÃO DAS TABELAS, OQ VAI ACONTECER AO EXECUTAR A MIGRATION
  return knex.schema.createTable('ongs',function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();
  });
};

exports.down = function(knex) {
  //METODO DOWN DESFAZ O QUE O UP CRIOU, TIPO DELETAR UMA TABELA, (UM CTRL Z DA VIDA);
  return knex.schema.dropTable('ongs');
};
