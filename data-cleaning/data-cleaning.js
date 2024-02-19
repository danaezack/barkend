const sampleDogs = require("./sampleData");

function simplifyData() {
  const cleanData = sampleDogs.map(dog => {
    return {
      "id": dog.id,
      "type": dog.type,
      "breeds": dog.breeds.primary,
      "colors": dog.colors.primary,
      "age": dog.age,
      "gender": dog.gender,
      "size": dog.size,
      "attributes": dog.attributes,
      "environment": dog.environment,
      "tags": dog.tags.join(', '),
      "name": dog.name,
      "photos": dog.photos,
      "contact": {
          "email": dog.contact.email,
          "phone": dog.contact.phone
      }
    }
  });

  // const filterPhotos = cleanData.filter(dog => dog.photos.length)
  // console.log(filterPhotos);
  console.log(cleanData.length);
  return cleanData;
}

module.exports = simplifyData()