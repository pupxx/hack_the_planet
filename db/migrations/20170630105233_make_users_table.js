exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.integer('team_id').references('teams.id').onDelete('CASCADE')
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
