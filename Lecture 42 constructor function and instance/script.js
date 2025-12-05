// const user1 = {
//     name: "Bhavesh",
//     age: 23,
//     city: "Pune",
//     printDetails: function () {
//         console.log(
//             `${this.name} is ${this.age} years old and cureently living in ${this.city}`
//         );

//     },
// };
// const user2 = {
//     name: "Pratik",
//     age: 24,
//     city: "Pune",
//     printDetails: function () {
//         console.log(
//             `${this.name} is ${this.age} years old and cureently living in ${this.city}`
//         );

//     },
// }; const user3 = {
//     name: "yash",
//     age: 22,
//     city: "Pune",
//     printDetails: function () {
//         console.log(
//             `${this.name} is ${this.age} years old and cureently living in ${this.city}`
//         );

//     },
// };
// // It is like a blueprint for creating objects.

// // Instead of writing the same properties and methods again and again,

// // we write a single blueprint

// // and reuse it to create multiple objects with similar structure.

// // This makes the code reusable
// // we use constructor for reduce the line of code and save the memory

// //constructor
// function User(name, age, city) {
//     this.name = name;  
//     this.age = age;
//     this.city = city;
//     this.printDetails = function () {
//         console.log(`${this.name} is living in ${this.city}`);

//     };
// }


// // when we use new it creates the new object
// // initially this points to window obj(global object) but when we use new then
// // this keyword get binds to the empty object that we created using new
// // i.e this->{}
// // and this.name="Devanshu" means addind name prop in object with value devanshu
// // same as object {name:Devanshu}

// const user4 = new User("Dev", 33, "Mumbai");

// // conventional / traditional way of using objects
// console.log(user1.printDetails());
// console.log(user1.name);

// //using obj created from constructor
// console.log(user4.printDetails());

// function normalFunction() {
//     console.log(this); //by default functions has global obj stored in `this`

// }
// console.log(normalFunction());


// //creating an array of objects using constructor
// const names = ["Raj", "Shivam", "Pratik", "Priya"];
// const age = [12, 32, 10, 13];
// const city = ["Mumbai", "Delhi", "Pune", "Bangalore"];

// const objArray = [];

// for (let i = 0; i < names.length; i++) {
//     objArray.push(new User(names[i], age[i], city[i]));
// }
// console.log({ objArray });


// function Product(name, price, qty) {
//     console.log(this);

//     this.name = name;
//     this.price = price;
//     this.qty = qty;
//     this.total = qty * price;

// }

// const Product1 = new Product("Bottle", 10, 50);
// const Product2 = new Product("Pen", 40, 50);

// console.log(Product1, Product2);

// //ProtoTypes
// const boolean = true;
// const string = "true";
// const number = 12344;
// const arr = [2, 23, 56];

// console.log(boolean.__proto__);
// console.log(string.__proto__);
// console.log(number.__proto__);
// console.log(arr.__proto__);


// function Student(name, age, grade) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
// }
// Student.prototype.greetMe = function (name) {
//     console.log("Hi " + this.name);
// };

// const Student1 = new Student("raj", 20, 9);
// Student1.greetMe(Student1.name)


// //find the o/p
// function Test() {
//     this.value = 10;
// }
// Test.prototype.value = 100;
// const testInstance = new Test();

// console.log(testInstance.value); // 10 -> first it will search value inside its own "test" object, so it prints 10 as it's found in "test"
// delete testInstance.value; //deleting the value property from test object
// console.log(testInstance.value); // 100 --> since the "test" object does not have any "value" property, it'll now look in prototype of Test, it's found there, so it prints its value i.e., 100

// //mixing up constructor and prototypes
// // creating a task queue, that will add, remove and display all tasks
// function TaskQueue() {
//     this.tasks = [];
// }

// //adding the new task to end of the queue
// TaskQueue.prototype.add = function (taskName) {
//     this.tasks.push(taskName);
// };

// //removing the first task
// TaskQueue.prototype.remove = function () {
//     this.tasks.shift();
// };

// //displaying all tasks
// TaskQueue.prototype.display = function () {
//     console.log(this.tasks.join(", "));
// };

// const task1 = new TaskQueue();
// task1.add("Task1");
// task1.add("Task2");
// task1.remove();
// task1.add("Task3");
// task1.add("Task4");
// task1.display();
// task1.remove();
// task1.display();


// function car(name, model, speed) {
//     this.name = name;
//     this.model = model;
//     this.speed = 0;
// }
// car.prototype.isRunning = function () {
//     this.speed > 0 ? console.log("car is running") : console.log("car is not running");
// }
// car.prototype.changeSpeed = function (newSpeed) {
//     this.speed = newSpeed;
// };

// const car1 = new car("BMW", "X5", 200);
// car1.isRunning();
// car1.changeSpeed(250);
// car1.isRunning();

// car.prototype.printDetails = function () {
//     console.log(`${this.name} of model ${this.model} is running at speed ${this.speed}`);
// }
// car1.printDetails();

