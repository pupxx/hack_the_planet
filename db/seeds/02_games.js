
exports.seed = function(knex) {
  return knex('games').del()
    .then(() => {
      return knex('games').insert([{
		 id: 1,
        game_name: 'Front End Trivia',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        game_name: 'Back End Trivia',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('games_id_seq', (SELECT MAX(id) FROM games));"
      );
    });
};
