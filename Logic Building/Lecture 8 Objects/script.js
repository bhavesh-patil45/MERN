
const studentObj = {
    name: "Piyush",
    age: 17,
    address: "pune",
    std: "12th",
};

const parentObj = {
    name: "Riya",
    age: 35,
    Address: "pune",
};

console.log("Student name", studentObj.name)

//update the properties

studentObj.name = "Bhavesh"
console.log("Student name", studentObj.name)


// add properties

parentObj.gender = "female"
parentObj.standard = "female"

console.log(parentObj)


// delete pro
delete parentObj.standard;
console.log(parentObj)

// create a person obj -> name , age , city  add hobby , update city

const personObj = {
    name: "Raj",
    age: 18,
    city: "pune"
}

personObj.hobby = "singing"
personObj.city = "Nagpur"

console.log(personObj["age"])

// nested objects
const employeeObj = {
    name: "Raju",
    company: "Acciojob",
    salary: "10LPA",
    address: {
        addressLine1: "Bhumkar chowk",
        addressLine2: "Wakad",
        houseNo: 31,
        city: "pune"
    }
}

console.log("city of", employeeObj.name, "is", employeeObj.address.city)

// Arrays in objects

const studentObjArr = [
    studentObj, {
        name: "pratik",
        age: 12,
        address: "jalgaon",
        standard: 10
    }
];

console.log(studentObjArr)

for (let i in studentObj) {
    console.log(i, ":", studentObj[i])
}

console.log("keys:", Object.keys(studentObj))

const student1 = {
    name: " pratik",
    age: 16,
    gender: "male",
    grade: "A",
    address: {
        addressLine1: "shivaji nagar",
        addressLine2: " baner",
        city: "Pune",
        houseNo: 12
    }
}
const student2 = {
    name: " yash",
    age: 18,
    gender: "male",
    grade: "B",
    address: {
        addressLine1: "shivaji nagar",
        addressLine2: " balewadi",
        city: "Pune",
        houseNo: 15
    }
}
const student3 = {
    name: "sagar",
    age: 14,
    gender: "male",
    grade: "c",
    address: {
        addressLine1: "pushpak colony",
        addressLine2: "sai nagar",
        city: "amravati",
        houseNo: 18
    }
}

const classRoom = [
    student1, student2, student3, {
        name: "parth",
        age: 18,
        gender: "male",
        grade: "A",
        address: {
            addressLine1: "pushpak colony",
            addressLine2: "sai nagar",
            city: "amravati",
            houseNo: 19
        }
    }
];

for (let student in classRoom) {
    if (student && student.Address && student.address.city === "Pune")

        console.log(student.name, student.age, student.address.houseNo)
}


// functions inside objects

const carObj = {
    car: "Mercedes GLS",
    color: "Black",
    mileage: 15,
    currentSpeed: 20,
    running: function running() {
        console.log("Car is running !! current speed is", this.currentSpeed)
    }

}
carObj.running()

//create obj name portFolio create 2 function that show and add skills

const portFolio = {
    name: "Piyush",
    skill: ["C++", "Javascript", "MERN"],
    showskill: function showskill() {
        console.log(this.skill.join(","))
    },
    addSkill: function addSkill(skill) {
        this.skill.push(skill)
    }
}
portFolio.showskill()
portFolio.addSkill("java")
portFolio.showskill()


// note
//- key-value