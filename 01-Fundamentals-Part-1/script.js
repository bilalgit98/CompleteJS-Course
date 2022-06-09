//Learning the basics
let js = "amazing";
console.log(40 + 40);
console.log("bilal");

let firstName = "BILAL";
console.log(firstName);

let myFirstJob = "student";
console.log(myFirstJob);

// variables
let country = "England";
let continent = "Europe";
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

//Assignement 1 and data types
let jsIsFun = true;
console.log(jsIsFun);
console.log(typeof true);
console.log(typeof jsIsFun);

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

console.log(typeof country, typeof continent, typeof population);

//const and var of declaring variables.
let age = 25;
age = 19;
console.log(age)

const birthYear = 2002;
console.log(birthYear, typeof birthYear);

var currentJob = "Student Programmer!"
console.log(currentJob, typeof currentJob);

//basic operators
const currentYear = 2022;
const ageBilal = currentYear - 2002;
console.log(ageBilal);
console.log(ageBilal * 2);


//coding challenge 1 
//test data 1 mark
const markMass = 78;
const markHeight = 1.69;
//test data 2 john
const johnMass = 92;
const johnHeight = 1.95;

//bmi calculation for mark
let bmiMark = markMass / markHeight ** 2 / markHeight * markHeight;
console.log(bmiMark);

// bmi calculation for john
let bmiJohn = johnMass / johnHeight ** 2 / johnHeight * johnHeight;
console.log(bmiJohn);

// test to see wehther mark has higher BMI than John
let bmiHigh = bmiMark >= bmiJohn; // it will return boolean (true or false)
console.log(bmiHigh, bmiMark, bmiJohn);

//Strings and Template Literals
const bilalDetails = `My name is ${firstName} and i am currently a ${currentJob}. My age is ${ageBilal}!`;
console.log(bilalDetails);
//Multiline strings ( we use \N\)
console.log(`here is a multiline example \n\here is the next line!`);

//Taking decisions with code if statements
const currentAge = 17;
if (currentAge >= 18) {
    console.log("You are able to drive!");
} else {
    console.log(`You are not able to drive, please wait ${18 - currentAge} years!`);
}

// another example (for century) 
let century;
if (birthYear <= 2000) {
    century = 20;
    console.log(`You were born in the ${century}th century!`)
} else {
    century = 21;
    console.log(`You were born in the ${century}th century!`)
}

//coding challenge 2 (BMI)
if (bmiJohn >= bmiMark) {
    console.log(`John's BMI is higher than Marks BMI, Johns BMI is ${bmiJohn}`)
} else {
    console.log(`Mark's BMI is higher than John's BMI, Johns BMI is ${bmiMark}`)
}

//type converstion or coercion
// converting a string to a number
const inputYear = '2022';
console.log(typeof inputYear);
console.log(Number(inputYear) + 2);
//type coercion
console.log('I am ' + 23 + ' years old');
console.log('10' * '4');