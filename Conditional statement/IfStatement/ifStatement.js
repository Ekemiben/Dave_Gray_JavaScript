
// Conditional:If Statement
// Syntax
// if(consdition){
    // run some code
// } else{
    // run some code
// }


// Example one
// let customerIsBanned = false;
// let soup = "chicken noodle soup";
// let crackers = true;

// let reply;
// if (customerIsBanned){
//     reply = "No soup for you"
// } else if(soup && crackers){
//     reply = `Here's your order of ${soup} `;
// }else{
//     reply = `Sorry we're out of ${soup}`
// }
// console.log(reply)


// Example Two

let testScore = prompt("Enter you score here")
// testScore = 80;
let grade;
let collegeStudent =true;
if(testScore >= 80 ){
    grade ="A"
}else if (testScore >= 70 && testScore <= 79){
    grade = "B"
}else if (testScore >= 60 && testScore <= 69 ){
    // alert(  " Your grade is  C")
    grade = "C"
   
}else{
    if(collegeStudent){
        grade = "U"
    }else{
        grade = "F"
    }
}
console.log(grade)
