/* what are object
why we need them 
creation of object
accessing , modifyning and deleting -> properties and values
nested obj
arrays of object
function in object
*/

const obj = {
    property1: "Property One",
    property2: "Property Two",
    1: "one"
}

console.log(obj["property3"])
console.log(obj.property3)
console.log(obj[1])

// obj keys can have array as value also

obj.property3 = "property 3"

for (let i of obj.arrProperty)
    console.log(i)


////////// string //////////

let str = 'a'
console.log(typeof str)

str = 'b'
console.log(typeof str)

str = "a"
console.log(typeof str)

str = ['a', 'b', 'c']
console.log(typeof str)
console.log(typeof str[0])

// some more features of back ticks
let personName = "Pratik";
str = `Hi I'm ${personName} and you must take "JS" class`
console.log(str)

///////some method in string/////////

str = "we're going to see some methods of strings W";

//include function
console.log(str.includes('going'))

// replace function
console.log(str.replace("W", 'X'))
console.log(str)

// replace all function
console.log(str.replaceAll("W", 'X'))
console.log(str)

// trim() => remove all leading

console.log(str);
console.log(str.trim());
console.log(str);

//substtring => given substring

console.log(str.substring(3, 9))// start from 3 to end 9-1
console.log(str.substring(3))
console.log(str.substring("3"))
console.log(str.substring(-3, -100))
console.log(str.substring(-3, 1000))

//slice() -> almost same as substring
console.log(str.slice(3))
console.log(str.slice(3, 5))
console.log(str.slice(-3))
console.log(str.slice())
console.log(str.slice(-100))
console.log(str.slice(-3, -9))

//split() -> split the string based on given chracter

console.log(str.split(","))


/* Last lecture */
/* 
 - what are objects
 - why we need them
 - creation of objects
 - accessing, modifying and deleting-> properties and values
 - nested objects
 - array of objects -> questions
 - functions in objects
 - this keyword
 - portfolio management
*/

const obj = {
    property1: "Property one",
    property2: "Property two",
    1: "one"
}

console.log(obj["property3"]);
console.log(obj.property3);
console.log(obj[1]);

//creating a new property
obj.property3 = "property3";

console.log({ obj });

//object keys can have array as values also
obj.arrProperty = [1, 2, 3, 4];
for (let i of obj.arrProperty)
    console.log(i);


//another way of creating an object
const newObj = new Object();
newObj.a = "a";
newObj.b = "b";
newObj.c = "c";
newObj.d = "d";

console.log({ newObj });

/* ================= Strings ================= */
let str = 'a';
console.log(typeof str);

// strings usign single codes -> ' '
str = 'abc';
console.log(typeof str);

// strings using double codes -> " "
str = "abc";
console.log(typeof str);

str = ['a', 'b', 'c'];
console.log(typeof str);
console.log(typeof str[0]);

// strings using backticks
str = `abc`;
console.log(typeof str);

// case when we must use double codes
str = "Hi I'm Vaibhav";
console.log(str);

// case when we must use single codes
str = 'Hi you must take "Javascript" classes'
console.log(str);

// case when we must use back ticks
str = `Hi I'm Vaibhav and you must take "Javascript" classes`
console.log(str);

// some more features of back ticks - we can insert any variable inside backticks
let personName = "Pratik";
str = `Hi I'm ${personName} and you must take "Javascript" classes`
console.log(str);

/* ================ some methods in String ================ */
str = "  We're going, to see some methods, of strings W  ";

//includes function -> returns if the given string is present in str or not
console.log(str.includes('goingg'));

//replace function -> replaces only the first occurence of 'W' with 'X'
console.log(str.replace("W", 'X'));
console.log({ str }); // replace() doesn't changes the original string

//replaceAll function -> replaces all 'W' with 'X'
console.log(str.replaceAll("W", 'X'));
console.log({ str }); // replaceAll() doesn't changes the original string

//trim() -> removes all leading and trailing spaces
console.log(str);
console.log(str.trim());
console.log({ str });

//substring() -> gives substring -> doesn't changes the original string
console.log(str.substring(3, 9)); //gives substring starting from index = 3 and ending at index = 8 (9-1)
console.log(str.substring(3)); // gives substring starting from index = 3 till end
console.log(str.substring("3")); // gives substring starting from index = 3 till end
console.log(str.substring(-3, -100)); // gives empty string -> (0, 0)
console.log(str.substring(-3, 10000)); // behaves as (0, n)

//slice() -> almost same as substring, but changes (-)ves differently
console.log(str.slice(3)); //(3, n)
console.log(str.slice(3, 5)); // gives elements from index = 3 to 4
console.log(str.slice(-3));// gives last 3 elements
console.log(str.slice());
console.log(str.slice(-100));// gives all elements in case the number is greater than the length of the string
console.log(str.slice(-3, 0)); //gives empty string as end is smaller than start

//split() -> splits the string based on given character
console.log(str.split(","));
const line = "Hello welcome to MERN stack course  ";
console.log(line.split(" "));

//toUpperCase()
console.log("hello".toUpperCase());

/* ======= Wrapper objects ======= */
const string = "Vaibhav";
const number = 67;
const bool = true;
const object = {
    name: "Vaibhav"
};

console.log(string.__proto__);
console.log(number.__proto__);
console.log(bool.__proto__);
console.log(object.__proto__);

console.log(Number("123"));

/* ================= Spread & Rest operator ================= */

//Rest operator -> ... -> combines all the arguments and transforms them into an array
function addStudent(students, ...studentNames) {
    console.log(studentNames); //prints the array
    for (let student of studentNames)
        students.push(student);

    console.log({ students });
}

const students = ["Rahul", "Riya", "Prem"];
addStudent(students, "Abhishek", "Prateek", "Surbhi");

// destructuring 
const [hi, ...bye] = ["Hi", "Bye", "Byee", "Byeeee"];
console.log({ hi, bye });

//spread operator
const arr1 = [1, 3, 5, 6];
console.log({ arr1 });
console.log("spreaded array: ", [0, ...arr1, 67, 678, 68]);

/* HW: use spread operators with OBJECTS */