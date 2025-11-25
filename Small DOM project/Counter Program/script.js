const decreaseBtn = document.querySelector(".decrease-btn")
const increaseBtn = document.querySelector(".increase-btn")
const resetBtn = document.querySelector(".reset-btn")
const counter = document.querySelector("#count-lable")

let count = 0

decreaseBtn.addEventListener("click", (e) => {
    count--;
    counter.textContent = count
});
increaseBtn.addEventListener("click", (e) => {
    count++;
    counter.textContent = count;
})

resetBtn.addEventListener("click", (e) => {
    count = 0
    counter.textContent = count;
})