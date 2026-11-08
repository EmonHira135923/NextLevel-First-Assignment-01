// Create a function formatCoordinate that accepts a readonly tuple representing a coordinate and location name in the exact order [latitude, longitude, locationName] ([number, number, string]), and returns a formatted location string.

// Requirements:
// Apply the readonly modifier to the tuple parameter so it cannot be mutated inside the function.
// Return the exact string format: "Location: [locationName] ([latitude], [longitude])" without rounding the numbers.
// // Sample Input:
// formatCoordinate([23.81, 90.41, "Dhaka"]);
// formatCoordinate([22.35, 91.78, "Chittagong"]);

// // Sample Output:
// "Location: Dhaka (23.81, 90.41)"
// "Location: Chittagong (22.35, 91.78)"

type Coordinatetype = readonly [number,number,string];

const formatCoordinate = (a:Coordinatetype) : string => {
 return `Location: ${a[2]} (${a[0]}, ${a[1]})`;   
}

const f = formatCoordinate([23.81, 90.41, "Dhaka"]);
const g = formatCoordinate([22.35, 91.78, "Chittagong"]);

console.log(f);
console.log(g);