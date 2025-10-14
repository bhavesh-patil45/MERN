// valid parenthesis que

function parenthesis(input) {
    let count = 0
    input = input.split("")
    for (let i = 0; i < input.length; i++) {

        if (input[i] === "(") {
            count++
        } else if (input[i] === ")") {
            count--
            if (count < 0) {
                return "Invalid"
            }
        }
    }
    if (count == 0) {
        return "valid"
    } else {
        return "Invalid"
    }
}
console.log(parenthesis("((()(())()))"))

// parenthesis by recursion

/* time complexity = O(2!)
*/
let parenthesis = []
function validParenthesis(n, str = "", ind = 0, open = 0, close = 0) {
    if (open < close) {
        return;
    }
    if (ind == n) {
        if (open == close) {
            parenthesis.push(str)
        }
        return;
    }


    validParenthesis(n, str + "(", ind + 1, open + 1, close)
    validParenthesis(n, str + ")", ind + 1, open, close + 1)

    return parenthesis
}

console.log(validParenthesis(4))
console.log(validParenthesis(6))
console.log(validParenthesis(8))

// swapping two indices in string

function swapStr(str, i, j) {
    let arr = str.split("");
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr.join("");
}
let strPermutations = []
function permutations(str, ind = 0) {
    if (ind == str.length - 1) {
        strPermutations.push(str);
        return;
    }
    for (let i = ind; i < str.length; i++) {
        str = swapStr(str, ind, i)
        permutations(str, ind + 1)
        str = swapStr(str, ind, i)

    }
}
permutations("abc")
console.log(strPermutations)
