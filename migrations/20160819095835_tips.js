exports.up = function (knex, Promise) {
  return knex.schema.createTable('tips', function (table) {
    table.increments('id').primary()
    table.string('suggestions')
    table.string('conditions_id')

  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tips')
}
