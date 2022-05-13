/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ITEM_NOTA_FISCAL', table => {
        table.increments('id').primary()
        table.integer('sequencial').unique().notNull()
        table.integer('quantidade').notNull()
        table.double('valor')
        table.string('produto')
            .notNull().defaultTo(true)
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ITEM_NOTA_FISCAL')
};