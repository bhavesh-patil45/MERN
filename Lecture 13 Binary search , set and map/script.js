/* Question: Find the square root of a number in O(logN) T.C. */

let N = 81;

function squareRoot(N) {
    let low = 0;
    let high = N;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let midSquare = mid * mid;

        if (midSquare == N) {
            return mid;
        } else if (midSquare > N) {
            high = mid - 1;
        } else { //midSquare < N
            low = mid + 1;
        }
    }
    return -1;
}

let sqrt = squareRoot(N);

if (sqrt != -1)
    console.log("Square root of " + N + " is " + sqrt);
else
    console.log(N + " is not a perfect square");

/* Function to find the index of target element in a sorted Array */
function findTargetElement(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
}

/* Function to find the first index of target in a Sorted Array */
function firstIndexOfTarget(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let index = -1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] == target) {
            index = mid;
            high = mid - 1;
        } else if (arr[mid] > target) {
            high = mid - 1;
        }
        else { //arr[mid] < target
            low = mid + 1;
        }
    }

    return index;
}

let arr = [1, 3, 6, 6, 6, 11, 11, 12];
let target = 13;
console.log("first index of " + target + " is " + firstIndexOfTarget(arr, target));


/* Lowerbound */
function lowerbound(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let index = arr.length;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] >= target) {
            index = mid;
            high = mid - 1;
        } else low = mid + 1;
    }

    return index;
}

/* H.W: Implement Upperbound Function */

/* SET in JS */
let set = new Set([1, 2, 4, 4, 5, 6]); // set always maintains insertion order

// method to add element in set
set.add(200);
set.add(2);
set.add(3);

console.log(set);

// method to check if a number is in set or not
console.log("checking if 30 is in set?", set.has(30));
console.log("checking if 200 is in set?", set.has(200));

console.log("Size of set: " + set.size);

console.log(set);
console.log(set.delete(4), set);


/* Remove duplicates from the array */
let array = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];
//o/p: 2,3,4,1,0,5,10

let set1 = new Set(array);
let arr1 = [...set1];
let arr11 = Array.from(set1);

let set2 = new Set([...array]);
let arr2 = [...set2];

console.log({ array, arr1, arr11, arr2 });


/* MAP in JS */
let map = new Map([
    ["name3", ["Sultan", "Sahil"]],
    ["name4", "Sunny"]
]); // map always maintains insertion order

map.set("name1", "Sultan");
map.set("name2", "Sunny");

//checking if a key is present or not
console.log("checking if `name1` is present or not?", map.has("name1"));

//getting the value of a specific key
console.log("Value of `name2` key: ", map.get("name2"));

//deleting a key in map
console.log("Deleting `name4`: ", map.delete("name44"));

//
for (let i of map) {
    console.log("key: " + i[0], ", Value: " + i[1]);
}

console.log("Printing keys");
for (let i of map.keys()) {
    console.log(i);
}

map.set("name1", "Sargar");

const mapArr = [...map];
console.log("Map converted into Array", { mapArr });

/* Question: Find intersection & Union */
let arr4 = [1, 2, 4, 5, 6, 3], arr5 = [2, 5, 6, 3, 1, 3];

//intersection: 1,2,5,6,3 (order may be different - based on insertion order in Set/Map)
//union: 1,2,3,4,5,6 (order may be different - based on insertion order in Set/Map)

// const unionArr = [...new Set([...arr4, ...arr5])];
const unionSet = new Set([...arr4, ...arr5]);
const unionArr = [...unionSet];
console.log({ unionArr });

// intersection
let intersection = [];
let arr4Set = new Set(arr4);


for (let i = 0; i < arr5.length; i++) {
    if (arr4Set.has(arr5[i]))
        intersection.push(arr5[i]);
}

intersection = [...new Set(intersection)];

/* Another way to execute above line
let intersectionSet = new Set (intersection);
intersection = [...intersectionSet];
 */

console.log({ intersection });