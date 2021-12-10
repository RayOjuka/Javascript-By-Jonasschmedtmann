/*
let js = 'Amazing';
console.log(40+5+80);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

// Exercise LECTURE: Values and Variables
let country = "Kenya";
let continent = "Africa";
let population = "47000000";

console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'true');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// Exercise LECTURE: Data Types
let country = "Kenya";
let population = 47000000;
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


// LECTURE: let, const and var

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schdmetmann';
console.log(lastName);

// Assignement

let language = "English";
const dateOfBirth = 1991;
// dateOfBirth = 1990;


// LECTURE: Basic Operators

// Math operators
const  now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2**3);

const firstName = 'Jonas';
const lastName = 'Schedmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 15;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1 
x--;  // x = x - 1
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const idFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// LECTURE: Operator Precedence

const  now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

console.log(ageJonas, ageSarah);

///////////////////////////////////
// Coding Challenge #1
console.log("Coding Challenge #1");

let marksHeight = 1.88;
let marksWeight = 95;
let johnsHeight = 1.76;
let johnsWeight = 85

let marksBMI = marksWeight / marksHeight ** 2;
let johnsBMI = johnsWeight /  johnsHeight ** 2;

let markHigherBMI = marksBMI > johnsBMI;

console.log(markHigherBMI);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = '1991';
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string..`);


const age = 15;
const isOldEnough = age >= 18;

if(age >= 18) {
console.log('Sarah can start driving licence');
} else {
    const yearsLeft = 18 - age;
console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
}

const birthYear = 2012;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);



const marksHeight = 1.88;
const marksWeight = 95;
const johnsHeight = 1.76;
const johnsWeight = 85

const marksBMI = marksWeight / marksHeight ** 2;
const johnsBMI = johnsWeight /  johnsHeight ** 2;

const markHigherBMI = marksBMI > johnsBMI;

if(marksBMI > johnsBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`);
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
}

*/
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof(NaN));

console.log(String(18), 18);

//type coersion
console.log('I am '+ 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
*/



