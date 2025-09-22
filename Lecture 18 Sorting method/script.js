/* sorting -> data is arranged in a specific manner such that we can know and take decision about data
*/
let arr = [4, 1, 3, 7, 5]
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

        }
    }
}
console.log(arr)

// Bubble sort
arr = [4, 6, 9, 5, 4, 1, 2]

function bubbleSort(arr) {
    let n = arr.length
    for (let i = 0; i < n; i++) {
        // for single pass
        for (let j = 0; j < n - 1 - j; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}
//In Place Sorting -> Sorting the same arr(without using extra space)
//summary ->
// IN ONE PASS -> swap adj element if previous> >= next
// AFTER first pass the grestest element will be at last position
// after each pass one element will be placed it correct sorted position
// refer optimization for not checking elements already placed at their correct sorted position
/* T.C. -> Best -> O(N)
        -> worst -> O(N^2)
        -> Average -> 
    S.C. -> O(1)
Stable sorting-> YEs[Eqval element maintain their relative order]
In place sorting -> YEs [Not using any extra spaces]
*/

// selection sort
arr = [4, 6, 9, 5, 4, 1, 2]
for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
            min = j
        }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]
    console.log(min)
}
console.log(arr)

// In Place Sorting -> Sorting the same arr (without using extra space)
// Summary ->
// IN ONE PASS -> find the minimum element in the unsorted part & swap it
// with the element at the beginning of the unsorted part
// AFTER first pass the smallest element will be at the first position
// after each pass one element will be placed in its correct sorted position
// Optimization: no major optimization like bubble sort, always takes O(N^2)

// T.C. -> Best -> O(N^2)   [still needs to scan unsorted part fully]
//      -> Worst -> O(N^2)
//      -> Average -> O(N^2)
// S.C. -> O(1) [constant extra space]
// Stable sorting -> NO [equal elements may lose relative order because of swapping]
// In place sorting -> YES [works in the same array without extra space]

// Merge Sort
a = [1, 3, 4, 7, 10]
b = [2, 9, 12]
function mergeSort(a, b) {
    result = []
    let start = 0, end = 0
    while (start < a.length && end < b.length) {
        if (a[start] < b[end]) {
            result.push(a[start])
            start++
        } else {
            result.push(b[end])
            end++
        }
    }
    while (start < a.length) {
        result.push(a[start])
        start++
    }
    while (end < b.length) {
        result.push(b[end])
        end++
    }
    return (result)
}
console.log(mergeSort(a, b))

// recursion MERGE sort

function mergeSort1(arr1, low, high) {
    //base case
    if (low == high) {
        return [arr1[low]]
    }
    //recursive calls
    let mid = Math.floor(low + (high - low) / 2);

    let left = mergeSort1(arr1, low, mid)
    let right = mergeSort1(arr1, mid + 1, high);

    //merging of returned arrays
    let mergeArr = mergeSort(left, right);
    return mergeArr
}

let arr1 = [3, 7, 5, 9, 8, 4, 1, 2, 11]
console.log(mergeSort1(arr1, 0, arr1.length - 1))

//summary ->
// Divide and conquer approach
// T.C. -> O(N log N) [log N levels of recursion, each level takes O(N) time to merge]
// S.C. -> O(N) [extra space for merging]
// Stable sorting -> YES [equal elements maintain their relative order]
// Not in place sorting -> NO [requires extra space for merging]


// Insertion sort
let arra = [1, 4, 5]
let n = 3

for (let i = 0; i < arra.length; i++) {
    if (n > arr[i]) {
        arra.push(n)
        arra.sort()
    }
}