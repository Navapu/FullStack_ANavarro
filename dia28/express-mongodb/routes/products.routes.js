import express from 'express';
const router = express.Router()
import { getProduct, createProduct } from '../controllers/product.controller.js';

router.get('/', getProduct);
router.post('/', createProduct);

export default router;