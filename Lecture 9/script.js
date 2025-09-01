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
