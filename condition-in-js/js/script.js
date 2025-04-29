// if else statements

// syntex
//(intial, condition, inc/dec)

//   {    education code     }


let name = "shyam"                  // no
let age = 15

if( age >= 18  ){
 
    console.log(name, "yes, you are eligible for applying driving licence")
} else {
    console.log(name, "No, you are not eligible for applying driving licence")
}


// And opertor 

let name2 = "Ram"           
let age2 = 55

if( age2 >= 18 && age2 <= 60 ){                         // yes
 
    console.log(name2, "yes, you are eligible for applying driving licence")
} else {
    console.log(name2, "No, you are not eligible for applying driving licence")
}


// week 

let today = "monday"        // if we chand the command we got diffe]rent result

if(today == "sunday") {
    console.log( today, "Sunday is Funny day ")
    alert("today we will going to waterpark")
} 
else if ( today == "monday") {
    console.log(today, "the first working day in week")
    
}
 else if ( today == "thuesday") {
    console.log(today, " jai shree ram we will go to temple")
} 
else if ( today == "wednesday") {
    console.log(today, "today i'm going to date")
    
}
else if ( today == "Tuesday") {
    console.log(today, "today om santi ")

} 
else if ( today == "friday") {
 console.log(today,  "last working day in this week ")
    
} else{
    "today going to goa"
}
    

//  gread system 

let marks = 54

if ( marks<= 100 && marks>= 90 ){
    console.log(marks, "congrat's you gat A+ gread in your exam")
    alert("वा बेटे मोज करदी")
}
else if (marks >= 80){
    console.log(marks, "congrat's you got A gread in exam")
    alert("सब्बास हीरा बेटे")
}
else if ( marks >= 60 )
    {
        console.log(marks, "congrats you got B Gread in exam ")
        alert("ओ तेरे इतने नंबर कैसे आ गए हीरा बेटे")
    } 
else if (marks >= 33){
    console.log(marks, "you have gat C gread in exam ")
    alert("बेटा तू तो सस्ते में निपट गया")
    
}
else {
    console.log(marks, "ops! you are fail")
    alert("तू भी गया हीरा बेटे")
}