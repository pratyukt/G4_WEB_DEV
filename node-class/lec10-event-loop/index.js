console.log("lets go");

console.log(240)

fs.readFile("./nutes.txt","utf-8",(err,data)=>{
    console.log(data);
})

process.nextTick(()=>{
    console.log("nexttick1")
})

function xyz(){
    console.log("xyz")
}

xyz();

setTimeout(() => {
    console.log("this is 1sec")
}, 2000);

setImmediate(()=>{
    console.log("setimmediate")
})

setTimeout(() => {
    console.log("this is 0sec")
}, 0);

process.nextTick(()=>{
    console.log("nexttick2")
})