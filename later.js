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

users = [
    {
        name: "George",
        id: 1234,
        email: "George@George.com",
        points: 50,
        passing: false
    },
    {
        name: "Jenny",
        id: 4321,
        email: "Jenny@Jenny.com",
        points: 90,
        passing: true
    },
    {
        name: "Brit",
        id: 4444,
        email: "Brit@Brit.com",
        points: 90,
        passing: true
    }

]

// for (let i=0; i<users.length; i++) {
//         //user[0].id 1234  FALSE
//         //user[1].id 4321  FALSE
//         //user[2].id 4444  TRUE
//     if (users[i].points > 80) {
//         // i = 2
//         //    index of where to remove, number to remove
//         users.splice(i, 1);
    
//     }
// }
for (let i=users.length-1; i>=0; i--) {
    //user[2].id 4444  TRUE
    //user[1].id 4321  FALSE
    //user[0].id 1234  FALSE
    if (users[i].points > 80) {
        // i = 2
        // index of where to remove, number to remove
        users.splice(i, 1);
    }
}

console.log(users);

let names = [
    "George", 
    "Jenny", 
    "Brit"
]

let rentalYears = [
    2011,
    2007,
    2015,
    2009,
    2020
]

// check the average year

const checkAverageYear = (yearArray) => {
    let totalYears = 0;

    yearArray.forEach((item) => {
        totalYears += item;
    })
    
    let averageYears = totalYears/rentalYears.length;
    console.log(Math.floor(averageYears));
}


checkAverageYear(rentalYears)
// remove everything before some year
const filterByYear = (yearArray, yearToFilterBy) => {
    let newerCars = yearArray.filter((item) => {
        if (item > yearToFilterBy) {
            return item
        }
    });
    yearArray = [...newerCars]
    console.log(yearArray);
}

filterByYear(rentalYears, 2010)

// check average  year again
checkAverageYear(rentalYears)

let myRentalCar = {
    make: "Toyota",
    year: 2011,
    features: ["All-wheel drive", "seatbelts", "bluetooth"]
}

// change make to "Ford"
// change year to 2013
// add property owner: "Enterprize"
// check if rental car is newer than 2010 AND has bluetooth
// if yes, set renterIsHappy: true


// remove seatbelts from the car




const rentalCars = [
    {
        make: "Toyota",
        year: 2011,
        features: ["All-wheel drive", "seatbelts", "bluetooth"]
    },
    {
        make: "Toyota",
        year: 2007,
        features: ["sound system", "seatbelts", "bluetooth"]
    },
    {
        make: "Ford",
        year: 2015,
        features: ["sunroof", "seatbelts"]
    },
    {
        make: "Hyundai",
        year: 2009,
        features: ["heated seats", "seatbelts"]
    },
    {
        make: "Hyundai",
        year: 2020,
        features: ["heated seats", "seatbelts", "bluetooth"]
    }
]

// user selects cars from 2010+
// make a new array with only these cars

// user selects cars from 2010 AND only Hyundai



// We are removing all cars older than 2012 from our fleet






let movies = [
    {

        name: "Titanic",
        releaseYear: 1997,
        director: "James Cameron",
        actors: ["Leonardo Dicaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],
        starActor: {
            name: "Leonardo Dicaprio",
            age: 5,
            born: 1889,
            linkToAwards: "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio",
            headshotLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg"
    
        },
        budgetInMillions: 200
    
    }
]
