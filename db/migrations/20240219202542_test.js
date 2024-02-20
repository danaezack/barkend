/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
  return knex.schema
  .createTable('dogs', function(table) {
    table.increments('id').primary();
    table.integer('dogid');
    table.string('type');
    table.string('breeds');
    table.string('colors');
    table.string('age');
    table.string('gender');
    table.string('size');
    table.string('tags');
    table.string('name');
    table.boolean('favorited')
    table.timestamps(true, true);
  })
  .createTable('attributes', function (table) {
    table.increments('id').primary();
    table.boolean('spayed_neutered');
    table.boolean('house_trained');
    table.boolean('special_needs');
    table.boolean('shots_current');
    table.integer('dog_id').unsigned()
    table.foreign('dog_id').references('dogs.id')
    table.timestamps(true, true);
  })
  .createTable('environment', function (table) {
    table.increments('id').primary();
    table.boolean('children')
    table.boolean('dogs')
    table.boolean('cats')
    table.integer('dog_id').unsigned()
    table.foreign('dog_id').references('dogs.id')
    table.timestamps(true, true);
  })
  .createTable('photos', function (table) {
    table.increments('id').primary();
    table.string('photo_url');
    table.string('size');
    table.integer('dog_id').unsigned();
    table.foreign('dog_id').references('dogs.id');
    table.timestamps(true, true);
  })

  .createTable('contact', function (table) {
    table.increments('id').primary();
    table.string('email'),
    table.string('phone');
    table.integer('dog_id').unsigned()
    table.foreign('dog_id').references('dogs.id')
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function(knex) {
  return knex.schema
    .dropTable('attributes')
    .dropTable('environment')
    .dropTable('photos')
    .dropTable('contact')
    .dropTable('dogs')
};