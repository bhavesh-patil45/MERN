//Last Class

const value = 4 + ("34" * " ") / 17;
console.log({ value });

const space = " ";
console.log(space * 1);

//Given a N*N grid, find the primary diagonal sum
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]; // 3*3 grid

[
    [(0, 0), (0, 1), (0, 2)], // (0, 2)
    [(1, 0), (1, 1), (1, 2)], // (1, 1)
    [(2, 0), (2, 1), (2, 2)], // (2, 0)
];

//for primary diagonal -> i == j
let n = arr[0].length;
let sum = 0;
for (let i = 0; i < n; i++) {
    sum += arr[i][i];
}

//TC = O(n)
//SC = O(1)

console.log("Primary Diagonal Sum: ", sum);


//secondary diagonal -> i + j == n - 1

/*
 
sum = 0;
for (let i = 0; i < n; i++) {
    sum += arr[i][n - i - 1];
}

/* THIS IS ALSO CORRECT
let j = n - 1;
for (let i = 0; i < n; i++) {
  sum += arr[i][j];
  j--;
} */

//TC = O(n)
//SC = O(1)

console.log("Secondary Diagonal Sum: ", sum);

//Write a function to print the odd-numbered column elements of a matrix
const arr2 = [
    [1, 2, 3, 4, 5, 6],
    [2, 6, 12, 43, 3, 5],
    [8, 10, 34, 23, 12, 8],
];
//output: 2 6 10 4 43 23 6 5 8

function printOddColElements(arr) {
    let rows = arr.length;
    let cols = arr[0].length; // since arr2 is a matrix

    // jo constant hai vo bahar wale loop m aaega
    for (let j = 0; j < cols; j++) {
        let ans = "";
        if (j % 2 == 0) continue;
        // jo change ho raha hai vo andar wale loop m aaega
        for (let i = 0; i < rows; i++) {
            ans += arr[i][j] + " ";
        }
        console.log(ans);
    }
}

printOddColElements(arr2);

/* H.W.
Ques: Given a 2d matrix, reverse each odd columns and print it
Input =====>
[
  [1, 2, 3, 4, 5, 6],
  [2, 6, 12, 43, 3, 5],
  [8, 10, 34, 23, 12, 8],
];

Output =====>[
  [1, 10, 3, 23, 5, 8],
  [2, 6, 12, 43, 3, 5],
  [8, 2, 34,  4, 12, 6],
];
*/
array = [
    [1, 2, 3, 4, 5, 6],
    [2, 6, 12, 43, 3, 5],
    [8, 10, 34, 23, 12, 8],
];

let row = array.length
let col = array[0].length
let ans
for (let i = 0; i < col; i++) {
    if (i % 2 == 0) continue;
    // jo change ho raha hai vo andar wale loop m aaega
    let top = 0, bottom = row - 1
    while (top < bottom) {
        let temp = array[top][i]
        array[top][i] = array[bottom][i]
        array[bottom][i] = temp

        top++
        bottom--
    }
}
console.log(array)


/* =========== SUBARRAYS =========== */
//def: continous segment of an array

const arr3 = [1, 2, 3, 4];
//print all subarrays
let size = arr3.length;
let sum1 = 0;

for (let i = 0; i < size; i++) {
    let subarray = "";
    let demo = 0;

    for (let j = i; j < size; j++) {
        subarray += arr3[j] + " ";

        demo += arr3[j];
        sum1 += demo;


        console.log(subarray);
    }
}

console.log({ sum })


function sumSubarrays(arr3) {
    let size = arr3.length;
    let sum1 = 0;

    for (let i = 0; i < size; i++) {
        //let subarray = "";
        let demo = 0;

        for (let j = i; j < size; j++) {
            //subarray += arr3[j] + " ";

            demo += arr3[j];
            sum1 += demo;


            //console.log(subarray);
        }
    }

    console.log({ sum })
}

sumSubarrays([1, 2, 3, 4])
/* H.W
Question: Write a function to find the sum of all subarrays
*/
