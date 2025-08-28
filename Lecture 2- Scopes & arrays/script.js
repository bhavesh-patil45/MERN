/* Lecture 2 */

/*
Yesterday's Topics

- Functions
    - When and why to use a function
    - definitions and invokes (calling a function)
    - functions without parameters
    - functions with parameters
    - default parameters
    - nested functions

- Arrays
    - What are arrays, indices
    - two ways of declaring & defining an array
    - functions of arrays - push/pop, unshift/shift, slice
    - for ..in loop & for ..of loop


*/

/* Wierd behaviors
If JS, arrays can be initialized with given size if only 
one argument(of type Number) is passed, 
it creates "empty" spaces for all the elements 
and they're not undefined, but EMPTY 
*/
const arr = new Array(10);
console.log(arr);

const arr2 = new Array("10");
console.log(arr2);

/* =========== Continuing more array methods ========== */
const teams = ["CSK", "RCB", "SRH", "KKR", "GT"];

//indexOf(value) -> returns either -1/index
console.log(teams.indexOf("SRH")); // 2, as the index of "SRH" in teams is 2
console.log(teams.indexOf("ABC")); // -1, as "ABC" is not present in teams

//TASK -> replace KKR with LSG using indexOf() method
/* STEPS:
 - find the index of KKR in teams array
 - if KKR exists in teams array, 
        - then update the value at this index with LSG 
  */
const kkrIndex = teams.indexOf("KKR");
if (kkrIndex != -1) {
    teams[kkrIndex] = "LSG";
}
console.log(teams);

//includes() function in arrays -> tells if a value exists in an array or not
// return boolean only -> true/false
console.log("Finding SRH: ", teams.includes("SRH"));
console.log("Finding SRK: ", teams.includes("SRK"));

//TASK -> replace KKR with LSG using indexOf() & includes() method
/* STEPS:
 - find the index of KKR in teams array
 - if KKR exists in teams array, 
        - then update the value at this index with LSG 
  */

const oldTeam = "GT";
const newTeam = "RR";

if (teams.includes(oldTeam)) {
    const kkrIndex = teams.indexOf(oldTeam);
    teams[kkrIndex] = newTeam;
}
console.log(teams);

//concat() function
const otherTeams = ["LSG", "RR", "MI"];
const otherTeams2 = ["LSG2", "RR2", "MI2"];
const fullTeam = teams.concat(otherTeams, otherTeams2);
console.log(fullTeam);

//QUESTIONS ON FUNCTIONS AND ARRAYS
/*
Q1: Find factorial of a number. 
Input
5
Output
120
Explanation: 5! = 1*2*3*4*5;
*/

function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

console.log("Factorial of 5", factorial(5));
console.log("Factorial of 0", factorial(0));
console.log("Factorial of 10", factorial(10));

/* 
Bachaa Question: 
Part1: Write a function to calculate the average of an array
Part2: Print the average upto 6 decimal places

Input
[4, 8, 3, 5]

Output
5

Explanation
sum of array = 20, total number of elements = 4
hence average = sum of array/total number of elements 
              = 20/4 
              = 5
*/

/*
===============================
Q2: Given an array -> [4, 10, 6, 8] and r = 4; 
Find nCr of each element of this array.

nCr = n!/[(n-r)!*r!]

input:
[4, 10, 6, 8]

output:
[1, 210, 15, 70]

explanation:
nCr for this array:
nCr(4) = 1,
nCr(10) = 210
nCr(6) = 15
nCr(8) = 70


STEPS:
1 - write a function to calculate factorial
2 - write a function to calculate nCr, according to formula
3 - write a function to calculate nCr for an array
    - loop over array, and for each element of this array, call nCr(element, r)
    - whatever value nCr is returning, store it inside an array
4 - print the nCr array for this given array
 */
function nCr(n, r) {
    if (n - r < 0) return -1;

    const nFact = factorial(n);
    const rFact = factorial(r);
    const nrFact = factorial(n - r);

    const result = nFact / (rFact * nrFact);

    return result;
}

function nCrOfAnArray(arr) {
    const r = 4;
    const ans = [];

    for (let number of arr) {
        const ncr = nCr(number, r);
        ans.push(ncr);
    }

    return ans;
}

function printArr(arr) {
    console.log(arr);
}

const numbers = new Array(4, 10, 6, 8);
printArr(nCrOfAnArray(numbers)); // equivalent to console.log(nCrOfAnArray(numbers));
