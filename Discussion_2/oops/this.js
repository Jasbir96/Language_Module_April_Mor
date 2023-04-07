//Can you implement the computeAmount 
//function to add all the numbers which are passed in the parameters ?
//  const computeAmount = 
// { };
//  console.log(computeAmount().value()) //0 
//  console.log(computeAmount().lacs(2).value()) //2,00,000 
// console.log(computeAmount().lacs(2).lacs(20).value()) //22,00,000 

// console.log(computeAmount().lacs(15).lacs(20).lacs(7).value()) //42,00,000



//  this is -> java , c++ -> some object / undefined


// let cap = {
//     name: "Steve",
//     sayHi: function () {
//         //  memory allocation 
//         console.log(global==this);
//         console.log("Hi from ", this.name);
//     }
// }
// //  this -> current obj 
// cap.sayHi();

// let sayHiAdd = cap.sayHi;
// // global object 
global.name="globalloki";
// sayHiAdd();






//  EC  -> enter[GEC]/ function is called  : 
    // global object / window
    // outer scope
    // memory allocation is done
    //this
// const cap = {
//     name: "Steve",
//     sayHi:  function(){
//         console.log("53", this.name);
//         function iAmInner(){
//             console.log("55", this.name);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();



// this is always defined on runTime

// method call -> this -> current object
// function call -> this -> global / window object
// GEC -> node -> this -> {}/ browser -> this -> window
// arrow function they don't have there own this -> outer scope

// arrow functions 
// -> they don't have there own this -> outer scope
//  they also don't have arguments array

this.name="loki";
const cap = {
    name: "Steve",
    sayHi:  ()=> {
        console.log("53", this.name);
        const iAmInner = () => {
            console.log("55", this.name);
        }
        iAmInner();
    }
}
// arrow does not bother about it's  
cap.sayHi();

