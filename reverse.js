/*
    This code reverses a string
*/

let value = "Reverse Me";
let reversedValue = "";

value.split("").forEach((char) => {
    reversedValue = char + reversedValue;
});

console.log(reversedValue);

function reverseString(value) {
    let reverseValue = "";

    value.split("").forEach((char) => {
        reverseValue = char + reverseValue;
    });

    return reverseValue;
}

console.log(reverseString("Nguyen Tam Hung"));

var hungnt = 1;
if (hungnt == 1) {
    const test = 'let test';
    console.log(test);
}
//console.log(test);
console.log(hungnt);

// Working with strings
let firstName = "Nguyen";
let lastName = "Tam Hung";

// Using the + operator
console.log(firstName + lastName);

let num = 1;
let num2 = "1";

console.log(num + num2);
console.log(num + 1);

// Demo working with strings
// 13. Using template literals to format strings
// - ${}
let bool1 = true;
console.log(`1 + 1 is ${1 + 1}`);
console.log("1 + 1 is ${1 + }");
console.log('1 + 1 is ${1 + 1}');
console.log (`The opposite of true is ${!bool1}`);

// 14. Demo using template literals to format strings

// 15. Data type in JavaScript
/* 
    simple type system: number(float), string, boolean, date, function, array and object
    special type: NaN, null, undefined

    checking type
    - typeof operator: return a string of the data type
    - instanceof operator

    types can change
*/
let x = 'something';
x = 1;
console.log(typeof x);
x = 1 + 'hello';
console.log(typeof x);

// Equality Gotchas
let y = 0 == '';
let z = 0 === '';
console.log(y, z);

//16. Demo: Data type in JavaScript
const people = ["An", "Linh", "Hue"];
const one = new Number(1);
const str = "Hello World";
const b = true;
const person = {
    firstName: "Nguyen",
    lastName: "Tam Hung"
};

function sayHello(person) {
    console.log("Hello " + person.firstName);
}

console.log("-- typeof --");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello); 

console.log("-- instanceof ---");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(people instanceof Object)
console.log(sayHello instanceof Function)

// 17. Math in JavaScript
// basic math: + - * / % ++ --
let num1 = 100;
console.log(num1 % 150);

// The math object
Math.PI;
Math.sqrt(num1);
// 18. Demo math in javascript

// 19. Converting strings to numbers
// Number and strings
/**
 parseInt() and parseFloat()
 Convert numerical strings to numbers

 toString: convert numbers to numerical strings
 */

 // 21. Handling errors with try/catch/finally
 // Errors
 // Exception, Error, Throwing an Exception

 function criticalCode() {
    throw "throwing an exception";
 }

 function logError(theException) {
    console.log(theException);
 }

 // Throwing Exception
 //throw 'myException';
 //throw true;


 // try .. catch
 console.log("\n---try ... catch---\n")
 try{
    criticalCode();
 }
 catch(ex){
    console.log("Got an error");
    logError(ex);
 }

 // throwing in try ... catch
 console.log("\n----throwing in try ... catch----\n")
try {
    throw "An exception that is thrown every time";
} catch(ex) {
    console.log("Got an error")
    logError(ex);
}

 // try catch finally
 console.log("\n----try ... catch ... finally----\n")
 try {
    criticalCode();
 } catch(ex) {
    console.log("Got an error");
    logError(ex);
 } finally {
    console.log("code that always will rung");
 }



// 23. Dates
const now = new Date();
console.log(now);

now.setFullYear(2023);
now.setMonth(3);
now.setDate(4);

now.setHours(4);
now.setMinutes(24);
now.setSeconds(58);

console.log(now);


// 25 Boolean logic with if statements
// comparing values in javascript
// 26 Demo: Boolean logic with if statements

// 26 Boolean logic with switch and other syntax
const a = '';
if (a) {
    console.log('x contains a value');
}

// 29:Creating arrays
let arrName = [];

// 31. Populating array

// 32. Array method
// push, pop, shift, unshift, concat
// demo

// 35 Loop in JS
// Common loop types: while, for, for .. of
// while loop
const names_loop = ["Hung", "An", "Phuong"];
let index = 0;

while (index < names_loop.length) {
    const name = names_loop[index];
    console.log(name);
    index++;
}

// for loop
for (let index=0; index < names_loop.length; index++) {
    const name = names_loop[index];
    console.log(name);
}

// for .. of loops
for (let name of names_loop) {
    console.log(name);
}

// 37: Function

// 39 Arrow and anonymous functions
// => 
    const add = (a, b) => a + b;
    console.log(add(1, 2));

    const subtract = (a, b) => {
        const result = a - b;
        return result;
    }
    console.log(subtract(5, 3));

// this context

// 41 JS Object Notation (JSON)
// Object format
const book = {
    title: "1984",
    author: "Tam Hung",
    isAvailable: false
};
// converted to JSON
const bookJSON = JSON.stringify(book);
console.log(bookJSON.length);

var copies = [book, book];
var json = JSON.stringify(copies);
console.log(json);

// parse: deserialize JSON to Object
const objBook = JSON.parse(bookJSON);
console.log(objBook.title);
const arrObjBook = JSON.parse(json);
//console.log(arrObjBook[1].title);
for (let book of arrObjBook) {
    console.log(book.author);
}

// 44 Object in JavaScript

let ab = "test";
ab = "test2"
console.log(ab);


// 45 Promises for long running operations

function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation() {
    return 42;
}

async function run() {
    console.log('Start!!');
    await promiseTimeout(2000);

    const response = await longRunningOperation();
    console.log(response);
    console.log("Top!!");
}

run();

// 50 Demo Package management

// https://learn.microsoft.com/en-gb/shows/beginners-series-to-javascript/demo-asyncawait-for-managing-promises-48-of-51