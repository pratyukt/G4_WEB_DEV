console.log("start");

var arr = [1, 22, 4, 22, 5, 3];

// const doubleval = arr.map((x)=>{
//     return x*2;
// })

// console.log(doubleval);

// Array.prototype.filler = function(logic){
//     let arr2=[];
//     for(let i=0;i<this.length;i++){
//         if(logic(this[i])){
//             arr2.push(this[i]);
//         }
//     }
//     return arr2; 
// }

// function morethan(logic){
//     return logic > 3;
// }

// function lessthan(logic){
//     return logic <= 3;
// }

// let output  = arr.filler(morethan);
// let output1  = arr.filler(lessthan);
// console.log(output);
// console.log(output1);

Array.prototype.reducer = function(logic,initial){
    let accumulator = initial;
    for(let i=0;i<this.length;i++){
        accumulator *= this[i];
    }
    return accumulator;
}

function sum(logic){
    return reducer(logic,1);
}

output = arr.reducer(sum,1);
console.log(output);