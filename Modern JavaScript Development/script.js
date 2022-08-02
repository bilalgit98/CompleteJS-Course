//importing modules
// import { addToCart, price as totalPrice, tq } from './shoppingCart.js';
// addToCart('Juice', 5);
// console.log(totalPrice, tq);

console.log('importing module');

import * as shoppingCart from './shoppingCart.js'; // this will import everything from "shoppingCart.js"
shoppingCart.addToCart('bread', 10);
console.log(shoppingCart.price);
