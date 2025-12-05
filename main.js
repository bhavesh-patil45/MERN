// let a=10;

// function outer(){
//     let b=20;
// function inner(){
//     let c=30;
//     console.log(a,b,c);
// }
// inner();
// }
// outer();

// first it looks for c in inner func then b in outer then a in global scope
// so it prints 10 20 30
// in nested functions have access their own scope as well as outer scopes

////// Closure ///////

// closure is combination of the functions bundle of refrences to its surrounding state (lexical enviornment)
// closure are created every time when a function is created
function outer(){
    let counter=0;
    function inner(){
        counter++;
        console.log(counter);
    }
    inner();
}
outer()