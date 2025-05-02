// object
// in js object are mutable 

let profile = {
    firstName: "ajay",
    lastName: "kumawat",
    age: 24,
}

console.log(profile)
console.log(profile.age)          //      with dot notation     // 24
console.log(profile["firstName"])    // with square notation    //sween


profile.age = 22                     //updating existing value
profile.married = false              //adding new values


// keys, values, entries

console.log(Object.keys(profile))     //you will get all the keys in one single array
console.log(Object.values(profile))   //you will get all the values from your array
console.log(Object.entries(profile))  // you will an array inside that array you will se nested array

console.log(profile) 
console.log( delete profile.married)       //you can delete property using delete keyword
 
 console.log(profile)



//  forIn loop .. in object

for(let key in profile){
    console.log(key)
    console.log(key+ "= " + profile[key])
}




