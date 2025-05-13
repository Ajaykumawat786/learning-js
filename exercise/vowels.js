let string = "application"

let vowels = ["a", "e", "i", "o", "u"]

 
let count = 0
for(let i = 0; i < string.length; i++){
      
    if(vowels.includes(string[i])){
      count++

    }
}

console.log(count)


let massage = "ram and shyam is a good boy "
let find = [ "o", "a"]


let ginti = 0
for (let i = 0; i< massage.length; i++){
    if(find.includes(massage[i]))
        ginti++
}
console.log(ginti)






// remove duplicate numbers

let nums = [7, 8, 7, 7, 9, 11, 56, 11]

let filterNums= []

for(let i = 0; i < nums.length; i++){
 
    if(filterNums.includes(nums[i])){   //includes() check karta hai kya nums[i] number filterNums me already hai?
                                        //  Agar hai, toh "exist" print karo (sirf batane ke liye).
         console.log("exist")
    } else {
        filterNums.push(nums[i])
    }

}


console.log(filterNums)

// my exmaple

let numbers =  [12, 13, 12, 12, 11, 12, 54, 33, 65, 32, 66, 55, 66, 23, 453, 55, 44, 55, 43, 65]
let findNumber =[]

for(let i = 0; i< numbers.length; i++){

    if(findNumber.includes(numbers[i])){
console.log("exist")
} else{
    findNumber.push(numbers[i])
}
}
console.log(findNumber)