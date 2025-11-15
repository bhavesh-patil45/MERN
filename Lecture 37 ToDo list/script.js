const addBtn = document.querySelector(".add-btn");
const todoItemsSection = document.querySelector("#todo-items");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const todoElement = document.querySelector("#todo");
    const todoValue = todoElement.value.trim();

    // Prevent empty todo
    if (!todoValue) {
        alert("Please enter a todo!");
        return;
    }

    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    todoItem.innerHTML = `
        <p>${todoValue}</p>
        <div class="todo-buttons">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    todoItemsSection.appendChild(todoItem);

    // DELETE BUTTON
    const deleteBtn = todoItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        todoItem.remove();
    });

    // EDIT / SAVE BUTTON
    const editBtn = todoItem.querySelector(".edit-btn");

    editBtn.addEventListener("click", () => {
        const pElement = todoItem.querySelector("p");

        if (editBtn.textContent === "Edit") {
            // Change to Save mode
            editBtn.textContent = "Save";
            pElement.style.display = "none";

            const inputField = document.createElement("input");
            inputField.value = pElement.textContent.trim();
            inputField.className = "edit-input";

            todoItem.insertBefore(inputField, todoItem.querySelector(".todo-buttons"));
        } 
        else {
            // Save mode
            const inputField = todoItem.querySelector(".edit-input");
            const newValue = inputField.value.trim();

            if (newValue) {
                pElement.textContent = newValue;
            }

            inputField.remove();
            pElement.style.display = "block";
            editBtn.textContent = "Edit";
        }
    });

    // Clear input box
    todoElement.value = "";
});
