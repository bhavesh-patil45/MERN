//  4. reduce => HOFs

// Q => find sum
let arra = [2, 5, 3, 10, 34];

let sum = arra.reduce((acc, val, index, arr) => {
    acc += val
    return acc
})
console.log(sum);

// Q => find the count of even numbers
let count = arra.reduce((acc, val, ind, arr) => {
    acc += val % 2 == 0
    return acc
}, 0);
console.log(count);

// Q =>  find the frequency of element

let fruits = ['apple', 'guava', 'kivi', 'apple', 'guava']

let freq = fruits.reduce((acc, value, index, array) => {

    acc[value] = (acc[value] || 0) + 1
    return acc
}, {})
console.log(freq)

/*  find()
    - return a value
    - return the first elment that matches the condition
    */

let findKivi = fruits.find((val, ind, arr) => val === "kivix")
console.log(findKivi);

// Q => given an array of object, containing details of user, console the name of first user aged above 30

const user = [
    { name: "aline", age: 25, isActive: true },
    { name: "bob", age: 35, isActive: false },
    { name: "charlie", age: 28, isActive: true },
    { name: "ethen", age: 35, isActive: false },
]
let name1 = user.find((val, ind, arr) => {
    val.age > 30
    return val.name
})
console.log(name1);

// Q => print the name & age of each user

let print = user.map((val, ind, arr) => {
    return val.name, val.age //for each
})
console.log(print);

// Q => function to create arr name from above user
let name = user.map((val) => {  //map
    return val.name
})
console.log(name);

// Q => function to display active user

let active = user.filter((val) => {
    if (val.isActive == true) return val.name
})
console.log(active)

// Q => sum of age below 30

let belowAge = user.reduce((acc, val, ind, arr) => { //reduce
    if (val.age < 30) acc += val.age
    return acc
}, 0)
console.log(belowAge);

// function to get all active user

// fiter , map

/* ======== passing a function as an arguement & returning a function */
function calculator(a, b, operation) {
    return operation(a, b);
}

function multiply(a, b) {
    return a * b;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

let sum34 = calculator(3, 4, add);
console.log({ sum34 });

/* =================== Error Handling =================== */

try {
    // console.log(studentName);
    let studentName = "Pratik";
    console.log(studentName);
    if (studentName === "Pratik") throw new Error("Pratik found!!");
} catch (error) {
    console.log(error.message);
    console.log(error.name);
    console.log(error.stack);
} finally {
    console.log("In finally block");
}

console.log("after try catch block");


/* 
once --> restricts a function to be called more than once
memoization --> if a function is called with same args as before, it will not calculate the result again, 
                it will find the result from a cache where result of 
                previous function call with same args is stored
*/