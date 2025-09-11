// WAF to find the sum of n natural number

function Sum(n) {
    if (n <= 0) {
        return 0
    }
    return n + Sum(n - 1)

}
console.log(Sum(5))

// print GCD of two numbers
// GCD(8,32) = 8
// GCD (0,20) = 20

let a = 15, b = 25

while (a != 0) {
    let temp = a
    a = b % a
    b = temp
}
console.log(b)

// recursive GCD

function rGCD(a, b) { // this function also handle case when a>b
    if (a == 0) return b

    return rGCD(b % a, a)
}
console.log(rGCD(15, 25))

//GCD of arrays/ more than 2 numbers

/* gcd(a,b,c) = gcd(gcd(a,b),c) = gcd(a,gcd(b,c)) = gcd(b,gcd(a,c))
*/
let arr = [27, 12, 18, 24, 30]
let gcdArr = 0

for (let i = 0; i < arr.length; i++) {
    gcdArr = rGCD(gcdArr, arr[i])
}
function rGCD(a, b) { // this function also handle case when a>b
    if (a == 0) return b

    return rGCD(b % a, a)
}
console.log(gcdArr)

//WAF to cal power
function power(a, b) {
    let Result = 1
    for (let i = 1; i < b; i++) {
        Result *= a
    }
}
console.log(power(2, 10))

function binaryExponatition(a, n) {
    if (n == 0) return 1
    if (n == 1) return a;
    let temp = binaryExponatition(a, Math.floor(n / 2));
    return temp * temp * a ** (n % 2);
}
console.log(binaryExponatition(2, 10))