'use strict';
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const dave = new Person('Dave', 2001);

// console.log(dave);

// //Prototype
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// dave.calcAge();

//coding challenge 1

// const car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// car.prototype.accelarate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// const bmw = new car('Bmw', 120);
// const mercedes = new car('Mercedes', 95);

// bmw.accelarate();
// bmw.brake();

//setters and getters

const account = {
  owner: 'bilal',
  movements: [200, 900, 600, 300],

  get latest() {
    //getter
    return this.movements.slice(-1).pop();
  },
  //set
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

//coding challenge 2
// class CarCalc {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelarate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}`);
//   };

//   brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}`);
//   };

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const ford = new CarCalc('FORD', 120);
// console.log(ford.speedUS);
// ford.speedUS = 60;
// console.log(ford);

// //inheritence
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const dave = new Person('Dave', 2001);

// console.log(dave);

// //Prototype
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// dave.calcAge();

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(
//     `My name is ${this.firstName}, and i am studying ${this.course}!`
//   );
// };

// const john = new Student('john', 2000, 'Comp Sci');
// console.log(john);
// john.introduce();
// john.calcAge();

//coding challenge 3
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelarate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// // creating the link between the prototypes
// EV.prototype = Object.create(Car.prototype);

// //Battery charge
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// //Accelerate
// EV.prototype.accelarate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} and the battery charge is at ${this.charge}`
//   );
// };

// //Creating the EV
// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(98); //battery charge should be set to 98
// console.log(tesla);
// tesla.brake();
// tesla.accelarate(); //battery percentage/charge drops by 1

//coding challenge 4

class CarCalc {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelarate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EvCalc extends CarCalc {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  //Battery charge
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  //Accelerate
  accelarate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} and the battery charge is at ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EvCalc('Rivian', 120, 23);
console.log(rivian);
rivian.accelarate().brake().chargeBattery(20).accelarate();
