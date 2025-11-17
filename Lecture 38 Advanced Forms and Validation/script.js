const submitBtm = document.querySelector("button");

submitBtm.addEventListener("click", () => {

    // Checkbox values (your original line was doing nothing)
    const checkboxes = Array.from(
        document.querySelectorAll("[type=checkbox]:checked")
    ).map(cb => cb.value);

    const inputs = {}; // you were misusing <input> element, so use an object

    // Correct selectors
    const data = document.querySelector("[type=date]")?.value;
    const time = document.querySelector("[type=time]")?.value;

    // Store date & time
    inputs.date = data;
    inputs.time = time;

    // Radio 1
    inputs.radiobutton1 = document.querySelector("[name=mcq]:checked")?.value;

    // Radio 2
    inputs.radiobutton2 = document.querySelector("[name=mcq2]:checked")?.value;

    // Single select
    inputs.selectedOption = document.querySelector("select")?.value;

    // Multi-select values
    const multipleSelectOptions = document.querySelector("[multiple]")?.options;

    inputs.multipleSelectOptions = Array.from(multipleSelectOptions)
        .filter(opt => opt.selected)
        .map(opt => opt.value);

    // Add checkbox data
    inputs.checkboxes = checkboxes;

    console.log(inputs);
});
