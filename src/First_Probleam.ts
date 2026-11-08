// Create a function multiplyValue that accepts a number value and an optional number multiplier.

// If multiplier is provided, return value multiplied by multiplier.
// If multiplier is not provided (undefined), return value multiplied by 2 by default.
// Requirements:
// Handle 0 properly when passed as multiplier (multiplying by 0 must return 0).
// // Sample Input:
// multiplyValue(10);
// multiplyValue(10, 5);
// multiplyValue(7, 0);

// // Sample Output:
// 20
// 50
// 0

const multiplyValue = (a:number,b?:number) => {
    if(typeof(b)==="number") return a*b;
    else if(typeof(b)==="undefined") return a*2;
    else return 0;
}


const first = multiplyValue(10);
const second = multiplyValue(10,5);
const third = multiplyValue(7,0);
const fourth = multiplyValue(0,10);


console.log("First Ans: ",first);
console.log("Second Ans: ",second);
console.log("Third Ans: ",third);
console.log("Forth Ans: ",fourth);
