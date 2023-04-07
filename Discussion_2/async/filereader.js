const fs = require("fs");
console.log("Before");
//  data required 
// cb -> fs.readFile intenally 
//  inversion of control 
fs.readFile("./f1.txt", cb);

function cb(err, data) {
    if (err) {
        console.log("err", err)
    } else {
        console.log("data", data)
    }
}

console.log("After");
