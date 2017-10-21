const posSeedData = require('./data/development/comment');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('Comment').insert(posSeedData);
    });
};
