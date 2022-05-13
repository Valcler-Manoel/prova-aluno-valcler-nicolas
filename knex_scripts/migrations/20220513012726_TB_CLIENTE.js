/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_CLIENTE', table => {
        table.increments('id').primary()
        table.integer('codigo').unique().notNull()
        table.string('cnpjcpf').unique()
        table.string('nome')
            .notNull().defaultTo(true)
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_CLIENTE')
};