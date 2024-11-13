// U can define functions using various methods:

// ========================================
// 1. Declaration Function:
function declarationFunction(p1, p2) {
    return p1 + p2;
}
// ========================================

// ========================================
// 2. Expression Function:
const expressionFunction = function(p1, p2) {
    return p1 + p2;
}
// ========================================

// ========================================
// 3. Arrow Function: 
// A. Common syntax:
const arrowFunction = (p1, p2) => {
    return p1 + p2;
}

// B. Single Parameter, if u just have one parameter to input we can use this syntax:
const square = x => x * x; 

// C. No Parameter:
const sayHello = () => "Hello World!";
// ========================================



// ===== example ======
    const numbers = [1, 2, 3, 4, 5];
// single expression arrow function.
    const squaredNumbers = numbers.map(num => num * num);
// normal arrow function.
    const squaredNumbers2 = numbers.map((num) => {
        return num * num;
    });
console.log(squaredNumbers);
console.log(squaredNumbers2);

// expression function with map
function squaredNumbersWithDeclarationFunction(num) {
    return num * num;
}

const squaredNumber3 = numbers.map(squaredNumbersWithDeclarationFunction)
console.log(squaredNumber3);
// ========================================



// ========================================
// Callback Function
// ========================================
// A. callback without parameter
function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
}

    // call function with declaration function.
function sayBye() {
    console.log("Goodbye!");
}
greet("Alice", sayBye);

    // call function with arrow function.
greet("Boracino", () => {
    console.log("Fvck off!");
})
// ========================================

// ========================================
// B. callback with parameter
function greet2(name, callback) {
    console.log(`Hello, ${name}`);
    callback(name);
}

    // call function with declaration function.
function sayBye2(name) {
    console.log(`Goodbye, ${name}!`);
}
greet2("Alice", sayBye2);

    // call function with arrow function.
greet2("Boracino", (name) => {
    console.log(`${name}, fvck off!`);
})
// ========================================

// ========================================
// dont know what shoud i name it, but this is just another example.
function greet3(name, callback) {
    for(let i = 0; i < name.length; i++) {
        callback(name[i], i);
    }
    return name;
}

const res = greet3("James", (char, i) => {
    console.log(char);
    console.log(i);
});
// ========================================

// ========================================
// create map method -like with callback function.
function fakeMap(array, callback) {
    const result = [];

    for(let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i));
    }
    return result;
}

    // call function with declaration function.
function fakeMapSquare(num) {
    return num * num;
}
const fakeSquareRes = fakeMap(numbers, fakeMapSquare);
console.log(fakeSquareRes);

    // call function with arrow function.
const fakeSquareResSimple = fakeMap(numbers, (num) => {
    return num * num; 
});

    // call function with anonymous function.
const fakeSquareResSimple2 = fakeMap(numbers, function(num) {
    return num * num;
})
console.log("fakeSquareResSimple: ", fakeSquareResSimple);
console.log("fakeSquareResSimple2: ", fakeSquareResSimple2);
// ========================================

// ========================================
// Asynchronous Callbacks
    // using anonymous function as callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Alice" };
        callback(data); // Pass data to the callback
    }, 2000); // Simulating a delay of 2 seconds
}

fetchData((data) => {
    console.log("Data received:", data);
});

    // using arrow function as callback
function fetchData2(callback) {
    setTimeout(function() {
        const data = { id: 2, name: "Dicky" };
        callback(data);
    }, 2000);
}

fetchData2(function(data) {
    console.log("Data received: ", data);
});
// ========================================

// ========================================
// Synchronous vs Asynchronous Callbacks
// Synchronous callback:
function synchronousExample(callback) {
    console.log("Before sync callback");
    callback();
    console.log("After sync callback");
}

synchronousExample(() => console.log("This is a synchronous callback"));

// Asynchronous callback:
function asynchronousExample(callback) {
    console.log("Before async callback");
    setTimeout(() => {
        callback();
    }, 1000);
    console.log("After async callback");
}

asynchronousExample(() => console.log("This is a asynchronous callback"));

// ========================================
