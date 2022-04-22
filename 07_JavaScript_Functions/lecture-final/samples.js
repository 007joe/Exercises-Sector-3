// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(1,1));
// console.log(sum(5,1));

// //functional expression
// const aa = function sum2(a,b) {
//     return a + b;
// }
// console.log(aa(2,3));
// console.log(aa(5,5));
// console.log(typeof aa);

// let xyz;
// console.log(typeof xyz);

// const b = sum(5,5);
// console.log(b);

// //do magic happens
// const abc = function (a,b) {
//     return a + b;
// }

// console.log(abc(4,4));

// //anonymous function with arrow operator (arrow operator is being concise)
// const sum3 = (a,b) =>{
//     return a + b;
// }

//start from this... turn it into an anonymous function
// function helloWord(name) {
//    return 'Hello ' + name;
// }

// step 1: turning it into functional expression
// const hello = function helloWord(name) {
//     return 'Hello ' + name;
// }

//step 2: get rid of function keyword and moved arrow to right of the params, then got rid of the name
// const hello = (name) => {
//     return 'Hello ' + name;
// }

// functions can be passed into ot
// function add(a,b) {
//     return a+b;
//  } 
 
//  function subtract(a,b) {
//     return a - b;
//  }

//  function onClickyClick(func, num1, num2) {
//      console.log(func(num1, num2));
//  }

//  onClickyClick(add, 5,5);
//  onClickyClick(subtract, 5,2);


// function multipleBy(number = 0, multiplier = 0) {
//     return number * multiplier;
// }

// console.log(multipleBy(5,5));
// console.log(multipleBy());
// console.log(multipleBy(1));


function exampleWithUnknownArguments() {
    console.log(arguments.length);

    //convert arguments object to an Array
    const argsAsArray = Array.from(arguments);
    console.log(argsAsArray);
}

exampleWithUnknownArguments();
exampleWithUnknownArguments(1,2);
exampleWithUnknownArguments(1,2,3);

function multipleArgs(x,y,z) {
    return x * y * z;
}

console.log(multipleArgs(1,2,3));

const args = [4,4,1];
console.log(multipleArgs(...args));






