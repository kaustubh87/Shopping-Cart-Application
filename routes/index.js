var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');

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


router.get('/add-to-cart/:id', function(req,res,next){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
    
    Product.findById(productId, function(err, product){
        if(err)
            {
                return res.redirect('/');
            }
        cart.addnewItems(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    });
    
});

            
module.exports = router;