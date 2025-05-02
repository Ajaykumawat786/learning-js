// find the biggest and smallest number in array
let coins = [1, 2, 5, 10, 20, 50, 100, 500, 25, -120, 0 ]


let bigNumber = 0;
let smallNumber = coins[0]

for(let i = 0; i < coins.length; i++){
    if(bigNumber < coins[i]){
        bigNumber = coins[i]
    }

    if(smallNumber > coins[i]){
        smallNumber = coins[i]
    }

}

console.log("big Number", bigNumber)
console.log("small Number", smallNumber)


//  Q.1 print number from 1 to 10 using for loop

let number= 1
for (let i = 1 ; i <= 10; i++){
    console.log(i)                  //done
}


// Q.2 print even number from 1 to 20

let evenNumber = 2
for (let even = 0; even< 20;){

    if ( even += 2){
    console.log(even)             // done
    } 
}



// Q.3 print the munitiplaction tabel form 5 up to 10

let num = 5
for(i=1; i <= 10; i++){
    console.log(` ${num} x ${i} = ${num*i}`)      //chak

}
//Q.4 Calculate the sum of numbers from 1 to 100

    let sum = 0
    for(i = 1; i<=100; i++){
        console.log(sum += i)          //5050

}

// let reducer = sum.reduce((acc, curr, ) => {
//     return   acc +=  curr
// })



//Q.5. Reverse a string using a loop. (Input: 'hello' -> Output: 'olleh')

let hello = "hello"

for ( let i =-1;i>=0; i--)
    console.log(hello)       // not ok
 



//Q.6. Count the number of vowels in a given string. (Input: 'javascript')

let name = "javascript"
console.log(name.length)            //10     done



//Q.7. Loop through a string and print each character. (Input: 'Sween')
let sween = "sween"

