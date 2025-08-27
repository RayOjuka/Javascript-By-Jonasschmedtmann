// const friends = ['Michael', 'Sarah', 'Jessica'];
// // add a new friend to the array
// friends.push('John');
// console.log(friends); // ['Michael', 'Sarah', 'Jessica', 'John']
// // add elements at the biginning of the array
// friends.unshift('Alice');
// console.log(friends); // ['Alice', 'Michael', 'Sarah', 'Jessica', 'John']

// // remove element from the end of the array
// friends.pop();
// console.log(friends); // ['Alice', 'Michael', 'Sarah', 'Jessica']

// // remove element from the beginning of the array
// friends.shift();
// console.log(friends); // ['Michael', 'Sarah', 'Jessica']

// console.log(friends.indexOf('Sarah')); // 1

// console.log(friends.includes('Jessica')); // true

// if (friends.includes('John')) {
//   console.log('John is a friend');
// }

// function calcTip(input) {
//     if(input >= 50 && input <= 300 ) {
//         return (0.15 * input);
//     } else {
//         return (0.2 * input);
//     }
// }

// const result = calcTip(100);

// console.log(result);


// const bills = [125, 555, 44];

// const tips = bills.map((bill) => calcTip(bill));
// console.log(tips); // [18.75, 83.25, 8.8]

// const total = bills.map((bill, index) => bill + tips[index]);
// console.log(total); // [143.75, 638.25, 52.8

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Sarah', 'Jessica'],
//     hasDriverLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2023 - birthYear;
//     // }

//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2023 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     }
// };

// console.log(jonas.calcAge()); // 32

// console.log(jonas.age); // 32
// console.log(jonas.age); // 32

// // challenge
// // "Jonas is a 32-year old teacher, and he has a driver's license"
// console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has ${jonas.hasDriverLicense ? "a" : "no"} driver's license`);

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

//Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`);
}