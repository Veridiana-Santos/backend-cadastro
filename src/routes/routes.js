const express = require('express');
const produtoController = require ('../controllers/produtoController.js');
const router = express.Router();
 
router.post('/produto', produtoController.Insert);
router.get('/produto', produtoController.SelectAll);
router.get('/produto/:id', produtoController.SelectDetail);

 
module.exports = router;