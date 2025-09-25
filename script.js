/* Practice Question */
/* Cricket Team */
const team = {
    name: "Indian Cricket Team",
    /* this will store an object with two properties -> {id: 1, scores: [10, 34, 80]} */
    players: [{ id: 1, scores: [10, 34, 80] }],

    display: function () {
        // loop over players and display their id and scores
    },

    addPlayers: function (id) {
        /* assume always a new player is coming with unique id, this function should create 
        a new player with this id and empty scores array, then push this player to players array
        */
    },

    addScore: function (id, score) {
        /* find the player with this id, and push this score to its score array */
    },

    averageScore: function (id) {
        /* find the player with this id and calculate its avg score and return it*/
    },

    teamAverage: function () {
        //optional
        /* calculate the average of scores of all players combined */
    },
};

team.addPlayers(2);
team.addPlayers(3);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

team.display();
console.log("average score of player 1 - " + team.averageScore(1)); // => 153/4 = 38.25
console.log("average score of player 2 - " + team.averageScore(2)); // => 260/3 = 86.67

console.log("average score of team - " + team.teamAverage()); // => 513/9 = 57

/// function declaration ////

//function declaration
//this function is hoisted
function sayHello() {
    console.log("Hello Students");
}

/* Types of functions */
/* =========== Arrow Functions =========== */
// arrow(3, 4); Note: gives error, as arrow functions are not hoisted, but the variable is
/* Method 1 --> 
const arrow = (a, b) => a - b; */

/* Method 2 --> */
const arrow = (a, b) => {
    return a - b;
};

console.log(arrow(5, 2));

// que - WAF to check no. is div 3 or not

const div = (a) => (a % 3 == 0) ? "yes" : "no"
console.log(div(6))

// 2nd method
const isDivisible = (n) => (n % 3 == 0);
console.log(isDivisible(6));
console.log(isDivisible(16));

// arrow function do not have their own "this" keyword they uses parent's "this" keyword

const student = {
    names: 'Bhavesh',
    age: 22,
    result1: function (resultStatus) {
        console.log(this.names + "has" + resultStatus + "the exam");
        console.log(this);//show the obj properties 
    },
    result2: (resultStatus) => {
        //this.names gives undefied , as parents this doesnt have 'names' property
        console.log(this.names + "has" + resultStatus + "the exam");
        console.log(this);//show the obj properties 
    }
};
student.result1("passed")
student.result2("failed")

//////////////// Anonymous Function ////////////////
// basically function with no name

// Higher Order Function
// These functions are either functions that takes functions as arguments or returns a function

/* types of HOF
 1. forEach() 
  - applies the callback function on each element
  - iterates over each element and doesn't break like other for loops
  - doesn't change the original array
  - returns undefined
  - can be used to iterate and do some operations on array
 */

let arr = [2, 1, 6, 3, 9]

console.log(
    arr.forEach((value, index, array) => {
        value *= 2;
        array[index] = value;
        console.log(value, index, array);

    })
);
console.log({ arr });

let users = [
    { name: "bhavesh", age: 22 },
    { name: "pratik", age: 22 },
    { name: "mayur", age: 22 },

];

users.forEach((value) => {

})

/* 2. Map()
   - transforms the arrays
   - return an arrays
   - doesn't change orignal arrays
   */

arr = [3, 2, 19, 6, 0]
let squredArr = arr.map((value, index, array) => {
    return value * value
});
console.log({ squredArr });

users = [
    { name: "bhavesh", age: 22 },
    { name: "pratik", age: 20 },
    { name: "mayur", age: 23 },
];

// transform the name of each user to uppercase\

let names = users.map((value) => {
    value.name.toUpperCase()
    return { name: value.name.toUpperCase(), age: value.age }
})
console.log(names)

/* 3. Filter()
    - transforms the arrays
    - return an arrays
    - doesn't change orignal arrays
    -nums.filter((value,index,array)=> condition)
    */

let nums = [2, 4, 56, 852, 46, 76];

const oddNumber = nums.filter((value, index, array) => value % 2);
console.log({ oddNumber: oddNumber });

let name = ['Pranjal', 'Bhavesh', 'uday', 'siddharth', 'neha']
// filter remove names less than 5 char

let ans = name.filter((value) => {
    value.length >= 5
})
console.log(ans);
