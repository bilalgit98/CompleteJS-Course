'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const printMovements = function (movements) {
  containerMovements.innerHTML = ''; // will clear the container

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'; // checks whether the movement is a deposit or withdrawal

    //template literal with html
    const html = ` 
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html); // gets html from the template literal
  });
};

printMovements(account1.movements);

const createUsers = function (acounts) {
  accounts.forEach(function (accs) {
    accs.username = accs.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
    return accs.username;
  });
};

createUsers(accounts);
console.log(accounts);

////////////////////////////////// ///////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurUsd = 1.1; // this is converstion

// with a function
const mapMovUsd = movements.map(function (mov) {
  // will return a new array (map) and doesnt mutate the movements array
  return mov * eurUsd;
});

console.log(movements);
console.log(mapMovUsd);

//for of
const movementsUsdFor = [];
for (const mov of movements) movementsUsdFor.push(mov * eurUsd);

console.log(movementsUsdFor);

const movementsDesc = movements.map(
  mov => `You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);

console.log(movementsDesc);

// the filter methods
const deposits = movements.filter(function (mov) {
  return mov > 0; // pass in a boolean value (numbers that are above 0 will make it to the deposits array)
}); // create an array of deposits
console.log(movements);
console.log(deposits);

const depositsOne = [];
for (const mov of movements) if (mov > 0) depositsOne.push(mov);
console.log(depositsOne);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
/*
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log('------------ for each');

movements.forEach(function (mov, arr) {
  if (mov > 0) {
    console.log(`You deposited ${mov}`);
  } else {
    console.log(`You withdrew ${Math.abs(mov)}`);
  }
});
/////////////////////////////////////////////////
//forEach with maps and sets
currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});
*/

//creating DOM Elements
