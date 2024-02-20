/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

// seeds/seed_data.js


// exports.seed = function(knex) {
//   // Deletes ALL existing entries for a clean slate (optional)
//   return knex('your_table_name').del()
//     .then(function () {
//       // Inserts seed entries from your data.js file
//       return knex('your_table_name').insert(myData);
//     });
// };

//================================================
// const papersData = require('../../../papersData');

const simplifyData = require('./path/to/simplifyData');
const dogData = simplifyData();


exports.seed = async (knex) => {
try {
  await knex('dogs').del()
}
}







// const createPaper = async (knex, paper) => {
//   const paperId = await knex('papers').insert({
//     title: paper.title,
//     author: paper.author
//   }, 'id');

//   let footnotePromises = paper.footnotes.map(footnote => {
//     return createFootnote(knex, {
//       note: footnote,
//       paper_id: paperId[0]
//     })
//   });

//   return Promise.all(footnotePromises);
// };

const createDog = async (knex, dog) => {
  const dogId = await knex('dogs').insert({
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
  }, 'id');

  let attributePromises = dog.attributes.map(attribute => {
    return createAttribute(knex, {
      // note: footnote,
      spayed_neutered: attribute[spayed_neutered],
      house_trained: attribute[house_trained],
      special_needs: attribute[special_needs],
      shots_current: attribute[shots_current],
      dog_id: dogId[0]
    })
  });

  let environmentPromises = dog.environment.map(environment => {
    return createEnvironment(knex, {
      // note: footnote,
      // table.boolean('children')
      // table.boolean('dogs')
      // table.boolean('cats')
      dog_id: dogId[0]
    })
  });

  let photoPromises = dog.photos.map(photo => {
    return createPhoto(knex, {
      dog_id: dogId[0]
    })
  });

  let contactPromises = dog.contact.map(contact => {
    return createContact(knex, {
      // note: footnote,
      // table.string('email'),
      // table.string('phone');
      dog_id: dogId[0]
    })
  });

  // return Promise.all(footnotePromises);
};



// const createFootnote = (knex, footnote) => {
//   return knex('footnotes').insert(footnote);
// };

const createAttribute = (knex, footnote) => {
  return knex('footnotes').insert(footnote);
};

// exports.seed = async (knex) => {
//   try {
//     await knex('footnotes').del() // delete footnotes first
//     await knex('papers').del() // delete all papers

//     let paperPromises = papersData.map(paper => {
//       return createPaper(knex, paper);
//     });

//     return Promise.all(paperPromises);
//   } catch (error) {
//     console.log(`Error seeding data: ${error}`)
//   }
// }; dss