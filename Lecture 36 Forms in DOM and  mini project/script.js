let outerDiv = document.querySelector('.outer');
let innerDiv = document.querySelector('.inner');
let heading = document.querySelector('h1');

outerDiv.addEventListener('click', () => {
    outerDiv.style.backgroundColor = "yellow"
    console.log("Outer Div clicked");

}, true);

innerDiv.addEventListener('click', (event) => {
    innerDiv.style.backgroundColor = "red"
    console.log("Inner Div clicked");

}, true)

heading.addEventListener('click', () => {
    heading.style.backgroundColor = "blue"
    console.log("Heading clicked");
}, true)