// class car {
//     constructor(name, model) {
//         this.name = name;
//         this.model = model;
//         this.speed = 0;
//     }
//     changeSpeed(newSpeed) {
//         this.speed = newSpeed;
//     }
//     isRunning() {
//         this.speed > 0 ? console.log("Running") : console.log("Not Running!");
//     }
// }

// const BMW = new car("BMW", "CR-123")
// console.log({ BMW });

// BMW.isRunning();
// summry :
// 1. Constructor function is a blueprint for creating multiple objects with similar structure.
// 2. The 'this' keyword inside a constructor function refers to the newly created object when called with 'new'.
// 3. Prototypes allow sharing methods and properties across all instances of a constructor, saving memory.
// 4. ES6 classes provide a cleaner syntax for creating constructor functions and managing prototypes.
// about classes : 
// 1. Classes are syntactical sugar over constructor functions and prototypes in JavaScript.
// 2. They provide a cleaner and more intuitive syntax for creating objects and handling inheritance.
// 3. Classes support constructors, methods, and inheritance through the 'extends' keyword.
// 4. Methods defined in a class are added to the prototype of the instances, promoting memory efficiency.

//what is prototype ?
// Prototype is a mechanism by which JavaScript objects inherit features from one another.
// Every JavaScript object has a prototype. A prototype is also an object.
// All JavaScript objects inherit their properties and methods from their prototype.

//whta is constructor?
// A constructor is a special function that is used to create and initialize objects.
// When a constructor function is called with the 'new' keyword, it creates a new object and sets the 'this' keyword to refer to that object.       

//this keyword?
// The 'this' keyword in JavaScript refers to the object that is executing the current function.
// In a method, 'this' refers to the owner object.
// Alone, 'this' refers to the global object (in non-strict mode) or undefined (in strict mode).
// In a constructor, 'this' refers to the newly created object.

//new keyword?
// The 'new' keyword in JavaScript is used to create an instance of a user-defined object type or of one of the built-in object types.
// When a function is invoked with 'new', it creates a new empty object, sets the prototype of that object to the constructor's prototype, and binds 'this' to the new object.

class AttendanceLogger {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
        this.persent = 0;
        this.totalDays = 0;
    }
    markPersent() {
        this.persent++;
        this.totalDays++;

    }
    markAbsend() {
        this.totalDays++
    }
    printAttendance() {
        const { persent, totalDays } = this;
        console.log(`Attendance percentage of ${this.name} is ${(persent / totalDays * 100).toFixed(2)}`);

    }
}

const att = new AttendanceLogger('raju', 10);
att.markPersent();
att.markPersent();
att.markPersent();

att.markAbsend()
att.markAbsend()
att.printAttendance();

// getters and setters in class
class student {
    constructor(id, name, dob, grade) {
        this.id = id;
        this.name = name;
        this._dob = dob;
        this.grade = grade;
        this.marks = 0;
    }
    //getter is used to get the value of a property if the name is same then its called itself and go for recursion so we use _ before the property name

    get dob() {
        return this._dob;
    }

    //setter is used to set the value of a property, they are used to validate the data before setting the value

    set marks(newMarks) {
        this._marks = newMarks;
    }
    get marks() {
        return this._marks;
    }
}

const Bhavesh = new student({
    id: "ST-1234",
    name: "Bhavesh",
    dob: "01-01-2000",
    grade: 12,
});
console.log(Bhavesh);
console.log(Bhavesh.dob); //getter called

Bhavesh.marks = 95; //setter called
console.log(Bhavesh.marks); //getter called


//static methods in class
class User {
    constructor(username, role) {
        this.username = username;
        this.role = role;
    }
    static guest() {
        return new User("Guest", "Guest");
    }
}
const guestUser = User.guest();
console.log(guestUser);
//static method is called on the class itself not on the instance of the class
//static method is used to create utility functions that are not related to the instance of the class
//static method is used to create factory methods that create instances of the class with predefined values
//static method cannot access instance properties and methods
//static method can access other static methods and properties
//summary of classes:
//1. Classes are a syntactical sugar over constructor functions and prototypes in JavaScript.
//2. They provide a cleaner and more intuitive syntax for creating objects and handling inheritance.
//3. Classes support constructors, methods, and inheritance through the 'extends' keyword.
//4. Methods defined in a class are added to the prototype of the instances, promoting memory efficiency.
//5. Getters and setters allow controlled access to object properties.
//6. Static methods are called on the class itself and are useful for utility functions and factory methods.

// private properties and methods in class
class BankAccount {
    #pin = 1234; //private property
    constructor(firstPin) {
        this.#pin = firstPin;
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
    }

    withdraw(userpin, amount) {
        return userpin === this.#pin ? this.balance >= amount ? (this.balance -= amount, amount) : "Insufficient balance" : "Invalid PIN";
    }
    checkBalance() {
        return this.balance;
    }

}
const myAccount = new BankAccount(4567);
myAccount.deposit(1000);
console.log(myAccount.checkBalance());
console.log(myAccount.withdraw(4567, 500));

// private properties and methods are only accessible within the class they are defined in
// they cannot be accessed from outside the class or from subclasses
// they are useful for encapsulating sensitive data and implementation details
// they help in maintaining the integrity of the object's state by preventing unauthorized access

