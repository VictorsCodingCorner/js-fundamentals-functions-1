// do not edit the below

/* eslint-disable no-unused-vars */
function sayHello() {
  return 'Hello';
}

/* eslint-disable no-unused-vars */
function sayHelloTo(name) {
  // Improved with ChatGPT: Used template literal for cleaner concatenation
  return `Hello ${name}!`;
}

/* eslint-disable no-unused-vars */
function sayHelloManyTimes(name, times) {
  // Improved with ChatGPT: Used Array join for efficiency and readability
  return Array(times).fill(`Hello ${name}!`).join('');
}

// TODO: Add and update code here to make the tests pass

// 1. Set this variable to 'Hello' by calling the sayHello function
const hello = sayHello();

// 2. Set this variable to 'Hello Jane' calling the sayHelloTo function
const helloToJane = sayHelloTo('Jane');

// 3. Set this variable to 'Hello Bob! Hello Bob! Hello Bob!' calling the sayHelloManyTimes function
const helloToBob3Times = sayHelloManyTimes('Bob', 3);

// do not edit below this line
module.exports = {
  a: hello,
  b: helloToJane,
  c: helloToBob3Times,
};

