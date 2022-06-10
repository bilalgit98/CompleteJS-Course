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