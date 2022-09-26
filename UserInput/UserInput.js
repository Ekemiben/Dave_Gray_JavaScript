// 
// let input = confirm("Ok === True\nCancel === False")
// console.log(input)


let name = prompt("Please enter your name")
// this is like saying if name.length is > 0
if(name){
    console.log(name.length)
    console.log(name.trim().length)
    console.log(name)
} else{
    console.log("You didn't type anithing")
}
let newName = name.length ? name : "You did not type your name"
console.log(newName)