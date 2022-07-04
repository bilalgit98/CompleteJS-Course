'use strict';
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
