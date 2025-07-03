console.log("hello")

// setTimeout(()=>{
//     console.log("chllooo")
// },3000)

// setTimeout(()=>{
//     console.log("chllooo khaaee")
// },5000)

// function cb(){
//     console.log("ye me hu")
// }

// function walkin(cb){
//     console.log("restraunt me entry")
//     setTimeout(cb,3000);
// }

// function checkin(cb){
//     console.log("menu dekhlu me")
//     setTimeout(cb,6000);
// }

// function foodorder(cb){
//     console.log("khaana agya")
//     setTimeout(cb,8000);
// }

// function bill(cb){
//     console.log("bill leao")
//     setTimeout(cb,3000);
// }

// function endin(){
//     console.log("mzaa agya")
// }

// // pyramid of doom
// walkin(()=>{
//     checkin(()=>{
//         foodorder(()=>{
//             bill(()=>{
//                 endin()
//             })
//         })
//     })
// })

// console.log("bye")

//map
let arr = [1,22,4,22,5,3];
console.log(arr);

Array.prototype.calculate=function(logic){
    let arr2 =[];
    for(let i=0;i<this.length;i++){
        arr2.push(logic(this[i]));
    }
    return arr2;
}

function triple(x){
    return x*x*x
}

let output= arr.calculate(triple);
console.log(output);