const express = require('express');
const ProductController = require('./controllers/productsController');

const app = express();
const port = 3001;

app.use(express.json());
app.use('/products', ProductController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));