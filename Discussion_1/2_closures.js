var varName = 10;
//  func def
// function b() {
//     console.log(varName);
// }
// function fn() {
//     var varName = 20;
//     //  fun call
//     b();
//     console.log(varName);
// }
// fn();

// function func() {
//     let a = 10;
//     let b = 20;
//     return function sum() {
//         console.log("sum is ", a + b);
//     }
// }
// console.log("Before");
// const sumFN = func();
// console.log("B/W");
// sumFN();
// console.log("After");

// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count=count+1;
//         return count
//     }
    
//     return innerFunction;
// }

// const innerFunc = outerFunction() ;
// console.log(innerFunc()) 
// console.log(innerFunc()) 
// console.log(innerFunc()) 


// function createCounter(init, delta) {
//     function count() {
//         init = init + delta;
//         return init
//     }
//     return count;
// }
// let c1 = createCounter(10, 5); //[init =10, delta=5]
// let c2 = createCounter(5, 2); // [init =5, delta=2]

// console.log(c1()) // [init=15, delta=5];
// console.log(c2()) // 7
// console.log(c1()) // 20
// console.log(c2()) // 9

//arrFn  =[fn,fn,fn]
//i -> 0
// fn -> also allocated  
function outer() {
    let arrFn = [];
    //  getting i's value from block scope 
    for (let i=0; i < 3; i++) {
        arrFn.push(function fn() {
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();

//0 ,1,2
// 3,3,3


