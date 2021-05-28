const express = require('express');
const router = express.Router();

const {
  getProducts,
  getProductById,
} = require('../controller/productControllers');

router.get('/', getProducts);
router.get('/:id', getProductById);
// router.get('/test/:param1', test);

module.exports = router;
