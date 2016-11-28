
exports.up = function(knex, Promise) {
  return knex.schema.createTable('concerts', function (table){
    table.increments();
    table.text('name');
    table.decimal('price', 5, 2);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('concerts');
};
