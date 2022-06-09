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

