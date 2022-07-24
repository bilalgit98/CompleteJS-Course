'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const dave = new Person('Dave', 2001);

console.log(dave);

//Prototype
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

dave.calcAge();

//coding challenge 1

const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelarate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const bmw = new car('Bmw', 120);
const mercedes = new car('Mercedes', 95);

bmw.accelarate();
bmw.brake();
