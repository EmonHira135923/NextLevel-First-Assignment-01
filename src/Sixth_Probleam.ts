// Problem 6:
// Write a generic function pluckValues that accepts an array of objects (items: T[]) and a valid property key of those objects (key: K), and returns a new array (T[K][]) containing the values of that specific property from each object in the same order.

// Requirements:
// Use generics with the keyof constraint (<T, K extends keyof T>).
// Do not use any.
// // Sample Input:
// const users = [
//   { id: 1, name: "Rakib", role: "Admin" },
//   { id: 2, name: "Sadia", role: "Editor" },
//   { id: 3, name: "Tariq", role: "Subscriber" }
// ];

// pluckValues(users, "name");
// pluckValues(users, "id");

// // Sample Output:
// ["Rakib", "Sadia", "Tariq"]
// [1, 2, 3]

interface User {
  id: number;
  name: string;
  role: string;
}

const users: User[] = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

const pluckValues = <T,K extends keyof T>(
    items:T[],
    key:K
):T[K][] => {
    let newArray:T[K][] = [];
    for(let i=0;i<items.length;i++){
        newArray.push(items[i][key]);
    }
    return newArray;
}

console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));