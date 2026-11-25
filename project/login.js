let form=document.querySelector("form")
// console.log(form)
form.addEventListener("subit",(e)=>{
    e.preventDefault();
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    // let conformpassword=document.getElementById("password2").value


    if(!email ||!password )
       return alert("fill all the fields")
    let users=JSON.parse(localStorage.getItem("users"))
    console.log(users)

    
   let loginuser= users.find((user)=>{
       return user.email===email && user.password===password
    })
    console.log(loginuser)
    // we are storing data of the person who are login
    localStorage.setItem("loginuser",JSON.stringify(loginuser))
    if(!loginuser)
        return alert("wrong credentials")
    alert("login done successfully")

    window.location.href="home.html"
})