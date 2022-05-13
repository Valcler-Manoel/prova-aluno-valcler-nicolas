/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_NOTA_FISCAL_VENDA', table => {
        table.increments('id').primary()
        table.integer('codigo').unique().notNull()
        table.string('data')
        table.double('valorNota')
            .notNull().defaultTo(true)
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TTB_NOTA_FISCAL_VENDA')
};