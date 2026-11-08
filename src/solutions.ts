const multiplyValue = (a:number,b?:number) :number => {
    if(typeof(b)==="number") return a*b;
    else if(typeof(b)==="undefined") return a*2;
    else return 0;
}

type processInputType = string | number | boolean;

const processInput = (a:processInputType):processInputType => {
  if (typeof a === "string") return a.trim().toLowerCase();
  else if (typeof a === "number") return a * 10;
  else {
    if (a == true) return "Active";
    else return "Inactive";
  }
};

type Coordinatetype = readonly [number,number,string];

const formatCoordinate = (a:Coordinatetype) : string => {
 return `Location: ${a[2].trim()} (${a[0]}, ${a[1]})`;   
}

const concatenateArrays = <T>(...arrays:T[][]) :T[] => {
    let newArray:T[] = [];
    let i:number;
    let j:number;
    for(i=0;i<arrays.length;i++){
        for(j=0;j<arrays[i].length;j++){
            newArray.push(arrays[i][j]) ;
        }
    }
    return newArray;
}

