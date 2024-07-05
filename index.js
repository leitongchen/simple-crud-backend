import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import productRoute from './backend/routes/product.route.js.js';

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to DATABASE!');

    app.listen(process.env.PORT, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.log('Connection failed.');
  });
