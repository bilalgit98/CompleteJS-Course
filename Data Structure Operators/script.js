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

  openingHours: {
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
*/
//rest pattern and parameters
const [pizza, , rissoto, ...foods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rissoto, foods);

//rest pattern with objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekend);
