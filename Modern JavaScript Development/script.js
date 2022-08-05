//importing modules
// import { addToCart, price as totalPrice, tq } from './shoppingCart.js';
// addToCart('Juice', 5);
// console.log(totalPrice, tq);

console.log('importing module');

import * as shoppingCart from './shoppingCart.js'; // this will import everything from "shoppingCart.js"
shoppingCart.addToCart('bread', 10);
console.log(shoppingCart.price);

//top level await
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost); // will return a promise

// const lastPost2 = getLastPost();
// console.log(lastPost2);

//the module pattern
// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} , ${product} has been added to cart!`);
//   };

//   const orderedStock = function (product, quantity) {
//     console.log(`${quantity} , ${product} has been Ordered from the supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     shippingCost,
//     totalQuantity,
//     totalPrice,
//   };
// })();

// shoppingCart2.addToCart('orange', 5);
// console.log(shoppingCart2);

//commonJS Modules
//export
// export.addToCart  = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(`${quantity} , ${product} has been added to cart!`);
//       };

// //import
// const { addToCart} = require ('./shoppingCart.js');

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// const state = {
//   cart: [{ product: 'bread', quantity: 6 }],
//   user: { loggedIn: true },
// };

// const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);

// state.user.loggedIn = false;
// console.log(stateClone);
// console.log(stateDeepClone);
