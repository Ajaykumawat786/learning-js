let coins = [1, 2, 5, 10, 20, 50, 100, 500, 25 ]
// let billingOfTheDay = [450, 650, 8585, 58, 589]
let names = ["rahul", "ajay", "ravi", "rakesh"]
console.log(coins[2])


for(let i = 0; i < coins.length; i++){
    console.log(coins[i])
}


//methods of an array       map(), filter(), reduce()


for(let i = 0; i < names.length; i++){
    console.log(i+1+ ":- " + names[i])
}


// array.map(() => {})  
    // key: 
    //  1. it will return a new array 
    //  2. it will not change your original array
let printNames = names.map( (name) => {
       return " hello " + name 
})


// exampal
//1
let student = [ "ajay", "ram", "shyam", "seeta", "kavita", "aman"]

let printStudent = student.map( (student) => {
    return "Hello, my dear Friend " + student
})
console.log(printStudent)


//2.
let income = [ 10000 , 12500, 19000, 25000, 43000 , 11000]

let myIncome = income.map ( (income) => {
    return 20000 + income
})
console.log(myIncome)




// ##*B.
// array.filter(() => {})  
    // key:
    // 1. it will return you a new array.
let result = coins.filter((coin, i) => {
       return  coin < 50
})



// exampals

// 1. 
let smallIncome = income.filter(( income) => {
    return income < 15000
})
console.log(smallIncome)


//  2.  
// let toper = [
//     {name : "ajay kumawat", age : 21 , marks :100 , subject: maths},
//     {name : "vikky rana", age : 23, marks: 97, subject: hindi }, 
//     { name : "RAM ", age: 20, marks : 98 , subject : SCINCE}

// ]

// let higMarks = toper.map((student) => student.marks)
// console.log(higMarks) 


// let overAllToper = toper.filter( (toper)=> {
// }) 
// console.log(overAllToper)


let bigIncome = income.filter ( ( income ) => {
    return income > 15000
})
console.log(bigIncome)                      

// OR
let filterArray = coins.filter(coin => coin < 50) 
// console.log(filterArray)



// array.reduce(() => {}, initialValue)
// it will give return you a number
let reducer = coins.reduce((acc, curr, ) => {
       return    acc +=  curr
},1000)




// console.log(names)
// console.log(printNames)
// console.log(result)
console.log(reducer)




//forEach(() => {})
    // it works like your for loop, but it will not give you any return 
// names.forEach((name, index) => {
//        console.log(name, "kumar")
// })




// for(let i = 0; i < coins.length; i++){
//     if(coins[i] >= 50){
//         console.log(coins[i])  
//     }
// }



let totalMoney = 0
for(let i = 0; i < coins.length; i++){
    // totalMoney = totalMoney + coins[i]
    totalMoney += coins[i]
}
 
 
 






