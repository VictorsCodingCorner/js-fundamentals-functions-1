// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function incrementer5000(i) {
  return i+=1
}
// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitaliser5000(s) {
  if (typeof s !== 'string' || s.length === 0) {
    return '';
  }
  return s.charAt(0).toUpperCase()+ s.slice(1).toLowerCase()
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

function minilification(s){
  if (typeof s !== 'string' || s.length === 0) {
    return '';
  }
  return 'Hi, ' + s.charAt(0).toUpperCase()+ s.slice(1).toLowerCase() + " :)"
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
function arrayCounter(a) {
  if (!Array.isArray(a)) {
    return 0; // Return 0 if the input is not an array
  }
  
  let stringCount = 0;
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === 'string') {
      stringCount++;
    }
  }
  
  return stringCount;
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
function edwardification(o) {

  if (typeof o !== 'object' || o === null) {
    return { edward: 'amazing' };
  }
  if (!o.hasOwnProperty('edward')) {
    o.edward = 'amazing';
  }
  return o;
  
}

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementer5000, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitaliser5000, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: minilification, // etc
  d: arrayCounter,
  e: edwardification,
}
