<<<<<<< HEAD
// console.log("Hello");
// console.log('World');
// /*multi line
// comment*/
// //declare variable
// let x = 1;
// let y = 1;
// let sum = x + y;
// console.log(sum);
//  x = 1;
// y = 'StringValueGoesHere';
// sum = x + y;
// console.log(sum);

// //NaN
// y = NaN;
// x = 'Hello';
// sum = x + y;
// console.log(sum);

// //undefined
// let z;
// console.log(z);

// //NaN boolean (is not a number)
// console.log(isNaN(1));
// console.log(isNaN('Steve'));

// let x = 1; //let = changeable
// x = 7;
// x = 'Bob';
// console.log(x);

// const y = 1; //const = immutable

// const z = y + 1;
// console.log(z);

//JavaScript for loop
for (let x = 0; x < 10; x++) {
    console.log(x);
}

=======
console.log("Hello");
console.log('World');

/*
   multi
   line
   comments



// declare variable
let x = 1;
let y = 1;
let sum = x + y;
console.log(sum);

x = 1;
y = 'StringValueGoesHere';
sum = x + y;
console.log(sum);

//NaN
y = NaN;
x = 'Hello';
sum = x + y;
console.log(sum);

console.log(isNaN(1));

let z;
console.log(z);
*/


/*
let x = 1;
x = 7;
x = 'Bob';
console.log(x);


const y = 1;  //immutable
const z = y + 1;
console.log(z);
*/

// choose const when possible
// choose let when something has to change.
//never use var !!!!!!!!!!

/*
for (let x = 0; x < 10; x++) {
    console.log(x);
}
*/



function add(number1,number2) {
   return number1 + number2;
}

function subtract(number1, number2) {
    return number2 - number1;
}

const sum = add(3,6);
console.log(sum);

const diff = subtract(3,6);
console.log(diff);


const name = 'Steve';
const first3 = name.substr(0,2);
console.log(first3);





let students = ['Semir', 'Seyoung', 'Lucas'];
console.log(students);
console.log(students[0]);

students[0] = 'Semir T.';
console.log(students);

//add to array at the end
students.push('Gary');
console.log(students);

//remove from array from the end
let nameToRemove = students.pop();
console.log(nameToRemove);
console.log(students);

students.unshift('Philmon');
console.log(students);

let shiftedName = students.shift();
console.log(students);

let joined = students.join(" ");
console.log(joined);

console.log(students.reverse());

console.log(students);


for (let x = 0; x < students.length; x++ ) {
    console.log(students[x]);
}


let isAdult = false;
let age = 7;
while (!isAdult) {
    age++;
    if (age == 18) {
        isAdult = true;
    }
}



function findMatt() {

    const person = {
        firstName: 'Matt',
        lastName: 'Eland',
        isNerd: true,
        someObj:  {
            a: '1',
            b: '2'
        }
    }    

    return person;

}

const matt = findMatt();
console.log(matt);
console.log(matt.someObj.a);
console.log(matt.firstName);
console.log(matt.lastName);
///console.log(matt.isNerdy);      // this would be undefined 

if (matt.isNerd) {    
    console.log(matt.firstName + " will do your homework for free!");
}
else {
    console.log('Not a nerd');
    matt.eatsPizza
}
>>>>>>> 6791d5f6bb8df4a59e32ad29a66fac39afbc821d
