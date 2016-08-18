exports.up = function (knex, Promise) {
  return knex.schema.createTable('conditions', function (table) {
    table.increments('id').primary()
    table.string('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('conditions')
}
