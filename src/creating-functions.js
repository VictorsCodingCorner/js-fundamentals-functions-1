// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

// Improved with ChatGPT: Simplified increment operation without using assignment (i += 1).
function incrementer5000(i) {
  return i + 1;
}

// 2. Define a function that capitalizes any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

// Improved with ChatGPT: Simplified return condition and renamed 's' for readability.
function capitaliser5000(inputStr) {
  return typeof inputStr === 'string' && inputStr.length > 0
    ? inputStr.charAt(0).toUpperCase() + inputStr.slice(1).toLowerCase()
    : '';
}

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below

// Improved with ChatGPT: Enhanced readability by renaming 's' to 'name'.
function minilification(name) {
  return typeof name === 'string' && name.length > 0
    ? 'Hi, ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + ' :)'
    : '';
}

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below

// Improved with ChatGPT: Used array method filter for cleaner string counting.
function arrayCounter(arr) {
  return Array.isArray(arr) ? arr.filter(item => typeof item === 'string').length : 0;
}

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below

// Improved with ChatGPT: Simplified checking and assigning property 'edward'.
function edwardification(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return { edward: 'amazing' };
  }
  obj.edward ||= 'amazing'; // Improved with ChatGPT: Used logical OR assignment (||=)
  return obj;
}

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementer5000, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitaliser5000, // 2. change undefined to be the name of the function you defined for the second TODO
  c: minilification, // etc
  d: arrayCounter,
  e: edwardification
};
