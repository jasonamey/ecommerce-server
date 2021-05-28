require('dotenv').config();
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');
const Product = require('./models/Product');
const productData = require('./data/products');

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Running' });
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is up and running`));
