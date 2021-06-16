const express = require('express');
const produtoController = require ('../controllers/produtoController.js');
const router = express.Router();
 
router.post('/produto', produtoController.Insert);
 
module.exports = router;