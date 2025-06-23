const friends = ['Michael', 'Sarah', 'Jessica'];
// add a new friend to the array
friends.push('John');
console.log(friends); // ['Michael', 'Sarah', 'Jessica', 'John']
// add elements at the biginning of the array
friends.unshift('Alice');
console.log(friends); // ['Alice', 'Michael', 'Sarah', 'Jessica', 'John']

// remove element from the end of the array
friends.pop();
console.log(friends); // ['Alice', 'Michael', 'Sarah', 'Jessica']

// remove element from the beginning of the array
friends.shift();
console.log(friends); // ['Michael', 'Sarah', 'Jessica']

console.log(friends.indexOf('Sarah')); // 1

console.log(friends.includes('Jessica')); // true

if (friends.includes('John')) {
  console.log('John is a friend');
}

function calcTip(input) {
    if(input >= 50 && input <= 300 ) {
        return (0.15 * input);
    } else {
        return (0.2 * input);
    }
}

const result = calcTip(100);

console.log(result);


const bills = [125, 555, 44];

const tips = bills.map((bill) => calcTip(bill));
console.log(tips); // [18.75, 83.25, 8.8]

const total = bills.map((bill, index) => bill + tips[index]);
console.log(total); // [143.75, 638.25, 52.8
