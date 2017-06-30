
exports.seed = function(knex) {
  return knex('teams').del()
    .then(() => {
      return knex('teams').insert([{
		 id: 1,
        team_name: 'Liscov',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        team_name: 'Turing',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        team_name: 'Lovelace',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 4,
        team_name: 'Ellis',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('teams_id_seq', (SELECT MAX(id) FROM teams));"
      );
    });
};
