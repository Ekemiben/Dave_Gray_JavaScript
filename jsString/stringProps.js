const myVariable = "Mathematics"
console.log(myVariable.length)

// charAt() return the character at the index position
console.log(myVariable.charAt(5))
// indexOf return the position of the character
console.log(myVariable.indexOf("mat"))
// lastIndexOf return the the character of the last index
console.log(myVariable.lastIndexOf("at"))

// This return the cahracter form the start position of the parameter to the ending position
console.log(myVariable.slice(2, 7))
console.log(myVariable.slice(2, -7))

console.log(myVariable.toLocaleLowerCase())
console.log(myVariable.includes("mat"))
console.log(myVariable.split("e"))
console.log(myVariable.split(""))
console.log(myVariable.split("t"))
console.log("Welcome to my wedding day".split(" "))


// console.log("wecome to my birthday".length)
if(myVariable.length > 5){
    alert("You have pass the number of cahracters")
}

