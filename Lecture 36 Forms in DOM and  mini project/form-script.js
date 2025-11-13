const users = [];

const submitBtn = document.querySelector("button");
const form = document.querySelector("form");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const user = {};
    user.name = document.querySelector("input[type=text]").value;
    user.mobile = document.querySelector('input[type="number"]').value;
    user.gender = document.querySelector("input[name=gender]:checked")?.value;
    user.isTncAgreed = document.querySelector("input[type=checkbox]")?.checked;
    user.city = document.querySelector("#city")?.value;

    // if (
    //     !user.name ||
    //     !user.mobile ||
    //     !user.gender ||
    //     !user.isTncAgreed ||
    //     !user.city
    // )
    //     alert("Please fill out all the fields");
    users.push(user);
    form.reset();
    console.log(users);
});