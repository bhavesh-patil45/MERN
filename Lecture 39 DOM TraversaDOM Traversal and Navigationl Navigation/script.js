console.log(Math.random()); // this random() method gives a random value between [0,1)

//generating a 6 digit otp, not starting from 0 (i.e., 012345, 000012 are invalid)
console.log(100000 + Math.random() * 900000);
//H.W. try to find the minimum and max value for above expression

//getting the parent of an element
const child = document.querySelector(".child");
console.log(child.parentElement);

const parent = document.querySelector(".parent");
console.log(parent.parentElement);

const grandParent = document.querySelector(".grand-parent");
console.log(grandParent.parentElement);

//getting the parent of body, which is html
console.log(document.body.parentElement);

//getting the parent of html, which is null
console.log(document.body.parentElement.parentElement);

//closest() -> searches the selector from current node to all ancestors till root node
console.log(child.closest(".parent")); // gives the node of parent

console.log(child.closest("div")); // gives itself

//finding the parent of .child whose parent is <body> and adding class="accio" to it
let element = child;
while (element.parentElement !== document.body) {
    element = element.parentElement;
}
element.classList.add("accio");
console.log(element);

console.log(element.tagName, element.parentElement.tagName);

//childNodes & children
const parent2 = document.querySelector(".parent2");
console.log(parent2.childNodes); //always know this to understand why children is preferred
console.log(parent2.children); //always prefer this

console.log(parent2.firstElementChild);
console.log(parent2.lastElementChild);

//accessing second child
console.log(parent2.children[1]);

//adding a class="accio" in the first child of <body>
document.body.children[0].classList.add("accio");

//iterating through all the children
for (let child of parent2.children) {
    console.log(child.className);
}

//siblings
const secondChild = parent2.children[1];
console.log("prev sibling: ", secondChild.previousElementSibling); // getting previous sibling
console.log("next sibling: ", secondChild.nextElementSibling); // getting next sibling

//printing all the siblings of secondChild
console.log(
    [...secondChild.parentElement.children].filter(
        (child) => child != secondChild
    )
);

//excercise: when user clicks button.delete, div.card element should be removed
const deleteBtn = document.querySelector(".delete");

deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();

    deleteBtn.closest(".card").remove();
});