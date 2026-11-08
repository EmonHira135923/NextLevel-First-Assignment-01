// Problem 2:
// Create a function processInput that accepts a value which may be a string, number, or boolean, and returns a formatted result based on the value's type:

// If the input is a string → trim any leading/trailing spaces and return it in lowercase.
// If the input is a number → return the number multiplied by 10.
// If the input is a boolean → return "Active" if true, or "Inactive" if false.
// Requirements:
// Write the correct union type for the function parameter and the return type.
// Use type narrowing (typeof) to handle each case safely.
// // Sample Input:
// processInput("  TypeScript  ");
// processInput(7);
// processInput(true);
// processInput(false);

// // Sample Output:
// "typescript"
// 70
// "Active"
// "Inactive"

type processInputType = string | number | boolean;

const processInput = (a:processInputType):processInputType => {
  if (typeof a === "string") return a.trim().toLowerCase();
  else if (typeof a === "number") return a * 10;
  else {
    if (a == true) return "Active";
    else return "Inactive";
  }
};

const FirstString = processInput("  Emon  ");
const secondNumber = processInput(8);
const thirdtrue = processInput(true);
const fourthfalse = processInput(false);

console.log("First Check", FirstString);
console.log("Second Check", secondNumber);
console.log("Third Check", thirdtrue);
console.log("Fourth Check", fourthfalse);
