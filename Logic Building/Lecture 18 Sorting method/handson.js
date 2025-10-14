// bubble sort
// in a bubble sort we swap adj index 

let arr = [2, 4, 6, 1, 3]
let n = arr.length
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
}
console.log(arr)

// selection sort
// its find min element value in unsorted arrays then swap it

let arr1 = [4, 6, 5, 2, 1, 3]
let n1 = arr1.length
for (let i = 0; i < n1; i++) {
    let min = i
    for (let j = i + 1; i < n1; j++) {
        if (arr[j] < arr[min]) {
            min = j
        }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]
}
console.log(arr1)