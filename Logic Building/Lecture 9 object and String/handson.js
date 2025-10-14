
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
let personNa = "Yash";
str = `Hi I'm ${personNa} and you must take "JS" class`
console.log(str)

///////some method in string/////////

str = "we're going to see some methods of strings W";

//include function
console.log(str.includes('going'))

// replace function
console.log(str.replace("W", 'X'))
console.log(str)

// replace all function
console.log("===========", str)
console.log(str.replaceAll("w", 'X'))
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

// strings using backticks
str = `abc`;
console.log(typeof str);

// case when we must use double codes
str = "Hi I'm Bhavesh";
console.log(str);

// case when we must use single codes
str = 'Hi you must take "Javascript" classes'
console.log(str);

// case when we must use back ticks
str = `Hi I'm Bhavesh and you must take "Javascript" classes`
console.log(str);

// some more features of back ticks - we can insert any variable inside backticks
let personName = "Pratik";
str = `Hi I'm ${personName} and you must take "Javascript" classes`
console.log(str);

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

console.log(str.split("going"))

const line = "Hello welcome to MERN stack course  ";
console.log(line.split(" "));