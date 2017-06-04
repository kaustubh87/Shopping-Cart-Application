var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
    
Product.find(function(error, docs){
    
    res.render('shop/index', { title: 'Shopping Cart' , products: docs });
    console.log(docs);
});
  
});

module.exports = router;
