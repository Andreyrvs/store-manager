const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');

const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');

const app = express();

app.use(bodyParser.json());

console.log('Iniciando o projeto usando docker');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', rescue(productsController.getAll));
app.get('/products/:id', rescue(productsController.getById));
app.post('/products', rescue(productsController.create));
app.put('/products/:id', rescue(productsController.updateById));
app.delete('/products/:id', rescue(productsController.deleteProduct));

app.post('/sales', rescue(salesController.createSale));
app.get('/sales', rescue(salesController.getAll));
app.get('/sales/:id', rescue(salesController.getById));

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;