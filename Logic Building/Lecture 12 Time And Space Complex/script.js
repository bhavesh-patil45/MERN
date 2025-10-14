//HW : Write a function to print all the palindromic susbstring of a string

//===============================Time Complexity===============================

/*
Js is only one language which is INTERPRETED + COMPILED (JIT-Just In Time Compilation)

AIS : Automatic Insertion of Semi-colon(;)  -->  (Included in JavaScript to predict where to put SemiColon (;) )

Time and Space complexity are approximation based only and not exact amount of time or space taken by the program

Time complexity neglects constants like (1,2,3,4,....)


For Loops :
O(N) is equivalent to O(K*N) -->  where K is constant, K is not Dependent on N     ----> Big Oh(O) not zero
O(N) is equal to O(2N), O(N+K), O(N+2K), O(N/2), O(N/K)


For Nested Loops :
Time Complexity = O(M*N)

Some types of Complexity

O(1) -> Constant
O(N) -> Linear
O(N*N) -> Quadratic
O(log N) -> Logarithmic
O(root N) -> No such Name

When there is division or multiplication the Time Complexity is in Logarithmic
*/


/*
Space Complexity --> Auxillary Space
*/

// const x =true && 45     //In chaining it takes first flase value or Last True Value
// const y = x == 45 && 34
// console.log({x,y})   -->   x = 45, y = 34

// const x =true && 45 && 32     //In chaining it takes first flase value or Last True Value
// const y = x == 45 && 34
// console.log({x,y})   -->   x = 45, y = False

/*
In jS, Only 6 values are considered as False
 0, false, null, undefined, NaN, Empty string

all other values are considered as true

*/


// const x = true && 45 && 32 && Number("AB*1");
// const y = x == NaN && 34

// console.log(Number("123"));      //String value
// console.log(String(123));        //Number value
// console.log(Boolean(NaN))       //Boolean Value


/*
For Logical And (&&) :-
    in Short circuiting, first falsy value or last truthy value will be the output

For Logical Or (||) :-
    in Short circuiting, first Truthy value or last falsy value will be the output

*/

// const x = true && 45 && 32 && NaN;      //NaN is always falsy which is not equal to any value of itself
// const y = x == NaN && 34                //Therefore, Here its considering the value falsy
// console.log({ x, y })



// =========================================Searching====================================================


//Create an array of 1 to 100 and search 57 and print its index
// let arr = [];
// for (let i = 0; i < 100; i++) {
//     arr.push(i + 1);
// }
// // console.log({ arr })
// for (let j = 0; j < arr.length; j++) {
//     if (arr[j] == 57) {
//         console.log(index of ${arr[j]} is ${j})
//     }
// }


//Find First and Last Index of 6
// let arr = [1, 2, 4, 4, 6, 6, 6, 8];
// let firstIndexof6 = -1;
// let lastIndexOf6 = -1;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 6) {
//         if (firstIndexof6 == -1)
//             firstIndexof6 = i;
//     }
//     lastIndexOf6 = i
// }
// console.log({ firstIndexof6, lastIndexOf6 })
//Tc : O(N)


//Optimized Solution

//Using Binary Search