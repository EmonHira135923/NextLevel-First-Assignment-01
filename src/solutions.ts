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