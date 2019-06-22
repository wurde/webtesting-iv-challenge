'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.increments('id')
    table.text('title').notNullable()
    table.text('content')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
