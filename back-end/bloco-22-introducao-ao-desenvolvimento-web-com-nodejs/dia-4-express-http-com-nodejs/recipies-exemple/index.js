const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id:1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id:2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id:3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((rec) => rec.name.includes(name) && rec.price < parseInt(maxPrice));

  res.status(200).json(filteredRecipes);
});

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({id, name, price});
  res.status(201).json({ message: 'Drink created successfully!'}); 
});

app.get('/recipes/:id', function (req, res) {
  const {id} = req.params
  const recipe = recipes.find((rec) => rec.id === parseInt(id));
  
  if(!recipe) return res.status(404).json({ message: 'Recipe not found!'});
  
  res.status(200).json(recipe);
});

app.get('/drinks/searlistench', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredDrinks = drinks.filter((drink) => drink.name.includes(name) && drink.price < parseInt(maxPrice));

  res.status(200).json(filteredDrinks);
});

listen
app.get('/drinks/:id', function (req, res) {
  const {id} = req.params
  const drink = drinks.find((dri) => dri.id === parseInt(id));

  if(!drink) return res.status(404).json({ message: 'Drink not found!'});

  res.status(200).json(drink);
});

app.get('/validateToken', function (req, res){
  const token = req.headers.authorization;
  if(token.length !== 16) return res.status(401).json({message: 'Invalid token'});

  res.status(200).json({message: 'Valid Token!'});
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((rec) => rec.id === parseInt(id));

  if(recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.put('/drinks/:id', function (req, res) {
  const { id } = req.parms;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((dri) => dri.id === parseInt(id));

  if(recipeIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!'});

  recipes.splice(recipeIndex, 1);
  
  res.status(204).end();
});



app.listen(3001, () => {
  console.log('Aplicacão ouvindo na porta 3001');
});