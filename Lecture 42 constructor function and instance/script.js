const user1 = {
    name: "Bhavesh",
    age: 23,
    city: "Pune",
    printDetails: function () {
        console.log(
            `${this.name} is ${this.age} years old and cureently living in ${this.city}`
        );

    },
};
const user2 = {
    name: "Pratik",
    age: 24,
    city: "Pune",
    printDetails: function () {
        console.log(
            `${this.name} is ${this.age} years old and cureently living in ${this.city}`
        );

    },
}; const user3 = {
    name: "yash",
    age: 22,
    city: "Pune",
    printDetails: function () {
        console.log(
            `${this.name} is ${this.age} years old and cureently living in ${this.city}`
        );

    },
};
// It is like a blueprint for creating objects.

// Instead of writing the same properties and methods again and again,

// we write a single blueprint

// and reuse it to create multiple objects with similar structure.

// This makes the code reusable
// we use constructor for reduce the line of code and save the memory
//constructor
function User(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.printDetails = function () {
        console.log(`${this.name} is living in ${this.city}`);

    };
}


// when we use new it creates the new object
// initially this points to window obj(global object) but when we use new then
// this keyword get binds to the empty object that we created using new
// i.e this->{}
// and this.name="Devanshu" means addind name prop in object with value devanshu
// same as object {name:Devanshu}

const user4 = new User("Dev", 33, "Mumbai");

// conventional / traditional way of using objects
console.log(user1.printDetails());
console.log(user1.name);

//using obj created from constructor
console.log(user4.printDetails());

function normalFunction() {
    console.log(this); //by default functions has global obj stored in `this`

}
console.log(normalFunction());


//creating an array of objects using constructor
const names = ["Raj", "Shivam", "Pratik", "Priya"];
const age = [12, 32, 10, 13];
const city = ["Mumbai", "Delhi", "Pune", "Bangalore"];

const objArray = [];

for (let i = 0; i < names.length; i++) {
    objArray.push(new User(names[i], age[i], city[i]));
}
console.log({ objArray });


function Product(name, price, qty) {
    console.log(this);

    this.name = name;
    this.price = price;
    this.qty = qty;
    this.total = qty * price;

}

const Product1 = new Product("Bottle", 10, 50);
const Product2 = new Product("Pen", 40, 50);

console.log(Product1, Product2);

//ProtoTypes
const boolean = true;
const string = "true";
const number = 12344;
const arr = [2, 23, 56];

console.log(boolean.__proto__);
console.log(string.__proto__);
console.log(number.__proto__);
console.log(arr.__proto__);


function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}
Student.prototype.greetMe = function (name) {
    console.log("Hi " + this.name);
};

const Student1 = new Student("raj", 20, 9);
Student1.greetMe(Student1.name)


//find the o/p
function Test() {
    this.value = 10;
}
Test.prototype.value = 100;
const testInstance = new Test();

console.log(testInstance.value); // 10 -> first it will search value inside its own "test" object, so it prints 10 as it's found in "test"
delete testInstance.value; //deleting the value property from test object
console.log(testInstance.value); // 100 --> since the "test" object does not have any "value" property, it'll now look in prototype of Test, it's found there, so it prints its value i.e., 100

//mixing up constructor and prototypes
// creating a task queue, that will add, remove and display all tasks
function TaskQueue() {
    this.tasks = [];
}

//adding the new task to end of the queue
TaskQueue.prototype.add = function (taskName) {
    this.tasks.push(taskName);
};

//removing the first task
TaskQueue.prototype.remove = function () {
    this.tasks.shift();
};

//displaying all tasks
TaskQueue.prototype.display = function () {
    console.log(this.tasks.join(", "));
};

const task1 = new TaskQueue();
task1.add("Task1");
task1.add("Task2");
task1.remove();
task1.add("Task3");
task1.add("Task4");
task1.display();
task1.remove();
task1.display();
