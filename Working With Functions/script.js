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
