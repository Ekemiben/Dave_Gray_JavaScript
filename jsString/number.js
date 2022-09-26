const myNumber = 42;
myFloat = 42.018237;
console.log(myNumber === myFloat)
let myString = "23"

// To Change the string data to number by using Number function
let strinconveter = Number(myString) + 3
console.log(strinconveter)

// toFixed method
console.log(myFloat.toFixed(3))

// integer
console.log(Number.isInteger(myNumber))
// float
console.log(Number.parseFloat(myFloat))

// To ensure that your incomming data is actual the data type you are looking for use the parseInt, parseFloat and toStringmethod
console.log(Number.parseInt(myNumber))
console.log(myString.toString())

// you can use this logic
let textbox = ""
if(textbox.value !== myNumber){
    // condition
}