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


// WAF to print all substring of size  =k
function maxSubarrSum(arr, k) {
    for (let i = 0; i <= arr.length - k; i++) {
        let subS = []
        for (let j = i; j < arr.length; j++) {
            subS.push(arr[j])
            if (subS.length == k)
                break;
        }
        console.log(subS)
    }
}
maxSubarrSum([1, 2, -3, 0, 1, -1, 1], 2)


//////////////////////////////////////////////////////////////////////////////////////


/* Print sum of each subarray */
function printSubarraySum(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let subarraySum = 0;
        for (let j = i; j < n; j++) {
            subarraySum += arr[j];
            console.log("Sum of subarray from", i, "to", j, "is", subarraySum);
        }
    }
}
const arr = [1, 2, 3, 4];
printSubarraySum(arr);

/* Function to calculate the maximum sum among all subarrays */
function maxSubarraySum(arr) {
    let maxSum = arr[0]; //can be -Infinity also
    let n = arr.length;
    let startIndex = 0,
        endIndex = n - 1;

    for (let i = 0; i < n; i++) {
        let subarraySum = 0;
        for (let j = i; j < n; j++) {
            subarraySum += arr[j];
            if (maxSum < subarraySum) {
                maxSum = subarraySum;
                startIndex = i;
                endIndex = j;
            }
            //can be done this way also --> maxSum = Math.max(maxSum, subarraySum);
        }
    }
    console.log(
        "Maximum Subarray sum from",
        startIndex,
        "to",
        endIndex,
        "is:",
        maxSum
    );
    // return maxSum;
}
const arr1 = [-1, 5, -3, 2, -1, 3];
maxSubarraySum(arr1);

/* count the number of subarrays whose sum is K */
const arr2 = [1, 2, -3, 0, 1, -1, 1]; //K=0 --> o/p = 9

function countSubarraySumWithK(arr, k) {
    let count = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];
            if (sum === k) count++;
        }
    }

    return count;
}

console.log(countSubarraySumWithK(arr2, 0));

/* Function to find the largest subarray with sum = K */
function largestSubarrayWithSumK(arr, k) {
    let length = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];
            if (sum === k) {
                length = Math.max(length, j - i + 1);
            }
        }
    }

    return length;
}

console.log(largestSubarrayWithSumK(arr2, 0));

/* Function to print all subarrays of size K */
function allSubarraysOfSizeK(arr, k) {
    let n = arr.length;
    const subArrOfSizeK = [];

    for (let i = 0; i + k <= n; i++) {
        let subArr = "";
        /* Method 1  
        for(let j = i; j < n; j++){
          subArr += arr[j] + " ";
          if(subArr.length === k)
            break;
        }
        console.log(subArr); 
        */

        //Method 2
        for (let j = i; j < i + k; j++) {
            subArr += arr[j] + " ";
        }

        subArrOfSizeK.push(subArr);

        //Method 3
        //Only 1 liner code: subArrOfSizeK.push(arr.slice(i, i+k));
    }

    return subArrOfSizeK;
}
//TC -> O(n*n)
//SC -> O(1)

console.log(allSubarraysOfSizeK(arr2, 3));

// remove duplicate
let arr = [1, 2, 3, 4, 5, 3, 2, 1]
let ans = []
for (let i = 0; i < arr.length; i++) {
    if (!ans.includes(arr[i])) {
        ans.push(arr[i])
    }
}
console.log(arr);
