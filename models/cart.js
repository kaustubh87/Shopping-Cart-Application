module.exports = function Cart(initItems){
    this.items = initItems;
    this.totalQty = 0;
    this.toalPrice = 0;
    
    this.addnewItems = function(item, id){
        //Will not a product if it already exists in the cart if it exists, then just update the quantity.
        
        var storedItem = this.items[id];
        
    }
    
};