/*
Q- delete last element 9 */

// using splice 
// syntax -> splice (start , count )
let arr = [1, 4, 3, 7, 9];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 9) {
        arr.splice(i, 1)
    }
}
console.log(arr)

let arr1 = [1, 2, 3, 4]
console.log(arr1.shift())

// delete first element

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
}

arr.length = arr.length - 1
console.log(arr);

// rotate array in right by 1 element

arrY = [10, 20, 30, 40, 50]
let temp = arrY[0]

for (let i = 0; i < arrY.length; i++) {
    arrY[i] = arrY[i + 1]

}
arrY[arrY.length - 1] = temp
console.log(arrY)

/* Function to print the sum of all subarrays */
const arr = [1, 2, 3, 4];

function subarraySum(arr) {
    let sum = 0;
    let n = arr.length;

    //loop for subarrays starting from different index
    for (let i = 0; i < n; i++) {

        // for each j, it will represent a subarray starting from i and ending at j
        let subSum = 0;
        for (let j = i; j < n; j++) {
            subSum += arr[j];
            sum += subSum;
        }
    }

    return sum;
}

console.log("Sum of all subarrays of ", arr, "is", subarraySum(arr));

/* ================== DELETIONS IN ARRAY */
/* Ques: delete the last element of the array */

//Using slice() -> doesn't change the array, until assigned to array itself
let arr1 = [1, 2, 3, 4, 5, 6];
arr1 = arr1.slice(0, arr1.length - 1);
console.log({ arr1 });

//Using splice() -> changes the original array
//syntax -> splice(start, count);
arr1.splice(arr1.length - 1, 1);
console.log(arr1);

//using pop()

//By changing the length of the array
arr1.length = arr1.length - 1;
console.log("Array after decreasing the value of length property", arr1);

/* Question: Delete element from begining */
const arr2 = [10, 20, 30, 40];
console.log("Array before deletion of first element", arr2);
let z = arr2.shift();
console.log("Array after deletion of first element", arr2);
console.log({ z });

//Using loops
/* just shift all the elements left by one index, and decrease the length property value by 1 */
const arr3 = [1, 2, 3, 4, 5];
console.log("Array before deletion of first element", arr3);
for (let i = 0; i < arr3.length - 1; i++) {
    arr3[i] = arr3[i + 1];
}
arr3.length = arr3.length - 1;

console.log("Array after deletion of first element", arr3);

/* HOMEWORK */
/* Do each deletion question, and instead of deletion, do insertion */

/* ===================== ROTATIONS in Array  ========================*/
/* Q: Rotate array right (clockwise) by 1 element */
/* Q: Rotate array left (anti - clockwise) by 1 element */

/* HOMEWORK */
/* Q: Write a function to Rotate array right (clockwise) by k element */
Arrays = [1, 2, 3, 4, 5]
k = 2
function clockWise() {
    let temp = Arrays[Arrays.length - 1]
    for (let i = Arrays.length - 1; i > 0; i--) {
        Arrays[i] = Arrays[i - 1]
    }
    Arrays[0] = temp

}
while (k > 0) {
    clockWise(Arrays)
    k--
}
console.log(Arrays)

/* Q: Write a function to Rotate array left (anti - clockwise) by k element */
arrY = [10, 20, 30, 40, 50]
k = 3
function anticlock(arrY) {
    let temp = arrY[0]
    for (let i = 0; i < arrY.length; i++) {
        arrY[i] = arrY[i + 1]
    }
    arrY[arrY.length - 1] = temp

}
while (k > 0) {
    anticlock(arrY)
    k--
}
console.log(arrY)
