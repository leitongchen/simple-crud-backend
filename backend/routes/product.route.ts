import express from 'express';
import Product from '../models/product.model';

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller';

const router = express.Router();

router.post('/', createProduct);
router.get('/:id', getProductById);

// UPDATE A PRODUCT
router.put('/:id', updateProduct);

// DELETE A PRODUCT
router.delete(':id', deleteProduct);

router.get('/', getProducts);

export default router;
