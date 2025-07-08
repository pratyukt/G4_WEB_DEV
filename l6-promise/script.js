const promise = new Promise((res, req) => {
    setTimeout(() => {
        res("promise chlega");
    }, 2000);
});

// promise
//     .then((res) => {
//         console.log(res);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log("p2");
//                 resolve();
//             }, 2000);
//         });
//     })
//     .then(() => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log("p3");
//                 resolve();
//             }, 5000);
//         });
//     })
//     .then(() => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log("p4");
//                 resolve();
//             }, 4000);
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

function something(mes,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("promise resolved",mes)
            resolve("promise resolved",mes)
        },delay)
    })
}
promise.then((res)=>{
    console.log((res))
})
.then(()=>{
    return something("p2",5000);
}).then(()=>{
    return something("p3",3000);
}).then(()=>{
    return something("p4",1000);
})