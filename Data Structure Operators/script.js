'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (object) {
    console.log(object);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Your pasta with ${ing1}, ${ing2} and ${ing3} is ready!!`);
  },
};
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
/*
//destructring arrays
const arr = [6, 7, 8];
const [a, b, c] = arr;
console.log(a, b, c); // 6,7,8

//destructing arrays with the examples
let [first, second] = restaurant.starterMenu;
console.log(first, second); // Focaccia and Bruschetta

// swtichinng
[first, second] = [second, first];
console.log(first, second);

const [starters, mainCourse] = restaurant.order(1, 2);
console.log(starters, mainCourse);

// Destructuring objects
const { name, openingHours } = restaurant;
console.log(name, openingHours);

const { name: restaurantName, openingHours: currentHours } = restaurant;
console.log(restaurantName, currentHours);

//Default values
const { menu = [], starterMenu: start = [] } = restaurant;
console.log(menu, start);

//mutating variables
let z = 2;
let y = 6;
const rndObj = { z: 20, y: 90, c: 100 };
({ z, y } = rndObj);
console.log(z, y);

//Default Values
const {
  fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl);


//the spread operator
const arr = [9, 8, 2];

const goodArray = [1, 2, 3, 4, ...arr];
console.log(goodArray); // will log 1,2,3,4,9,8,2

//copy array
const copyMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...copyMenu);

//from the function orderPasta
const ingredients = [
  prompt('What is ingredient 1?'),
  prompt('What is ingredient 2?'),
  prompt('What is ingredient 3?'),
];
restaurant.orderPasta(...ingredients);

//rest pattern and parameters
const [pizza, , rissoto, ...foods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rissoto, foods);

//rest pattern with objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Logical Assignment Operators
const resturant1 = {
  name: 'rest1',
  numGuest: 30,
};

const resturant2 = {
  name: 'rest2',
  owner: 'John',
};

//resturant2.numGuest = resturant1.numGuest || 10; // if restresturant1.numGuest is defiened then it will be true, therfore resturant2.numGuest = 30
//console.log(resturant2.numGuest);// 30 because resturant1.numGuest is true and set as 30

resturant1.numGuest ||= 10; // should return 30
resturant2.numGuest ||= 10; // should return 10
console.log(resturant1.numGuest); // should return 30
console.log(resturant2.numGuest); // should return 10

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const things of menu) {
  console.log(things);
}

for (const things of menu.entries()) {
  console.log(things);
}

//optional chaining
//console.log(restaurant.openingHours.mon?.open); // mon is undefined but by using optional chaining when trying to read open we get "undefined"
const day = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//looping objects
//PROPERTY NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days `;

for (const a of properties) {
  console.log(a);
  openStr += `${a},`;
}
console.log(openStr);

//PROPERTY VALUES
const values = Object.values(openingHours);
console.log(values);
//ENTRIES OBJECT
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}.`);
}

//sets
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
console.log(ordersSet); //duplicates are removed

console.log(ordersSet.size); // just like length will start from 1

console.log(ordersSet.has('garlic')); // boolean (true or false)
ordersSet.add('bread');
ordersSet.delete('pizza');
console.log(ordersSet);
//example
const staff = ['manager', 'manager', 'waiter', 'chef', 'waiter', 'chef'];
const staffUnique = new Set(staff);
console.log(staffUnique);

//maps data structure
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'italy');
rest.set(2, 'portugal');
console.log(rest);
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');
console.log(rest.get('name')); //Classico Italiano
console.log(rest.get(1)); //Italy

const currentTime = 20;
const checkOpen = rest.get(
  currentTime > rest.get('open') && currentTime < rest.get('close')
); // will return a true or false value, which will be compared with the rest map
console.log(checkOpen);

console.log(rest.has('categories')); //checks if its true or false
rest.delete(2); //will delete (2)
console.log(rest);
const question = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'js'],
  [2, 'c'],
  [3, 'python'],
  ['correct', 1],
  [true, 'correct!!'],
  [false, 'Try again'],
]);
console.log(question);

//convert object to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//iteration on maps
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
}

const answer = Number(prompt('What is your answer??'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//convert maps to arrays
console.log([...question]);
*/

//working with strings
const airline = 'Air UK';
const plane = 'A320';

console.log(plane[0]); // this will log the first letter "a"
console.log('B737'[1]); //This will log "7" to the console.

console.log(airline.indexOf('i')); // this will log "1" because "i" is at index 1
// console.log(airline .lastIndexOf()) this will give us the last occurence

console.log(airline.slice(4));
console.log(airline.slice(4, 6)); // will log "UK"
console.log(airline.slice(-1)); // will log "K"

//challenge for checking middle seat
const checkMiddleSeat = function (seat) {
  const seatLetter = seat.slice(-1);
  if (seatLetter === 'B' || seatLetter === 'E') {
    // Seats "E" and 'B' are middle seats
    console.log('YOU HAVE GOT A MIDDLE SEAT');
  } else {
    console.log('YOU DO NOT HAVE A MIDDLE SEAT!!');
  }
};

checkMiddleSeat('10B');
checkMiddleSeat('11E');
checkMiddleSeat('9C');

//replacing
const priceGbp = '£250,99';
const priceUsd = priceGbp.replace('£', '$').replace(',', '.');
console.log('priceGbp', priceGbp, ',priceUsd', priceUsd);

//booleans
const newPlane = 'A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.startsWith('A')); // case sensitive

//"split" strings
console.log('a+string'.split('+'));
console.log('this+is+how+split+works'.split('+'));

//padding a string
const message = 'go to 23';
console.log(message.padStart(20, ' ')); // "message" has been padded with a space and now has 20 in length.
//padEnd is used to pad at the end, and will add on to the current length to reach a number.
