
exports.seed = function(knex) {
  return knex('scores').del()
    .then(() => {
      return knex('scores').insert([{
		 id: 1,
        score: 10,
        team_id: 1,
        game_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        score: 20,
        team_id: 2,
        game_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        score: 30,
        team_id: 3,
        game_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 4,
        score: 40,
        team_id: 4,
        game_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('scores_id_seq', (SELECT MAX(id) FROM scores));"
      );
    });
};
