// Define an interface Course with the following properties:

// title (string)
// students (number)
// isPublished (boolean)
// Then, create a function getPopularCourses that accepts an array of Course objects and a minStudents number. The function should return a new array containing only the courses where isPublished is true and students is greater than or equal to minStudents.

// Requirements:
// Define the Course interface with the exact property names and types.
// Do not mutate the original array.
// // Sample Input:
// const courses = [
//   { title: "TypeScript Mastery", students: 120, isPublished: true },
//   { title: "Draft Course", students: 200, isPublished: false },
//   { title: "Basic HTML", students: 45, isPublished: true },
//   { title: "Next.js Pro", students: 85, isPublished: true }
// ];

// getPopularCourses(courses, 80);

// // Sample Output:
// [
//   { title: "TypeScript Mastery", students: 120, isPublished: true },
//   { title: "Next.js Pro", students: 85, isPublished: true }
// ]

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

const getPopularCourses = (course: Course[], student: number): Course[] => {
  let newArray: Course[] = [];
  for (let i = 0; i < course.length; i++) {
    if (course[i].isPublished == true && course[i].students >= student) {
      newArray.push(course[i]);
    }
  }
  return newArray;
};

console.log(getPopularCourses(courses, 80));
