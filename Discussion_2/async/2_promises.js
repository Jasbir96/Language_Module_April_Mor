// call back hell ->
// nesting of callbacks-> pyramid of doom  -> solve it using a good design pattern

// inversion of control
// callback we can have trust issues 


const fs = require("fs");
console.log("Before");
//  data required 
// cb -> fs.readFile intenally 

//  inversion of control 
// const promise=fs.promises.readFile("./f1.txt");
// promise.then(function(data){
//     console.log("data",data);
// })
// promise.catch(function (err) {
//     console.log("data", data);
// })
//  trust issues -> promise can be resolved or rejected once in a life time

// Advantages of Promises
// It solves inversion of control  -> just giving a promise instead of taking cb
// It solves trust issues ->promise can be resolved or rejected once in 
// a life time
//  promise callbacks have a diferent queue [micro-task]
// that has more priority than normal cb queue


//  JS -> single threaded
//  Nodejs -> single threaded
//  how it is able to execute asynchronous function -> event loop


// async await  -> syntax sugar -> then catch
const promise = fs.promises.readFile("./f1.txt");
// promise.then(function(data){
//     console.log("data",data);
// })
// promise.catch(function (err) {
//     console.log("data", data);
// })
(async function () {
    try {
        const data = await promise;
        console.log("data", data);
    } catch (err) {
        console.log("error", err);
    }
})();