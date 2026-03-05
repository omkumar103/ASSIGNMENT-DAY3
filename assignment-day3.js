//Section: 1
//Question 1
/*
let str="JavaScript";
let length=str.length;
console.log(length); */

//Question 2
/*
function checkNumber(value) {
    return typeof value === "number";
}
console.log(checkNumber(25));    
console.log(checkNumber("25"));  */

//Question 3
/*
let str = "123";     
let num = Number(str);
console.log(num); */

//Question 4
/*
let number1 = 10;
let number2 = 20;

if (number1 > number2) {
    console.log("Greater");
} 
else if (number1 < number2) {
    console.log("Smaller");
} 
else {
    console.log("Equal");
}
*/

//Question 5
/*
let fName = "Rahul";
let ltName = "Sharma";
let fullName = fName + " " + ltName;
console.log(fullName);
*/

//Section 2
//Question 1
/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const add = function(a, b) {
  return a + b;
};

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {

    let result = add(Number(num1), Number(num2));
    console.log("Result:", result);

    rl.close();
  });
});
*/

//Question 2
/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Normal Function
function square(num) {
  return num * num;
}

// Arrow Function
const squareArrow = (num) => num * num;

rl.question("Enter a number: ", (input) => {
  let number = Number(input);

  console.log("Square using function:", square(number));
  console.log("Square using arrow function:", squareArrow(number));

  rl.close();
});
*/

//Question 3
/*
const checkEvenOdd = (num) => {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
};
checkEvenOdd(4);
checkEvenOdd(7);
*/

//Question 4
/*
// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log("Celsius to Fahrenheit:", celsiusToFahrenheit(10));
console.log("Fahrenheit to Celsius:", fahrenheitToCelsius(20));
*/

//Question 5
/*
const multiply = (a, b) => a * b;
console.log(multiply(110,20));
*/
