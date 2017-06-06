var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
    
Product.find(function(error, docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i =0 ;i <docs.length; i += chunkSize){
        productChunks.push(docs.slice(i, i+ chunkSize));
        //console.log(productChunks);
    }
    res.render('shop/index', { title: 'Shopping Cart' , products: productChunks });
});
  
});


/* Get signup page*/

router.get('/user/signup', function(req,res,next){
   res.render('user/signup', { csrfToken: req.csrfToken()}); 
});

module.exports = router;

router.post('/user/signup', function(req,res,next){
   res.redirect('/'); 
});
