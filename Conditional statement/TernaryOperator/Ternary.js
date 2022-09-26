//Ternary Operator syntax

// Just like if else statement which test condition ? isTrue : ifFalse
// quick example of if else statement

let word = true
if(word){
    console.log("it is true word")
} else{
    console.log("It is false word")
}

// ternary syntax
// condition ? isTrue : ifFalse
let ternaryWord = false;
ternaryWord ? console.log("it's true word") : console.log("it's false word")

let soup = "Chicken Noodle Soup";
let response = soup ? "Yes, we have soup" : "sorry, no soup"

let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you" : soup
? `Yes, we have ${soup} today` : "Sorry, no soup today"
console.log(soupAccess)

let testScore = prompt(Number("Enter your test score here"))
let myGrade = testScore > 80 ? "A" 
: testScore > 70 && testScore <= 80 ? "B" 
: testScore > 60 && testScore <= 70 ? "C"
: testScore > 50 && testScore <= 60 ? "D"
: "F"
let result = document.getElementById("screen").innerHTML = myGrade
console.log(`Your grade is ${myGrade}`)

