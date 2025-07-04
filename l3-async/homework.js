let cart = {"shoes":6000, "shirt":2000, "pants":5000};
function orderdetail(cart){
    //total no. of products
    let totalproducts = Object.keys(cart).length; 
    console.log(totalproducts);        

    //total amount of products*1000
    let totalprice = 0;
    for(let product in cart){
        totalprice += cart[product];
    }
    console.log(totalprice*1000);
    return {totalproducts, totalprice: totalprice*1000};
}

function ordersummary(cart){
    //total price and total products
    orderdetail(cart);

    //then generate orderid
    let orderid = Math.floor(Math.random()*1000);
    console.log(orderid);
    return {orderid,totalprice};
}

function paymentgateway(cart){
    // orderdetail, product details and price.. payment is successful
    let {orderid,totalprice} = ordersummary(cart);
    console.log(orderid);

    for(let i=0;i<cart.length;i++){
        console.log(cart[i]);
    }
    console.log(totalprice);
    ordersummary(cart);
}

function successfulorder(){
    //it will show all the details about the payment product name and everything
    paymentgateway(cart);
    console.log("Payment successful! Your order has been placed.");
}

successfulorder(cart);