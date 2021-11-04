// Constructor
function Pizza(size, toppings, crust, total, orderNo){
    this.size = size;
    this.toppings = toppings;
    this.crust =  crust;
    this.total = total;
    this.orderNo = orderNo;
}

// Create instances of the Pizza object
let firstPizza = new Pizza("large", "pepperoni", "crispy", 1200, 1);
let secondPizza = new Pizza("medium", "cheese", "gluten-free", 800, 2); 

Pizza.prototype.myOrderDetails = function() {
    console.log("Your order has been received for a " + this.size + " Pizza, with " + this.toppings + " toppings on a " + this.crust + " crust!")
}


// UI Logic
$(document).ready(function() {
    $('button#orderButton').click(function() {
        var sizeOfPizza = $('.pizza-size option:selected').val(); // gets value from the pizza-size selected option
        var toppingsOfPizza = $('.pizza-toppings option:selected').val(); // gets value from the pizza-toppings selected option
        var crustOfPizza = $('.pizza-crust option:selected').val(); // gets value from the pizza-crust selected option

        var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza); // 
        var order = 1;
        var grandTotal = 0;

        $('#orderNo').html(order);
        $('#size').html(sizeOfPizza);
        $('#toppings').html(toppingsOfPizza);
        $('#crust').html(crustOfPizza);
        $('#total').html(total);


    });

});