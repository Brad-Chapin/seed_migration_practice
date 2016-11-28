
exports.up = function(knex, Promise) {
  return knex.schema.createTable('attendees', function (table){
    table.increments();
    table.integer('concert_id').notNullable().references('id').inTable('concerts').onDelete('cascade');
    table.text('name');
    table.integer('age');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('attendees');
};
