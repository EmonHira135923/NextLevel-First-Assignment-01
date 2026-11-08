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
    for(let i=0;i<arrays.length;i++){
        for(let j=0;j<arrays[i].length;j++){
            newArray.push(arrays[i][j]) ;
        }
    }
    return newArray;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}


const getPopularCourses = (course: Course[], student: number): Course[] => {
  let newArray: Course[] = [];
  for (let i = 0; i < course.length; i++) {
    if (course[i].isPublished == true && course[i].students >= student) {
      newArray.push(course[i]);
    }
  }
  return newArray;
};


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


class Employee{
    constructor(protected name:string,private baseSalary:number){}
    getDetails():string{
        return(`Employee: ${this.name}, Base Salary: ${this.baseSalary}`);
    }
}

class Manager extends Employee {
    constructor(name:string,baseSalary:number,private department:string){
        super(name,baseSalary);
    }
    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = async(age:number):Promise<string> => {
    return new Promise ((resolve,reject)=>{
        if(age>=18){
            setTimeout(()=>{
                resolve(`Access Granted`);
            },1000);
        }
        else{
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    })
}