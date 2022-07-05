'use strict';
/*
//defalut parameters
const bookings = [];
const createBooking = function (flightNumb, numbPassengers = 1, price = 300) {
  //we are bale to set a default by using =
  const booking = { flightNumb, numbPassengers, price };
  console.log(booking);
  bookings.push(booking);
};
console.log(createBooking('F927')); // this will return "F9227 , 1 ,300"
console.log(createBooking('F3712', 3, 440)); // this will return "F3712 , 3 ,440"

//How Passing Arguments Works: Value vs. Reference
const flight = 'F926'; // FLight Number

const bilal = {
  //A bilal Object
  name: 'Bilal',
  Passport: 23480387,
};

const checkIn = function (flightNumber, passengerObj) {
  flightNumber = 'F173';
  passengerObj.name = 'Mr' + passengerObj.name;

  if (passengerObj.Passport === 23480387) {
    alert('Check In Successful');
  } else {
    alert('You have the wrong passport number');
  }
};

console.log(checkIn(flight, bilal)); // the values that we are passing in are "flight" variable and the "bilal" Object!

//Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transform = function (str, fn) {
  console.log(`Here is the original string -- ${str} `);
  console.log(`here is the transformed string -- ${fn(str)}`);
};

transform('javascript is amazing', upperWord);

//functions returning other functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetings = greet('Hello');
greetings('John');
*/

//The call and apply methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} has been booked on flight ${this.iataCode}${flightNum}  on ${this.airline}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${this.flightNum}, ${name}`,
    });
  },
};

lufthansa.book(330, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//book(300, 'Laura Smith');this will not work

book.call(eurowings, 453, 'James Rob');
console.log(eurowings);

//THE BIND METHOD
const bookEurowings = book.bind(eurowings); // the bind method sets the "this" word so we dont have to do it all the time.
const bookLufthansa = book.bind(lufthansa);
bookEurowings(792, 'Steve Johnson');

//preset a value in the bind method
const bookEW99 = book.bind(eurowings, 99); // the flight numb has been set to 99
bookEW99('Mark');

//with event listeners
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  // buy plane function
  console.log(this);
  this.planes++; //increases by 1
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa)); //the bind method helps set the "this" keyword

//Immediately Invoked Function Expressions (IIFE)
//IIFE
(function () {
  console.log('IIFE example');
})();

//closures
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

//more closure examples
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();
