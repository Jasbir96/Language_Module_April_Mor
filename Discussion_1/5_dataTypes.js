// primitives -> number  -> 2^51-1 to -2^51-1, boolean ,strings, undefined ,null
    // BigInt 
    //  symbol -> primitive 

//  what is a symbol 
// let a="hi";
// let b="hi";
// console.log(a==b);
// let arr1=[1,2,3];
// let arr2=[1,2,3];
// console.log(arr1==arr2);

// primitives -> always unique 

// let sym1=Symbol("sym1");
// let sym2=Symbol("sym2");
// console.log(sym1, sym2 , "res", sym1==sym2);

//  It's usecase -> 

let obj={
    name:"Steve",
    id:1234
}

// you want someone to only add the data to your object 
// not unintentially update it
// obj.name="loki";
let sym1=Symbol("name");
obj[sym1]="loki";
let sym2=Symbol("name");
obj[sym2]="rogers";
// console.log(obj);

const keys=Object.keys(obj);
console.log("keys", keys);

