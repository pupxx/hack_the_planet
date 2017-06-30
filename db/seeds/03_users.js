
exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
		 id: 1,
        first_name: 'Ben',
        last_name: 'Gamble',
        team_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        first_name: 'Cheryln',
        last_name: 'Barber',
        team_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        first_name: 'Aaron',
        last_name: 'Kester',
        team_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 4,
        first_name: 'Stefan',
        last_name: 'Baatz',
        team_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 5,
        first_name: 'John',
        last_name: 'Seymour',
        team_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 6,
        first_name: 'Donny',
        last_name: 'Barclay',
        team_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
