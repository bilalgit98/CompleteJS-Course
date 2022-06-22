'use strict';
/*
function calcAge(birthYear) {
  const age = 2022 - birthYear;
  console.log(firstName); // will do a lookup in the global scope, if not defined you get an error.
  function printAge() {
    const output = `your age is ${age} and you were born in the year ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'bilal';
calcAge(2002);*/

/*
//Window Object
console.log(this); //birngs up the window object

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); // logs undefined
};

calcAge(2002);

const bilal = {
  firstName: "bilal",
  birthYear: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.birthYear);
  },

  greet: () => console.log(`hey ${this.firstName}`),
};

bilal.greet();
*/

//Primitives vs Objects
let age = 30;
let oldAge = age;
age = 31;

console.log(age); //31
console.log(oldAge); //30

const bilal = {
  name: 'Bilal',
  age: 20,
};

const friend = bilal;
friend.age = 19;
console.log(friend);
console.log(bilal); // both console logs end up showing age as "19"

//primitive
let lastName = 'john';
let oldLastname = lastName;
lastName = 'smith';
console.log(lastName, oldLastname); // john, smith

//refernece value - objects
const me = {
  firstName: 'Mike',
  lastName: 'Johnson',
  age: 20,
};

const marriedMike = me;
marriedMike.lastName = 'smith';
console.log('before', me);
console.log('after', marriedMike);

//copying objects
const me2 = {
  firstName: 'Mike',
  lastName: 'Johnson',
  age: 20,
};

//object.assgin is iused to merge and create a new object
const meCopy = Object.assign({}, me2);
console.log(meCopy);
meCopy.lastName = 'martin';
console.log('before', me); // lastName will be Smith
console.log('after', meCopy); // lastName will be Martin
