//exporting
console.log('exporting module');

const shippingCost = 10;
const cart = [];

//exporting
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} , ${product} has been added to cart!`);
};

const price = 200;
const quantity = 30;

export { price, quantity as tq };
