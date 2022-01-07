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
let ChessBoard = function (num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) console.log(" # # # #");
    else if (i % 2 !== 0) console.log("# # # #");
  }
};

ChessBoard(16);
