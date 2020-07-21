// Data Types in javaScript

/*
    1. JavaScript Arrays
        JavaScript arrays are written with square brackets.
        Array items are separated by commas.
        The following code declares (creates) an array called cars, containing three items (car names):
        Array indexes are zero-based, which means the first item is [0], second is [1], and so on.
*/
    var cars = ["Saab", "Volvo", "BMW"]
    console.log(cars)
    console.log(cars[0])
    console.log(cars.length)
    console.log(cars[cars.length-1])

    var myAcadmics = ["Aryan", 1813210034, 7.31, true]
    console.log(myAcadmics)

/*
    2. JavaScript Objects
        JavaScript objects are written with curly braces {}.
        Object properties are written as name:value pairs, separated by commas.
        The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

*/

    var person = {
        firstName:"John", 
        lastName:"Doe", 
        age:50, 
        eyeColor:"blue"}

    console.log(person)
    console.log(person['firstName'])

    