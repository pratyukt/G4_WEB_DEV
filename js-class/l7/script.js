// const grandparent = document.getElementById("grandparent");

// const parent = document.getElementById("parent");

// const child = document.getElementById("child");

// grandparent.addEventListener("click",(e)=>{
//     console.log("dadaji ko chheda")
//     e.stopPropagation();
// })

// parent.addEventListener("click",(e)=>{
//     console.log("mere ko chheda")
//     e.stopPropagation();
// })

// child.addEventListener("click",(e)=>{
//     console.log("apna hi chheda")
//     e.stopPropagation();
// })

const productlist = document.getElementById("productlist");

//event delegation
if (productlist) {
  productlist.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      console.log(event.target.textContent);
    }
  });
}

const newelement = document.createElement("li");
newelement.textContent="bottle";
productlist.appendChild(newelement);

const textBox = document.getElementById("textBox");

let time;
textBox.addEventListener("input",(event)=>{
    clearTimeout(time);
    time = setTimeout(() => {
        console.log("typed",event.target.value);
    }, 1000);

})

