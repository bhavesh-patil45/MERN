/*Absolute Difference Sum
Given an array A of size N. Value of an element Ai is defined as the sum of absolute difference of all elements of the array with Ai. More formally, the value of an element at index i is sum of |Ai - Aj| over all j (1 <= j <= N). Find the maximum such value over all i (1 <= i <= N) in the array.

Note: Given array is 1-based index

Input Format
First line of the input contains a single integer N. The second line of the input contains N space seperated integers.

Output Format
Print the maximum such value over all i (1 <= i <= N) in the array. */

const arr = [1, 1, 5, 5, 8, 9]
let n = arr.length;
let maxSum = 0
for (let i = 0; i < arr.length; i++) {
    let sum = 0
    for (let j = 0; j < arr.length; j++) {
        if (i == j) continue
        sum += Math.abs(arr[i] - arr[j])
    }


    if (sum > maxSum) {
        maxSum = sum
    }
}
console.log(maxSum)

// Q - Pattern problem
let n = 7
console.log("1")
for (let i = 1; i < n; i++) {
    let print = ""
    // let count = i
    for (let j = i; j < i + i + 1; j++) {
        print += j + " "
    }
    console.log(print)
}