exports.up = function(knex) {
  return knex.schema.createTable('scores', (table) => {
    table.increments();
    table.integer('score').notNullable();
    table.integer('team_id').references('teams.id').onDelete('CASCADE')
    table.integer('game_id').references('games.id').onDelete('CASCADE')
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('scores');
};
