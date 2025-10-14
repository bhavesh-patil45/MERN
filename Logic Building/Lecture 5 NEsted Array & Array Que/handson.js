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

// Function version
function sumSubarrays(arr3) {
    let size = arr3.length;
    let sum1 = 0;

    for (let i = 0; i < size; i++) {
        let demo = 0;
        for (let j = i; j < size; j++) {
            demo += arr3[j];
            sum1 += demo;
        }
    }
    console.log("Total sum of subarrays (method 2):", sum1);
}

sumSubarrays([1, 2, 3, 4]);