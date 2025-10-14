//Maximum Subarray Sum (Kadane’s Algorithm)
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

let max = arr[0]
let sub = []

for (let i = 0; i < arr.length; i++) {
    let sum = 0
    let temp = []
    for (let j = i; j < arr.length; j++) {
        sum += arr[j]
        temp.push(arr[j])
        if (sum > max) {
            max = sum
            sub = [...temp]
        }

    }
}
console.log(max)
console.log(sub)

//Output: 6 (subarray [4, -1, 2, 1])

//2. Count Subarrays with Given Sum (k)
arr = [1, 1, 1], k = 2

k = 2

let count = 0;
let sub = []

for (let i = 0; i < arr.length; i++) {
    let sum = 0
    let temp = []
    for (let j = i; j < arr.length; j++) {
        sum += arr[j]
        temp.push(arr[j])
        if (sum == k) {
            count++
            sub = [...temp];

        }
    }
}
console.log(count)
console.log(sub)

//Output: 2 (subarrays [1,1] from index 0–1 and 1–2)

// 3 print all subarrays 
arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++) {
    let temp = []
    for (let j = i; j < arr.length; j++) {
        temp.push(arr[j])
        console.log(temp)
    }
}

// 4. Largest Subarray with 0 Sum

arr = [15, -2, 2, -8, 1, 7, 10, 23]
let k = 0;
let length = 0
let sub = []
for (let i = 0; i < arr.length; i++) {
    let sum = 0
    let temp = []
    for (let j = i; j < arr.length; j++) {
        sum += arr[j]
        temp.push(arr[j])
        if (sum == k) {
            if (length < j - i + 1) {
                length = j - i + 1
                sub = [...temp]
            }
        }
    }
}
console.log({ length })
console.log({ sub })

//
