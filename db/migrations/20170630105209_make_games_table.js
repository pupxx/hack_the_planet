exports.up = function(knex) {
  return knex.schema.createTable('games', (table) => {
    table.increments();
    table.string('game_name').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('games');
};
