$(function(){
   let total = 0.00, // Total price = subtotal + tax
       TAX = 0.0875, // Tax 
       totalTax = 0.00, // Total tax = tax + subtotal
       subTotal = 0.00; // Subtotal = item price

    /***
     * FILL IN CODE WHERE YOU SEE AN ASTERICKS(*)
    **/

    $("#subtotal").text("$"+subTotal);
    $("#total").text("$"+total);

    // ADD PRICE TO TOTAL
    $(".addItem").click(function(e){
        //* Get the store listing price and assign to itemPrice
        var itemPrice =  0; 

        // adds to the subtotal
        subTotal += itemPrice;

        //* get total
        // Calculate the total 
        total = 0;

        //* Tax
        // Calculate the tax
        totalTax = 0;

        // Print values
        $("#subtotal").text("$"+subTotal.toFixed(2));
        if(subTotal > 0){
            $("#tax").text("$"+totalTax.toFixed(2));

            //* PRINT THE TOTAL TO Screen
            //* Replace the Zero with the correct variable to get the total
            $("#total").text("$"+parseFloat(0).toFixed(2));
        }
    });

    // REMOVE PRICE FROM TOTAL
    $(".removeItem").click(function(e){
        //* Get the store listing price and assign to itemPrice
        var itemPrice =  0; 

        if(subTotal > 0){
            subTotal -= itemPrice;
        }   

        //* get total
        //* Calculate the total 
        total = 0;

        //* Tax
        //* Calculate the tax
        totalTax = 0;

        // Print values
        $("#subtotal").text("$"+subTotal.toFixed(2));
        if(subTotal >= 0){
            $("#tax").text("$"+totalTax.toFixed(2));

            //* PRINT THE TOTAL TO Screen
            //* Replace the Zero with the correct variable to get the total
            $("#total").text("$"+parseFloat(0).toFixed(2));
        }
     });
});