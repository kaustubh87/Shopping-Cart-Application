module.exports = function Cart(oldCart){
    this.items = oldCart.items;
    this.totalQty = oldCart.totalQty;
    this.toalPrice = oldCart.totalPrice;
    
    this.addnewItems = function(item, id){
        //Will not a product if it already exists in the cart if it exists, then just update the quantity.
                var storedItem = this.items[id];

                if(!storedItem){
                    storedItem = this.items[id] = {item :item, quantity: 0, price: 0};
                }
                storedItem.quantity++;
                storedItem.price = storedItem.item.price * storedItem.quantity;
                this.totalQty++;
                this.totalPrice += storedItem.price;
            }
    
     this.generateArray = function(){
            var arr = [];
            for(var id in this.items){
                arr.push(this.items[id]);
            }
            
            return arr;
        };
    
};