const person = {
    name: "James",
    age: 10,
}

const person2 = {
    name: "James Bond",
    age: 55,
}

// ============== Destructuring ===================

// A. Destructuring object
const { name, age } = person;

console.log(name);
console.log(age);

// B. Destructuring array 
const arr = [person, person2];
const [a, b] = arr;
console.log(a);
console.log(b);

// C. Destructuring array with rest argument
const arrWithRestArgs = [person, person2, 3, 4, 5];
const [c, d, ...others] = arrWithRestArgs;
console.log(c);
console.log(d);
console.log(...others);
console.log(others.length);

// D. Destructuring array with rest argument
const numbers = [1, 2, 3];

function add(a, b, c) {
    return a + b + c; // result = 6
}

function add2(a, b, c, d) {
    return a + b + c + d; // result = Nan
}

const sum = add2(...numbers)
console.log(sum);
