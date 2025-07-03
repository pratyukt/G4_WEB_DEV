let cart = {"shoes":6000, "shirt":2000, "pants":5000};
function orderdetail(cart){
    //total no. of products
    let totalproducts = cart.length; 
    console.log(totalproducts);                                                                                                                                                                                                                              
    //total amount of products*1000
    let totalprice = 0;
    for(let product in cart){
        totalprice += cart[product];
    }
    console.log(totalprice);
}

function ordersummary(){
    //total price and total products
    //then generate orderid
    orderdetail(cart);
}

function paymentgateway(){
    // orderdetail, product details and price.. payment is successful
    paymentgateway(cart);
}

function successfulorder(){
    //it will show all the details about the payment product name and everything
    console.log("Payment successful! Your order has been placed.");
}

successfulorder(cart);