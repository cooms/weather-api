
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tips').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tips').insert({id: 991, suggestions: 'Get your washing on the line!', conditions_id: '101'}),
        knex('tips').insert({id: 992, suggestions: 'you\'ll need an umbrella', conditions_id: '102'}),
        knex('tips').insert({id: 993, suggestions: 'meh', conditions_id: '103'}),
        knex('tips').insert({id: 994, suggestions: 'Definitely take an umbrella!', conditions_id: '104'}),
        knex('tips').insert({id: 995, suggestions: 'Are you crazy? Don\'t leave the house!', conditions_id: '105'})
      ]);
    });
};
