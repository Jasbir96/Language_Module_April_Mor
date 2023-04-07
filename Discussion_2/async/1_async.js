// let a = true;
// console.log("Before");
// setTimeout(() => {
//     a = false;
//     console.log("I broke the while loop");
// }, 1000);
// console.log("After");

// while (a) {

// }


console.log("Before");

const cb2 = () => {
    console.log("set timeout 1");
    while (1) {
    }
}
const cb1 = () => console.log("hello");

setTimeout(cb2, 1000) //1000  
setTimeout(cb1, 2000) //2000

console.log("After");



//  call back hell -> nesting of callbacks-> redability reduces 

// call back hell -> 
// nesting of callbacks-> pyramid of doom  -> solve it using a good design pattern
// inversion of control
// callback we can have trust issues 
