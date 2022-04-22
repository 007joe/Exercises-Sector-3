//let names = ['Ohio', 'Indiana', 'Alaska', 'Florida', 'New York'];

// for (let i = 0; i< names.length; i++) {
//  //   console.log(names[i]);
// }

//for each executes a function for each element in the array.
// arguments (function)
//names.forEach(logName);

// function logName(name) {
//  //   console.log(name);
// }

// loops through each element of the array and calls the function (callback function)
// index and arrayObj are optional


const names = ['Ohio', 'Indiana', 'Alaska', 'Florida', 'New York', 'Alabama', 'Arkansas'];

names.forEach( (x, index, arrayObj) => {

    if (index == 0) {
        console.log('length of array =' + arrayObj.length);
    }
    
    console.log(x + ' is found at index ' + index);

});





//Use map when you want to alter or change each element in the array
// map takes in a callback function
const newArray = names.map((item) => {

    // modify each element 
    return item + ' is a state in the US';
});

console.log(newArray);


const filteredArray = names.filter( (item) => {

       // if the filter check ends up being true, it will add it to the new array, else disregard
    //    if (item.startsWith('A')) {
    //        return true;
    //    } 
    //    else {
    //        return false;
    //    }

    return item.startsWith('A');

});

console.log(filteredArray);


let scores = [0, 100, 50, 80, 90];

const result = scores.reduce((runningTotal, value ) => {
    return runningTotal += value;
});

console.log(result);



// for each - loops through each element and does something
// filter = loops through and applies a check. If that check is true -> added to a filtered array
// reduce - loops through and does some form of calc and reduces all elements down to a single result
// map = loops through each element and modifies the values and returns a new array.










