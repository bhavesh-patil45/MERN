// // creating an element
// const h3Element = document.createElement("h3")
// h3Element.textContent = "Hi, im a h3 eklement"

// const div1 = document.querySelector("div");
// div1.appendChild(h3Element);


// const h3Element1 = document.querySelector("h3")

// //event in DOM
// //click event

// const para1 = document.querySelector("p");
// para1.addEventListener("click", (event) => {
//     // console.log("You have clicked");
//     para1clicked(event)
// })

// function para1clicked(event) {
//     h3Element1.remove()
//     console.log("you have click", event.type);
// }

let h3ele = document.querySelector("h3");

h3ele.addEventListener("mousedown", (event) => {
    h3ele.style.backgroundColor = "yellow";
});

h3ele.addEventListener("mouseup", (event) => {
    h3ele.style.backgroundColor = "";
});


