// fetch('https://dummyjson.com/products');
//fetch is a promise
async function fetchdata(){
    try{
        const response = await fetch('https://dummyjson.com/products');
        const jsondata = await response.json();
        console.log(jsondata);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

fetchdata();

//hw -fetch data from dummyjson.com/products and display the product names,desc,price in console
async function displayProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
            const jsondata = await response.json();
            const productsdiv = document.getElementById('products');
            jsondata.products.forEach(product => {
                const productelem = document.createElement('div');
                productelem.innerHTML = `
                    <div>${product.title}</div>
                    <div>${product.description}</div>
                    <div> Price: ${product.price}</div>`;
                productsdiv.appendChild(productElem);
        });
    } catch (error) {
        console.log("Error fetching products:", error);
    }
}

displayProducts();