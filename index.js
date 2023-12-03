/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...

let fullName = `Khalid Almeer`;
let yearOfBirth = 1996;
let hobby = `Chess`;
let funFact = `idk`;
const image = "./Unknown.jpg";
/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 *
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

// function calculate_age(dob) {
//   var diff_ms = Date.now() - dob.getTime();
//   var age_dt = new Date(diff_ms);

//   return Math.abs(age_dt.getUTCFullYear() - 1970);
// }

// console.log(calculate_age(new Date(1996, 3, 20)));
const fullNameString = `My name is ${fullName}`;
const yearOfBirthString = `I am ${2023 - yearOfBirth}`;
const hobbyString = `My hobby is ${hobby}`;

/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  stars++;
}
function decrementBy1() {
  stars--;
}

function incrementBy2() {
  stars = stars + 2;
}
function decrementBy2() {
  stars = stars - 2;
}
