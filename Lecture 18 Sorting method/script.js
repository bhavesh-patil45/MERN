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
// Used in external sorting (large data that doesn't fit in memory)


// Insertion sort

function insertInSortedArray(arr) {
    let n = arr.length
    let lastElement = arr[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > lastElement) {
            arr[i + 1] = arr[i]
        } else {
            arr[i + 1] = lastElement
        }
    }
    return arr
}
let arr = [1, 2, 7, 9, 6];
console.log(insertInSortedArray(arr))

//***************************************************************************** */
function insertionSort(arr) {
    let ind = 0
    for (let i = 1; i < arr.length; i++) {
        let firstElementofSortedPart = arr[i];
        let indexToInsert = 0
        for (let j = ind; j >= 0; j--) {
            if (arr[j] > firstElementofSortedPart) {
                arr[j + 1] = arr[j]
            } else {
                indexToInsert = j + 1
                break;
            }
        }
        arr[indexToInsert] = firstElementofSortedPart
        ind++
    }
    return arr
}
arr = [4, 6, 9, 5, 4, 1, 2]
console.log("sorted array using insertion sort:", insertInSortedArray(arr).join(" "));

//summary ->
// IN ONE PASS -> take first element of unsorted part and insert it in sorted part at correct position
// AFTER first pass the first two elements will be sorted
// after each pass one element will be placed in its correct sorted position
// Optimization: no major optimization like bubble sort, always takes O(N^2)


//Quick Sort
/* 
given an array, place its last element at a position
such that all smaller elements are in left and all greater element are in right

input = [2,1,7,5,4]
output = [1,2,4,7,5]
*/

let arr = [2, 7, 1, 5, 4]
function quickSort(arr) {
    let element = arr[arr.length - 1]
    let a = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= element) {
            //console.log(arr[i])
            [arr[a], arr[i]] = [arr[i], arr[a]]
            a++
        }
    }
    return arr;
}
console.log(quickSort(arr))

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}
arr = [3, 1, 6, 2, 8, 7, 4]
// place the pivot element at its correct position
let pivotIndex = partition(arr, 0, arr.length - 1);
console.log("Pivot element is at index:", pivotIndex);
console.log("Array after partitioning around pivot:", arr);

function quickSortRecursive(arr, low, high) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        quickSortRecursive(arr, low, pivotIndex - 1);
        quickSortRecursive(arr, pivotIndex + 1, high);
    }
    return arr;
}

/* sort() method in JS */

arr = [3, 1, 6, 2, 8, 7, 4];
// arr.sort(); //sorts in ascending order
// arr.sort().reverse(); // sorts in descending order

//also sorts in ascending order
arr.sort((a, b) => a - b);
// console.log({ arr });

//also sorts in descending order
arr.sort((a, b) => b - a);
console.log({ arr });

arr = ["apple", "watermelon", "kiwi"];
arr.sort();
console.log(arr);

//H.W. explore localeCompare() method for strings comparison

let students = [
    { name: "Kiran", age: 20, rollNum: 10 },
    {
        name: "Ramesh",
        age: 20,
        rollNum: 7,
    },
    { name: "Suresh", age: 24, rollNum: 12 },
];

students.sort((a, b) => {
    if (a.age == b.age) return b.rollNum - a.rollNum;
    return a.age - b.age;
});
console.log(students);

const nestedArr = [
    [1, 3],
    [2, 1],
    [1, 2],
    [2, 4],
];

nestedArr.sort((a, b) =>
    a[0] - b[0]);
console.log({ nestedArr });

/* H.w: sort the above array according to first value and then according to second value 
output should be: 
[
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 4],
]
  nestedArr.sort((a, b) =>{
    if(a[0] == b[0]) return a[1] - b[1]
    return a[0] - b[0];
});
console.log({ nestedArr });
*/