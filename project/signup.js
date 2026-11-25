
let form=document.querySelector("form")
// console.log(form)
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // get all the input value
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let conformpassword=document.getElementById("password2").value
   //console.log({name,email,password,conformpassword}) 
  // checking all the inputs all filled or not
  if(!name || !email || !password || !conformpassword)
    return alert("fill all the details")
  if(password !==conformpassword){
    return alert("password wrong")
   }
//we are fetching the user from localstorage
//    let users=localStorage.getItem("users") ||[]
//    console.log(users)
   let users=JSON.parse(localStorage.getItem("users")) ||[]
   console.log(users)
//    we are creating new user
   let newuser={
    id:Date.now(),
    name:name,
    email:email,
    password:password,
   cart:[]
   }
//    we are updating the user that we got from localstorage
   users.push(newuser)
//    we are adding the updated user in local storage
   localStorage.setItem("user",JSON.stringify(users))
alert("registion done successfully")
window.location.href="login.html"
})


