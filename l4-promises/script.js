console.log("start kro");

// let userdata =[{
//     firstName: "div",
//     age: 2
// },
// {
//     firstName: "div ka dost",
//     age: 21
// },
// {
//     firstName: "div ka dost ka dost",
//     age: 20
// }]

// userdata.map((user) => {
//     if(user.age<20){
//         console.log(user.firstName);
//     }
// });

// const placement =  new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject("Placement is not done");
//     }, 4000);
// })

// console.log(placement);

// placement.then((res)=>{
//     console.log("getting salary");
//     console.log(res);
// })
// .catch((err)=>{
//     console.log("no placement");
//     console.log(err);
// })

// const divpromise = new Promise((resolve,reject)=>{
//     reject("div ki shaadi");
// });

// console.log(divpromise);

// divpromise.then((res)=>{
//     console.log("shaadi successful");
//     console.log(res);
// })
// .then((res)=>{
//     console.log("have adopted kids");
//     console.log(res);
// })
// .catch((err)=>{
//     console.log("saheli bhaag gyi");
//     console.log(err);
// });

// const assignment1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Assignment 1 completed"), 2000);
// });

// const assignment2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Assignment 2 completed"), 2000);
// });

// const assignment3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Assignment 3 completed"), 2000);
// });

// const assignment4 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Assignment 4 completed"), 2000);
// });

// Promise.all([assignment1, assignment2, assignment3, assignment4])
//   .then((res) => {
//     console.log("all");
//     console.log("All assignments completed!", res);
//   })
//   .catch((err) => {
//     console.log("all");
//     console.log("Some assignment failed:", err);
//   });

// Promise.allSettled([assignment1, assignment2, assignment3, assignment4])
//   .then((res) => {
//     console.log("allsettled");
//     console.log("All assignments completed!", res);
//   })
//   .catch((err) => {
//     console.log("allsettled");
//     console.log("Some assignment failed:", err);
//   });

// Promise.race([assignment1, assignment2, assignment3, assignment4])
//   .then((res) => {
//     console.log("race");
//     console.log("All assignments completed!", res);
//   })
//   .catch((err) => {
//     console.log("race");
//     console.log("Some assignment failed:", err);
//   });

// Promise.any([assignment1, assignment2, assignment3, assignment4])
// .then((res) => {
//     console.log("any");
//     console.log("All assignments completed!", res);
//   })
//   .catch((err) => {
//     console.log("any");
//     console.log("Some assignment failed:", err);
//   });

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("resolve hogya");
//     }, 3000);
// })

// async function check(){
//     const data = await p1;
//     console.log("check func", data);
// }

// check();

// fetch('https://dummyjson.com/products');
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
            const data = await response.json();
            const productsDiv = document.getElementById('products');
            data.products.forEach(product => {
                const productElem = document.createElement('div');
                productElem.innerHTML = `
                    <div>${product.title}</div>
                    <div>${product.description}</div>
                    <div> Price: ${product.price}</div>`;
                productsDiv.appendChild(productElem);
        });
    } catch (error) {
        console.log("Error fetching products:", error);
    }
}

displayProducts();