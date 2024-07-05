import express from 'express';
import mongoose from 'mongoose';

import productRoute from './backend/routes/product.route.js.js';

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRoute);

mongoose
  .connect(
    'mongodb+srv://admin:sdtwQxfzBFsxib7G@backenddb.tkqwe1n.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB'
  )
  .then(() => {
    console.log('Connected to DATABASE!');

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.log('Connection failed.');
  });
