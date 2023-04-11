let user = {
    name: "George",
    email: "george@george.com",
    id: 1234,
    greet: function() {
        // check if this is the correct ID
        console.log("hello, welcome to the site! My name is", this.name)
    }
}
// classes
let user2 = {
    greet: () => user.greet()
}

// read
user.name

console.log(user.name)

// add function
const addPropertyToUser = (userToChange, propertyName, value) => {
    userToChange[propertyName] = value;
}
addPropertyToUser(user, "points", 100)
addPropertyToUser(user, "location", "NYC")

// user


delete user.email;

console.log(user)

// function on object is called a method
user.greet()

let points = [20, 30, 40]
// Array Methods
// push
// pop
// unshift
// shift
// forEach - built in loop method. Gives us the Element and the INDEX of the element
// no keeping track of i
// points.forEach((element, index) => {
//     console.log(element, index)
//     // splice needs an index to star from
//     if (element === 30) {
//         points.splice(index, 1)
//     }
// })


// filter - create a NEW array with the elements we want
// we want less than 35

let newArray = points.filter((element) => {
    if (element <=35) {
        return element
    }
})

console.log(newArray)



// concat - add 2 arrays together
let arr1 = [1,2,3]
let arr2 = [4,5,6]

let arr3 = arr1.concat(arr2)
console.log(arr3);

// global objects
Object
Array
Math 
String
Number

let num =2
num.toString()