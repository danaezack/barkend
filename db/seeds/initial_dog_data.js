/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const simplifyData = require('../../data-cleaning/data-cleaning.js');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function(knex) {
 
  await knex('contact').del();
  await knex('photos').del();
  await knex('environment').del();
  await knex('attributes').del();
  await knex('dogs').del();

  const cleanData = simplifyData();

  for (const dog of cleanData) {
   
    const [dogRecord] = await knex('dogs').insert({
      dogid: dog.dogid,
      type: dog.type,
      breeds: dog.breeds,
      colors: dog.colors,
      age: dog.age,
      gender: dog.gender,
      size: dog.size,
      tags: dog.tags,
      name: dog.name,
      favorited: dog.favorited
    }, ['id']);

    const insertedDogId = dogRecord.id;

    if (dog.attributes) {
      await knex('attributes').insert({
        spayed_neutered: dog.attributes.spayed_neutered,
        house_trained: dog.attributes.house_trained,
        special_needs: dog.attributes.special_needs,
        shots_current: dog.attributes.shots_current,
        dog_id: insertedDogId
      });
    }

    if (dog.environment) {
      await knex('environment').insert({
        children: dog.environment.children,
        dogs: dog.environment.dogs,
        cats: dog.environment.cats,
        dog_id: insertedDogId
      });
    }

    if (dog.photos && dog.photos.length > 0) {
      for (const photo of dog.photos) {
        await knex('photos').insert({
          photo_url: photo.full,
          size: 'full',
          dog_id: insertedDogId 
        });
      }
    }

    if (dog.contact) {
      await knex('contact').insert({
        email: dog.contact.email,
        phone: dog.contact.phone,
        dog_id: insertedDogId
      });
    }
  }
};

