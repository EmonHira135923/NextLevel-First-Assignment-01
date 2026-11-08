// Create a generic function concatenateArrays that accepts multiple arrays of the same type T using rest parameters (...arrays: T[][]) and returns a single combined array containing all elements in the order they were passed.

// Requirements:
// Must use a generic type parameter <T> and rest parameters.
// Do not use any.
// // Sample Input:
// concatenateArrays(["a", "b"], ["c", "d"]);
// concatenateArrays([1, 2], [3, 4], [5]);

// // Sample Output:
// ["a", "b", "c", "d"]
// [1, 2, 3, 4, 5]

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

console.log(concatenateArrays<string>(["a", "b"], ["c", "d"]));
console.log(concatenateArrays<number>([1, 2], [3, 4], [5]));