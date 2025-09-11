/* Question find the frequency of each element in the arr */
let arr = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];

let map = new Map();

for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
        map.set(arr[i], map.get(arr[i]) + 1);
    } else {
        map.set(arr[i], 1);
    }
}

let obj = {};

console.log("Method 1 of Printing");
for (let key of map.keys()) console.log(key, map.get(key));

console.log("Method 2 of Printing");
for (let key of map.keys()) obj[`${key}`] = map.get(key);

console.log(obj);

console.log("Method 3 of Printing");
for (let [key, value] of map) console.log({ key, value });

/* About Rest operator and destructuring
const [a, ...b] = [1,2, 4, 5];
console.log({a, b}); */

/* Question: Remove Duplicates from an array and print the array */
arr = [1, 2, 3, 2, 3, 5, 1, 3, 2];
console.log([...new Set(arr)]);

/* Find the frequency of all words in a paragraph (only spaces, A-Z & a-z letters will be there) */
let paragraph =
    "Hello how are you How was your day Did you eat hoW did you find that";

let words = paragraph.trim().toLowerCase().split(" ");

let wordsMap = new Map();

for (let i = 0; i < words.length; i++) {
    wordsMap.set(words[i], (wordsMap.get(words[i]) || 0) + 1);
    /* OR THIS
    if(wordsMap.has(words[i])){
      wordsMap.set(words[i], wordsMap.get(words[i]) + 1);
    } else {
      wordsMap.set(words[i], 1);
    }
   */
}

let wordsFreq = {};

for (let [key, value] of wordsMap) wordsFreq[key] = value;

console.log(wordsFreq);

/* ============== Anagrams ============== */
/* 
when two words have same exact letters but order may change

listen
silent (✅)

mad
dam (✅)

asdsadd
ssaaddd (✅)


apple
aplee (Not anagrams)
*/

let a = "silent",
    b = "listen";

/* Create a map of silent, then traverse in listen and 
start decrementing the freq of each element if it exists in map */

/* TC - O(m+n) */
/* SC - O(26) ~ O(1) */
function isAnagram(a, b) {
    if (a.length != b.length) return false;

    let freqObj = {};

    for (let i = 0; i < a.length; i++) {
        freqObj[a[i]] = (freqObj[a[i]] || 0) + 1;
    }

    for (let i = 0; i < b.length; i++) {
        if (!freqObj[b[i]]) return false;
        freqObj[b[i]] = freqObj[b[i]] - 1;
    }

    for (let value of Object.values(freqObj)) if (value) return false;

    return true;
}

console.log(isAnagram(a, b));

/* ============== Recursion =============== */
/* Bahane dhundne h ki recursive function ko kese reuse kr sake */

/* 
TC - O(n), 
SC - O(1), however it uses call stack space, but this is not considered in Space complexity
 */

/* Two things to look for a correct recursive code

A. Base condition must always get hit
B. Combining return value of recursive function and current function
*/
function factorial(N) {
    // must have a base condition
    if (N == 0) return 1;

    let fact = N * factorial(N - 1);
    return fact;
}
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(6));

/*  Print numbers from 1 to N */

function print1toN(N) {
    if (N == 0) {
        return;
    }
    print1toN(N - 1);
    console.log(N);
}


/* Print numbers from N to 1 */

function printNto1(N) {
    if (N == 0) {
        return;
    }
    console.log(N);
    printNto1(N - 1);
}