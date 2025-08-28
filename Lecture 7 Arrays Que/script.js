function maxSubarrSum(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            if (sum > max) max = sum
        }
    }
    console.log(max)
}
maxSubarrSum([-1, 4, -3, -5, 5, 4])

// count the no of sub arr whose sum is k//

function maxSubarrSum(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            if (sum == k) {
                count++;
            }
        }
    }
    console.log({ count })
}
maxSubarrSum([1, 2, -3, 0, 1, -1, 1], 0)
//TC = O(n) SC = O(1)

//given sum k , find the longest length of subarrays whose sum is k
function maxSubarrSum(arr, k) {
    let length = 0
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            if (sum == k) {

                if (length < j - i + 1) length = j - i + 1
            }
        }
    }
    console.log({ length })
}
maxSubarrSum([1, 2, -3, 0, 1, -1, 1], 0)

// TC = O(n^2)
// SC = O(1)