
let emailId = document.querySelector("#email")
let password = document.querySelector("#password")
let loginBtn = document.querySelector(".Login")


let mypassword = "Ajay@1435"
let myemail = "ajaythecoder21@gmail.com"


loginBtn.addEventListener("click", () => {

    if(emailId.value != myemail){
        alert("please enter the rigester email")
return
    }

    if(password.value !== mypassword){
        alert("your password is wrong ")
    }

    emailId.value = ""
    password.value = ""
})