module.exports = function Cart(oldCart){
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    
    this.addnewItems = function(item, id){
        //Will not a product if it already exists in the cart if it exists, then just update the quantity.
                var storedItem = this.items[id];

                if(!storedItem){
                    storedItem = this.items[id] = {item :item, quantity: 0, price: 0};
                }
                storedItem.quantity++;
                storedItem.price = storedItem.item.price * storedItem.quantity;
                this.totalQty++;
                this.totalPrice += storedItem.item.price;
            };
    
    this.reduceByOne = function(id){
        
        this.items[id].quantity--;
        this.items[id].price -= this.items[id].item.price;
        this.totalQty--;
        this.totalPrice -= this.items[id].item.price;
        
        if(this.items[id].quantity <= 0){
            delete this.items[id];
        }  
    };
    
    this.removeItem = function(id){
        this.totalQty -= this.items[id].quantity;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
        
        
    };
    
     this.generateArray = function(){
            var arr = [];
            for(var id in this.items){
                arr.push(this.items[id]);
            }
            
            return arr;
        };
    
};