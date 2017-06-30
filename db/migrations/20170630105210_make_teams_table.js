exports.up = function(knex) {
  return knex.schema.createTable('teams', (table) => {
    table.increments();
    table.string('team_name').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('teams');
};
