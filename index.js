
const express = require('express');
const sampleDogs =require('./data-cleaning/sampleData.js');
const db = require('./db/db')
const router = require('./routes/router.js')


const simplifyData = require('./data-cleaning/data-cleaning.js')


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(router);

console.log(simplifyData());
// const db = new pg.Client({
//   user: 'postgres',
//   host: 'barkend-db-1.c7qgkmqa6pkb.us-west-1.rds.amazonaws.com',
//   database: 'barkend_db_pgsql',
//   password: 'backend2310',
//   port: "5432",
// });

// const db = new pg.Client({
//   user: 'postgres',
//   host: 'database-1.c50aguo6s8fu.us-west-1.rds.amazonaws.com',
//   database: 'postgres',
//   password: 'barkend123',
//   port: "5432",
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//   } else {
//     console.log('Connected to the database successfully!');
//   }
// });


db.raw('SELECT  1+1 AS result')
  .then(() => {
    console.log('Connected to the database successfully!');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

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