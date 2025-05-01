// for loop in javaScript

// for(initialization; condition; inc/dec){
//     code to run each time
// }

let count = 5


for(let count = 5; count <= 10;  count++ ){

    console.log(count)
}
 

let fullName = "ajay kumawat"
let age = 24




for(let age = 20; age <=30; age++)
{
    console.log(age)

}

// sentex likhne k liye use kiya jata h 

// template literals
let greet = `hello ${name}, welcome to our website. because you age is ${age}, you are eligble for becoming instructer `

console.log(greet)

// exmapal of literals tempalte 

let num = 99
let subject = " maths"
let result = ` hello ${fullName}, congrats you gate ${num} in ${subject} keep it up my friend` 
console.log( result)


let nan = 22
for (let nun =12; nun < 42; nun++)
    console.log(nun)



 // asking user for a number. based on that number giving back him a table



let number = prompt("give a number, which you want to see the table")

let stringToNumber = Number(number)

for (let i = 1; i <= 10; i++)
console.log(` ${stringToNumber} x ${i} = ${stringToNumber *i}`)     

//  leaterls styal print the ans  

let raj = prompt("waths your body count")
for(let i = 11; i < 14; i++ ) 
    console.log( ` ${raj} x ${i} = ${ raj * i }`)


// --------------------------------------------loops in advance--------------------------------------------
let names = ["rakesh", "rahul", "ajay", "ranjit", "priya", "akash"]


// for(let i = 0; i < names.length; i++){
//      console.log(names[i])
// }

for(let i =0; i < 4; i++){
    console.loga(names[i])
}





// for(let i = 0; i < names.length; i++){

//          if(names[i] === "ajay"){
//             console.log("ajay kumar")
//          } else {
//             console.log(names[i])
//          }
     
//     }


// continue property                                 //to skip current task while running loop
for(let i = 0; i < names.length; i++){

    if(names[i] === "ajay"){
       continue;
    } else {
       console.log(names[i])
    }
}



for( let i = 0; i < names.length; i++ )
console.log(names[i])


//#### exasmpal demo
let rdx = 10
let rdxRate = 1800
let totalRdxValue = rdx * rdxRate
let oneDayRound = 3
let income = totalRdxValue * oneDayRound
console.log(income)
