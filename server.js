const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const sampleDogs = require('./sampleData')

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.locals.dogs = sampleDogs;

app.get('/api/v1/dogs', (req, res) => {
  const dogs = app.locals.dogs;

  if(!dogs) {
    res.status(404).json("Pet not found");
  }
  
  res.json( { dogs } );
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