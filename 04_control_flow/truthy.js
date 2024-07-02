const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false'(kyunki ye string ke andar hai), " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {//checking object is emty or not 
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined  //operator to do safety check of null and undefined

let val1;
// val1 = 5 ?? 10    
// val1 = null ?? 10    
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 //the first value except null and undefined will be assigned



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")