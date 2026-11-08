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


type Coordinatetype = readonly [number,number,string];

const formatCoordinate = (a:Coordinatetype) : string => {
 return `Location: ${a[2]} (${a[0]}, ${a[1]})`;   
}

const f = formatCoordinate([23.81, 90.41, "Dhaka"]);
const g = formatCoordinate([22.35, 91.78, "Chittagong"]);

console.log(f);
console.log(g);