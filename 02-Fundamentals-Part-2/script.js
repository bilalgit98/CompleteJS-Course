'use strict';
//Funciions
function fruitProcessor(Oranges, lime) {
    console.log(Oranges, lime);// this will log the amount of oranges and limes inputted to the function.
    const Juice = `Here is a juice with ${Oranges} oranges and ${lime} lime`;
    return Juice;


}

const orangeJuice = fruitProcessor(5, 3);
console.log(orangeJuice); //will log orange juice with 5 oranges and 3 lime.

const orangeLimeJuice = fruitProcessor(6, 3);
console.log(orangeLimeJuice); // log orange and lime juice, 6 oranges and 3 lime.

//Functions declrations vs expressions
//function declarations
function calcAge1(birthYear) {
    return 2046 - birthYear;

}

const age1 = calcAge1(2009);
console.log(age1);

//function expressions
const calcAge2 = function (birthYear) {
    return 2056 - birthYear;
}
const age2 = calcAge2(2022);
console.log(age2);

//Arrow Functions
const calcAge3 = birthYear => 2041 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUnilRetirement = (birthYear, fullName) => {
    const age = 2041 - birthYear;
    const retirement = 61 - age;
    return `${fullName} has ${retirement} years left until retirement!`;
}

console.log(yearsUnilRetirement(2002, "Bilal"));

//Functions calling other functions
function cutFruit(fruit) {
    return fruit * 4;
}

function fruitProcessor(Oranges, lime) {
    console.log(Oranges, lime);// this will log the amount of oranges and limes inputted to the function.
    const orangePieces = cutFruit(Oranges);
    const LimePieces = cutFruit(lime);
    const Juice = `Here is a juice with ${orangePieces} oranges pieces and ${LimePieces} lime pieces`;
    return Juice;
}

console.log(fruitProcessor(6, 4));

//coding challenge 1
const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log("Dolphins WIN!")
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log("Koalas WIN!");
    } else {
        console.log("No team wins");
    }
}

//Arrays
const friend = ['Bilal', 'Bob', 'John'];
console.log(friend[0]);
const years = [2001, 2004, 1998, 1979];
console.log(years[2])
const ageCalc = (calcAge2(years[2]));
console.log(ageCalc);
console.log(years.length)

//basic array operations
//adding elements
const friendsArray = ['Bilal', 'Bob', 'Mike'];
const newLength = friendsArray.push('John'); // this will add "john" to the end of the array!
console.log(friendsArray); // this will log "friendsArray" to the console.
console.log(newLength);
friendsArray.unshift('Sam');// the "unshift" will help add "sam" to the start of the array.
console.log(friendsArray);

//removing elements
friendsArray.pop();// removes the last element in the array
friendsArray.shift(); // removes the first element in the array

//finding the index of an element
console.log(friendsArray.indexOf('John')); // will get the index of "John" from the "friendsArray".

// checks for whether the string includes value. (boolean)
console.log(friendsArray.includes(20)); // will return false as there is no 20 in "friendsArray".

//objects
/*
const bilal = {
    firstName: "Bilal",
    age: 20,
    job: "Student",
}

console.log(bilal.firstName); // we will get firstName in the console from the bilal object.

const interests = prompt("What are you interested in? firstName? , age? , job?");

if (bilal[interests]) {
    console.log(bilal[interests]);
} else {
    console.log("Wrong!! Please select firstName? , age? , job?");
}
//dot and bracket notation
bilal.location = "UK";
bilal["Hobbies"] = "Programming";
console.log(bilal);
*/

//object methods
const bilal = {
    firstName: "Bilal",
    age: 20,
    yearBorn: 2002,
    job: "Student",
    hasDriversLicence: true,

    calcAge: function () {
        console.log(this); // "this" is the object "bilal", logged to console for example purpose.
        this.currentAge = 2047 - this.yearBorn;//  this.yearBorn is a valuve taken from the bilal object
        return this.currentAge;
    },
    getSummary: function () {
        return `${this.firstName} age is ${this.calcAge()} and has  ${this.hasDriversLicence ? 'a' : 'no'} driving licence.`
    }
};
console.log(bilal.calcAge()); // will run the fucntion (calcAge) from the object bilal
console.log(bilal.currentAge);
console.log(bilal.getSummary());


//challenge
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} BMI (${mark.bmi})`)
};

//loops
//for loops
for (let repetition = 1; repetition <= 10; repetition++) {//for loop with a counter AND KEEPS RUNNING WHEN TRUE
    console.log(`Repetition counter ${repetition}`);
}
/*
const bilalArray = [ //bilalArray 
    "Bilal",
    2022 - 2002,
    "Student Learning to code"
];
*/
/*const types = []; //this is the types array which will have all the types from the "bilalArray"
for (let i = 0; i < bilalArray.length; i++) {
    console.log(bilalArray[i], typeof bilalArray[i]);
    types[i] = typeof bilalArray[i]; // this will add types of bilalArray to the new Types Array
}
console.log(types); //this will log the types array to the console (typeof bilalArray)
*/

const agesArray = [];// blank agesArray
const yearsArray = [1991, 2002, 1986, 1993];
for (let i = 0; i < yearsArray.length; i++) {
    agesArray.push(2022 - yearsArray[i]); // This will add "2022 - yearsArray[position]" to agesArray
}
console.log(agesArray);

//Continue and Break
/* const types = []; //this is the types array which will have all the types from the "bilalArray"
for (let i = 0; i < bilalArray.length; i++) {
    if (typeof bilalArray[i] !== "string") continue;
    console.log(bilalArray[i], typeof bilalArray[i]);
}
//break
for (let i = 0; i < bilalArray.length; i++) {
    if (typeof bilalArray[i] === "number") break;
    console.log(bilalArray[i], typeof bilalArray[i]);
}
*/
//looping backwards and loops in loops
const bilalArray = [ //bilalArray 
    "Bilal",
    2022 - 2002,
    "Student Learning to code"
];

for (let i = bilalArray.length - 1; i >= 0; i--) {
    console.log(i, bilalArray[i]);
}
//loops within loops
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`Starting exercise ${exercise}`);

    for (let rep = 1; rep < 4; rep++) {
        console.log(` exercise ${exercise}: lifting weigtht ${rep}`);
    }
}

//while loop
let rep = 1;
while (rep <= 10) {//in a while loop we will ONLY SPECIFY THE CONDITION, 
    console.log(`WHILE: lifting weigtht ${rep}`);//and will run when condition is true.
    rep++;
};

let dice = Math.trunc(Math.random() * 6) + 1;// generates a random number
while (dice !== 6) { // loop will run if "dice" is not 6
    console.log(`you rolled ${dice}`); // the number "dice" is logged to the console.
    dice = Math.trunc(Math.random() * 6) + 1; // 
    if (dice === 6) {
        console.log("loop is about to end");
    };
}

//Coding Challenge 4
const calcTip = function (bill) {
    return bill >= 60 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
};
console.log(bills, tips, totals);

const calcAvg = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAvg([2, 3, 11]));
console.log(calcAvg(totals));
console.log(calcAvg(tips));