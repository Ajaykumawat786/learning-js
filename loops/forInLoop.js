let profile = {
    firstName: "ajay",
    lastName: "kumawat",
    age: 24, 
    work : "developer",
    exprince :  "3 years"
}

console.log(profile["age"])




for(let key in profile){
    console.log(key, ":" + profile[key] )
}