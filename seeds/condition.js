
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('conditions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('conditions').insert({id: 101, description: 'Sunny'}),
        knex('conditions').insert({id: 102, description: 'Partly Cloudy'}),
        knex('conditions').insert({id: 103, description: 'Cloudy'}),
        knex('conditions').insert({id: 104, description: 'Rainy'}),
        knex('conditions').insert({id: 105, description: 'Thunder'})
      ]);
    });
};
