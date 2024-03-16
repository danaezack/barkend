const express = require('express');
const db = require('./db/db')
const router = require('./routes/router.js')
const knexfile = require ('./db/knexfile.js')
const cors = require('cors');

const simplifyData = require('./data-cleaning/data-cleaning.js')

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use(cors());
app.use(express.json());
app.use(router);

app.get('/api/v1/dogs', async (req, res) => {
  try {
    // Fetch basic dog data from the database
    let dogs = await db('dogs').select('*');

    if (dogs.length === 0) {
      return res.status(404).json({ error: "Pet not found" });
    }

    dogs = await Promise.all(dogs.map(async (dog) => {
      const attributes = await db('attributes').where('dog_id', dog.id).first();
      const environment = await db('environment').where('dog_id', dog.id).first();
      const photos = await db('photos').where('dog_id', dog.id).select('photo_url');
      const contact = await db('contact').where('dog_id', dog.id).first();

      // Combine the dog data with its related data
      return {
        ...dog,
        attributes,
        environment,
        photos: photos.map(photo => photo.photo_url), // Assuming you only want the URLs
        contact
      };
    }));

    res.json({ dogs });
  } catch (error) {
    console.error('Error fetching dogs:', error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.post('/api/v1/dogs', (req, res) => {
  const id = Date.now();
  const { name, type, age, gender } = req.body;

  app.locals.dogs.push({ id, name, type, age, gender });
  res.status(201).json({ id, name, type, age, gender });
});

app.patch('/api/v1/dogs/:id', (req, res) => {
  const { name } = req.body;
  const id = Number(req.params.id);
  const findDog = app.locals.dogs.find(dog => dog.id === id);
  console.log(findDog);

  if(!findDog) {
    res.status(404).json("Pet not found");
  }

  Object.assign(findDog, { name });
  res.status(200).json(findDog);
});

app.delete('/api/v1/dogs/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = app.locals.dogs.findIndex(dog => dog.id === id);

  if(index === -1) {
    res.status(404).json("Pet not found");
  }
  
  app.locals.dogs.splice(index, 1)
  res.status(200).json(app.locals.dogs);
});

module.exports = app;