// Coding Example 1:
// let string = "";

// for (let i = 0; i <= 7; i++) {
//   string += "#";
//   console.log(string);
// }

// Fizz Buzz:
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");
//   else if (i % 3 === 0) console.log("fizz");
//   else if (i % 5 === 0) console.log("buzz");

//   console.log(i);
// }

// ChessBoard:
// let ChessBoard = function (num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) console.log(" # # # #");
//     else if (i % 2 !== 0) console.log("# # # #");
//   }
// };

// ChessBoard(16);

// function power(base, exponent) {
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// }

// console.log(power(2, 3));

// console.log(13 * undefined * 13);

//Chapter 3 Exercises
// Minimum function:

// const min = function (num1, num2) {
//   if (num2 < num1) return num2;
//   else if (num1 < num2) return num1;
// };

// console.log(min(1, 2));

// Recursion:
//1: We want to test to see if a number is even or odd.
//2: zero is even
//3: one is odd
//4: any other number it's evenness is that same is n - 2
//5: define a recursive function
//6: the fun should return a boolean.

// const isEven = function (num) {
//   if (num == 0) return true;
//   if (num == 1) return false;
//   if (num != 1 || num != 0) {
//     return isEven(num - 2);
//   }
// };

// console.log(isEven(10));

// Bean Counting
// console.log((str = "hello word"));
// console.log(str[str.length - 1]);

// Define a function that take a string as it's only arg and returns a number that indicates how many uppercase B charcters there are in the string.

// const countB = function (str) {
//   let numB = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "B") numB++;
//   }
//   return numB;
// };

// console.log(countB("hello"));

const countChar = function (str, charNum) {
  let numB = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === charNum) numB++;
  }
  return numB;
};

console.log(countChar("hello", ""));
