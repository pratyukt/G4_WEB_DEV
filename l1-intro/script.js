// console.log("Hello, World!");
// var a =123;
// console.log(a);
// function abc() {
//     console.log("test");
//     function def() {
//         console.log("def");
//     }
// }

// abc();

// console.log(b); //ReferenceError: Cannot access 'b' before initialization
// let b = 456;


// //arrow function898
// xyz();
// var xyz=()=>{
//     //TypeError: xyz is not a function
//     console.log("xyz");
// }

// js is gec(global execution context)


// {
//     //grandparent execution context
//     let x=100;
//     let y=200;
//     let z=300;
//     console.log(x);
//     console.log(y);
//     console.log(z);
//     console.log(a); //undefined, hoisting in js 
//     // ReferenceError: a is not defined in case of let/const
//     {
//         //parent execution context
//         console.log(x);
//         console.log(y);
//         console.log(z);
//         {
//             //child execution context
//             console.log(x);
//             console.log(y);
//             console.log(z);
//             var a = 400; // variable declared in child context
//         }
//     }
// }

// function abc(){
//     var x=100;
//     var y=200;
//     var z=300;
//     function def(){
//         // var v=400;
//         // console.log(v);
//         function ijk(){
//             console.log(x);
//             console.log(y);
//             console.log(z);
//             console.log(v);
//             var v=400;
//         }
//         ijk();
//     }
//     def();
// }
// abc();

// for(var i=0; i<=5; i++){
//     function test(i) {
//         setTimeout(() => {
//         console.log(i);
//         }, 3000);
//     }
//     test(i);
// }

function yoyo(xyz){
    console.log("yoyo");
    xyz();
}

function xyz(){ 
    console.log("xyz");
}
yoyo(xyz);