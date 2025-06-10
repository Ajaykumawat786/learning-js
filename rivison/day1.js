// loops in javascript

// for loop

let count = 1 

for(let count = 5; count <= 10; count++){
    console.log(count)
}



let age = 23
let fullName = "ajay kumawat "

for(let age = 20; age <= 30; age+= 5){

    console.log(age)
}


//template literals

// sentex likhne k liye use kiya jata h 

let greet = `helllo ${fullName}, welcome to our website. your age is ${age} you are eligble for become instructer`
console.log(greet)



// exmapal of literals tempalte

let num = 99 
let subject = "maths"

let result = `hello ${fullName}, congrats you gate ${num} in ${subject} keep it up my friend`
console.log(result)


for( let num = 90; num<=100;num++ ){
    console.log(`will done my friend you gat ${num} marks`)
}

// mini project for using  loop 

// let number = prompt("give me your favrat number we give you table  of its")

// let stringToNumber = Number(number)

// for(let i = 1; i <= 10; i++){
    
//     console.log(`${stringToNumber} X ${i} = ${stringToNumber*i}`)
// }



// next exampal for loop

for(let i = 40; i <= 50; i++){

    for(let r = 1; r <= 10; r++){
        console.log(`${i} x ${r} =  ${i*r}`)
    }
    console.log(`${i}`)
}


let names = ["raj", "ajay", "ram", "shyam", "seeta", "geeta", ]

for(let i = 0 ; i <= names.length-1; i++){

    if (names[i] === 'ajay'){
    console.log("ajay kumawat")
}else{
    console.log(names[i])
}
}


// continue property 

for(let i = 0; i < names.length; i++){
    if(names[i] == "ajay"){
        continue;

    }else{
        console.log(names[i])
    }
}


let rate = 10
let repoRat = 1400
let totalRepoRate = rate * repoRat

console.log(totalRepoRate)

let oneDayRound = 3
let income = totalRepoRate*oneDayRound

console.log(`total income =  ${income}`)



// forIn Loop
// for in loops in javascript
// it is use only for object property
// for...in loop is used to iterate over the enumerable properties of an object.

//  Syntax
for (const key in object) {
    
        
    }

// Syntax with condition
let profile = {
    name : "ajay kumawat",
    age : 24,
    addrass : "bagru jaipur rajsathan"
}

for (let key in profile) {
    
      console.log(key, ":"+ profile[key] )  
    
} 




