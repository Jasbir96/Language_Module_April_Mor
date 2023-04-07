const {runMlalgo,runPMAlgo}=require("./lib.js");

console.log("Before");
// trust issue
let amount = 100;
let priceofOne = 20;
//  async function -> use 
// runMlalgo(100, chargeCreditCard);

let promise=runPMAlgo(100);
promise.then(chargeCreditCard);

function chargeCreditCard() {
    amount = amount - priceofOne;
    console.log("Amount: ", amount);
}
console.log("After");
