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
    
    $('#orderAnotherButton, .pizza-orders, #grandTotal').hide();

    $('button#orderButton').click(function() {
        var sizeOfPizza = $('.pizza-size option:selected').val(); // gets value from the pizza-size selected option
        var toppingsOfPizza = $('.pizza-toppings option:selected').val(); // gets value from the pizza-toppings selected option
        var crustOfPizza = $('.pizza-crust option:selected').val(); // gets value from the pizza-crust selected option

        var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza); // Get the Total amount of the pizza
        var order = 1; //Assign default order number
        var grandTotal = 0; // For storing the total to be calculated


        // Appending fetched values from the select options
        $('#orderNo').html(order);
        $('#size').html($('.pizza-size option:selected').text() + " - " + sizeOfPizza);
        $('#toppings').html($('.pizza-toppings option:selected').text() + " - " + toppingsOfPizza);
        $('#crust').html($('.pizza-crust option:selected').text() + " - " + crustOfPizza);
        $('#total').html(total);
        grandTotal = grandTotal + total;
        $('#grandTotal span').html(grandTotal); // Displaying the grand total in our alert

        $('#orderButton').hide()
        $('#orderAnotherButton, .pizza-orders, #grandTotal').show();

        $('button#orderAnotherButton').click(function() {
            var sizeOfPizza = $('.pizza-size option:selected').val(); // gets value from the pizza-size selected option
            var toppingsOfPizza = $('.pizza-toppings option:selected').val(); // gets value from the pizza-toppings selected option
            var crustOfPizza = $('.pizza-crust option:selected').val(); // gets value from the pizza-crust selected option

            var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
            order = order + 1;
            grandTotal = grandTotal + total;
            let newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);
            let newPizzaOrder = '<p>Order No: <span id="orderNo">' + order +'</span> Size: <span id="size">' + $('.pizza-size option:selected').text() + " - " + newPizza.size + '</span> Toppings: <span id="toppings">' + $('.pizza-toppings option:selected').text() + " - " + newPizza.toppings + '</span> Crust: <span id="crust">' + $('.pizza-crust option:selected').text() + " - " + newPizza.crust + '</span> <strong>Total: <span id="total">' + newPizza.total + '</span> </strong></p>';
            
            $('.pizza-orders').append(newPizzaOrder);
            $('#grandTotal span').html(grandTotal);
        });

        $('button#checkoutButton').click(function() {
            // alert("Your order has been received! The Total is Kshs. " + grandTotal);
            prompt('Do you want it delivered?');
        });

    });



});