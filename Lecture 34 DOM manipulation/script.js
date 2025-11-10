// console.log(window.document);
// console.log(document.body);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.querySelector("div"))
// console.log(document.querySelectorAll(".first-div-child"));
// console.log(document.querySelector("div.first-div"));

// // it will select the first div or all div

// // select name based on class name
// console.log(document.getElementsByClassName("first-div-child"));
// console.log(document.getElementById("second-div"));
// console.log(document.getElementsByTagName("div")); console.log(window.document);
// console.log(document.body);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.querySelector("div"))
// console.log(document.querySelectorAll(".first-div-child"));
// console.log(document.querySelector("div.first-div"));

// // it will select the first div or all div

// // select name based on class name
// console.log(document.getElementsByClassName("first-div-child"));
// console.log(document.getElementById("second-div"));
// console.log(document.getElementsByTagName("div"));

const para = document.querySelector("p");
console.log(para);
para.style.backgroundColor = "blue";
para.style.color = "white";

// const imageElement = document.querySelector("img")
// imageElement.setAttribute("src", "sky.jpg")

// const divElement = document.querySelector("p")
// divElement.setAttribute("data-number", "123")

// // deleting an attribute, by setting its value to null
// imageElement.setAttribute("data-price", null)

console.log(para.innerHTML);

para.innerHTML = `<strong>${para.textContent}</strong>`
const secondPara = document.querySelector(".second-para")

//className property

const sectionElement = document.querySelector(".class1");
let classes = sectionElement.className.split(" ");
classes.splice(2, 1)
sectionElement.className = classes.join(" ")

//class list
const sectionElementCopy = document.querySelector(".class1")
console.log(sectionElementCopy.classList);
sectionElementCopy.classList.add("class5")
sectionElementCopy.classList.toggle("class4")
sectionElementCopy.classList.contains("class6")
console.log(sectionElementCopy.classList);

//write diff betw classList and className
//textContent and innerHTML diff