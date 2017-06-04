var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping-cart');

var products = [
    
    new Product({
    imageSrc : 'images/image-2.jpg',
    title: 'Purse 2',
    description:'Great purse made with wool',
    price: 10

}),
    
    new Product({
    imageSrc : 'images/image-3.jpg',
    title: 'Purse 3',
    description:'Great purse made with wool',
    price: 15

}),
    
    new Product({
    imageSrc : 'images/image-4.jpg',
    title: 'Purse 4',
    description:'Great purse made with wool',
    price: 25

}),
    
    new Product({
    imageSrc : 'images/image-5.jpg',
    title: 'Purse 5',
    description:'Great purse made with wool',
    price: 30

}),
    new Product({
    imageSrc : 'images/image-6.jpg',
    title: 'Purse 6',
    description:'Great purse made with wool',
    price: 40

}),
    
    new Product({
    imageSrc : 'images/image-7.jpg',
    title: 'Purse 7',
    description:'Great purse made with wool',
    price: 20

}),
    new Product({
    imageSrc : 'images/image-8.jpg',
    title: 'Purse 8',
    description:'Great purse made with wool',
    price: 60

}),
    
    new Product({
    imageSrc : 'images/image-9.jpg',
    title: 'Purse 9',
    description:'Great purse made with wool',
    price: 34

}),
    new Product({
    imageSrc : 'images/image-10.jpg',
    title: 'Purse 10',
    description:'Great purse made with wool',
    price: 25

}),
    
];

var done = 0; 

for (var i = 0; i< products.length;i++){
        products[i].save(function(err, result){
            done++;
            if ( done === products.length){
                exit();
            }
        });
}

function exit(){
    mongoose.disconnect();
}

