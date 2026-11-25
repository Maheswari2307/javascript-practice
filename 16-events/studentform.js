

let form = document.querySelector("form")
console.log(form)

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    let stuName = document.getElementById("stuName").value;
    let stuRoll = document.getElementById("stuRoll").value;
    let stuPh = document.getElementById("stuPh").value;


    // let input=document.getElementById("stuName") 
    let h2=document.querySelector("h2")
    h2.innerText=`${stuName}`
    // input.addEventListener("submit",(e)=>{
    //     h2.innerText=e.target.value
    // })
  
    console.log(stuName);
    console.log(stuRoll);
    console.log(stuPh);

    console.log("register done successfully");
})