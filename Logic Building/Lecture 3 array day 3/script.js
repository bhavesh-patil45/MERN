/*
Lecture 3
Yesterday's Topics:

- Array inbuilt functions: includes(), indexOf(), concat()
- factorial of a number
- nCr (combinations)
- Average problems
- Some questions from the Array module
*/

/* Some more problems on Arrays */
/* 
Q1: given an array, find its prefix sum 

Input
arr = [3, 5, 1, 4, 5, 8];
 
Output
prefix = [3, 8, 9, 13, 18, 26]
*/
const arr = [3, 5, 1, 4, 5, 8]; //n
const pref = []; //1
pref[0] = arr[0]; //1
for (let i = 1; i < arr.length; i++) {
    //n -> arr.length
    pref[i] = pref[i - 1] + arr[i];
}
console.log(pref); //1

// overall time complexity -> n + 1 + 1 + n + 1 => 2n + 3 => O(n)
// space complexity -> O(n);

//some tricky code snippets
const num = 23.5,
    val = "abc";
console.log(val * 2);
console.log(num.toFixed(3) + 12);

const arr1 = [1, 2, 1, 4, 2, 2, 4];

console.log(arr1);

for (let i = 0; i < arr1.length; i++) {
    let x = arr1[i];
    if (x == -1) continue;

    let count = 0;
    for (let j = 0; j < arr1.length; j++) {
        if (x === arr1[j]) {
            count++;
        }
    }

    console.log(`(${x} , ${count})`);

    for (let j = 0; j < arr1.length; j++) {
        if (x === arr1[j]) {
            arr1[j] = -1;
        }
    }
}
