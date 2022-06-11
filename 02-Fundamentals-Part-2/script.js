'use strict';
//Funciions
function fruitProcessor(Oranges, lime) {
    console.log(Oranges, lime);// this will log the amount of oranges and limes inputted to the function.
    const Juice = `Here is a juice with ${Oranges} oranges and ${lime} lime`;
    return Juice;


}

const orangeJuice = fruitProcessor(5, 3);
console.log(orangeJuice); //will log orange juice with 5 oranges and 3 lime.

const orangeLimeJuice = fruitProcessor(6, 3);
console.log(orangeLimeJuice); // log orange and lime juice, 6 oranges and 3 lime.

//Functions declrations vs expressions
//function declarations
function calcAge1(birthYear) {
    return 2046 - birthYear;

}

const age1 = calcAge1(2009);
console.log(age1);

//function expressions
const calcAge2 = function (birthYear) {
    return 2056 - birthYear;
}
const age2 = calcAge2(2022);
console.log(age2);

//Arrow Functions
const calcAge3 = birthYear => 2041 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUnilRetirement = (birthYear, fullName) => {
    const age = 2041 - birthYear;
    const retirement = 61 - age;
    return `${fullName} has ${retirement} years left until retirement!`;
}

console.log(yearsUnilRetirement(2002, "Bilal"));

//Functions calling other functions
function cutFruit(fruit) {
    return fruit * 4;
}

function fruitProcessor(Oranges, lime) {
    console.log(Oranges, lime);// this will log the amount of oranges and limes inputted to the function.
    const orangePieces = cutFruit(Oranges);
    const LimePieces = cutFruit(lime);
    const Juice = `Here is a juice with ${orangePieces} oranges pieces and ${LimePieces} lime pieces`;
    return Juice;
}

console.log(fruitProcessor(6, 4));

//coding challenge 1
const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log("Dolphins WIN!")
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log("Koalas WIN!");
    } else {
        console.log("No team wins");
    }
}

//Arrays
const friend = ['Bilal', 'Bob', 'John'];
console.log(friend[0]);
const years = [2001, 2004, 1998, 1979];
console.log(years[2])
const ageCalc = (calcAge2(years[2]));
console.log(ageCalc);
console.log(years.length)

//basic array operations
//adding elements
const friendsArray = ['Bilal', 'Bob', 'Mike'];
const newLength = friendsArray.push('John'); // this will add "john" to the end of the array!
console.log(friendsArray); // this will log "friendsArray" to the console.
console.log(newLength);
friendsArray.unshift('Sam');// the "unshift" will help add "sam" to the start of the array.
console.log(friendsArray);

//removing elements
friendsArray.pop();// removes the last element in the array
friendsArray.shift(); // removes the first element in the array

//finding the index of an element
console.log(friendsArray.indexOf('John')); // will get the index of "John" from the "friendsArray".

// checks for whether the string includes value. (boolean)
console.log(friendsArray.includes(20)); // will return false as there is no 20 in "friendsArray".
