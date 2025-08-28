

x = 10; //global variable
console.log(x)
let y = 5
const z = 12
var w = 15

{
    let y = 6
    console.log(y)
}

function sayHi() {
    for (let i = 0; i < x; i++) console.log("HI ", i)
}

sayHi();

// nested scopes
function nestedScopes() {
    let value = 145
    for (let i = 0; i < 5; i++) {
        if (i % 2 == 0) {
            let value2 = 35
            console.log(value, value2)
        }
    }
}

//nested arrays

const arr = [1, [2, 3, 4], 5, 6, [7, 8]];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === undefined) {
        console.log(arr[i])
    } else {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
        }
    }
} 
