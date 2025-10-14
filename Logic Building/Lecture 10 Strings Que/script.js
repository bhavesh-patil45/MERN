// Q-> write A fuction
//1 convert this variable name to camal case
//2 convert this variable name to snake case
let str = "student first name"
function camalCase(str) {
    let ans = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            ans += str[i + 1].toUpperCase()
            i++;
        } else {
            ans += str[i]
        }
    }
    console.log(ans);
}
camalCase(str)
// timeC = O(n) , spaceC = O(n)

function snakeCase(str) {
    console.log(str.replaceAll(" ", "_"))
}
snakeCase(str)
// timeC = O(n) , spaceC = O(n)

// Q=> 2 reverse a string
const str = "bhavesh"
let rev = ""
function revString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }
    console.log(rev)
}
revString(str)

// Q => 3 check if a string is palindrome
const str = "madam"
function palinDrome(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            console.log("false");
            return;
        }
    }
    console.log("true")
}
palinDrome(str)

// Q 4 => find the length of word

const str = "madam"
function palinDrome(str) {
    let count = 0
    str.trim()
    for (let i = 0; i < str.length; i++) {
        count++
    }
    console.log(count)
}
palinDrome(str)

// Q 5 => find the longest word
const str = "now we learn programming"
function longWorld(str) {
    let arr = str.trim().split(" ")
    let max = arr[0]
    let count = 0
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].length > max.length) {
            max = arr[i]
        }

    }
    console.log(max)
}
longWorld(str)

// Q 6 find first non repating char

const str1 = "abcahbcded"
function nonRepating(str1) {
    //    str1= str1.split("")   
    for (let char of str1) {
        if (str1.indexOf(char) === str1.lastIndexOf(char))
            return char

    }
}
console.log(nonRepating(str1))