
let getproducts=async()=>{
    try{

        let res=await fetch("https://fakestoreapi.com/products")
        let data=await res.json();
        console.log(data)

    }
    catch(err){
        console.log(err)
    }
}
getproducts()

let displayproducts=(products)=>{

  let loginuser=JSON.parse(localStorage.getItem("loginuser"))
  console.log(loginuser)

  if(loginuser)
    return window.location.href="login.html"


let username=document.getElementById("username")
username.innerText=loginuser.user;


  console.log("i am dispaly function")
  console.log(products)



  products.map((product)=>{
   let div=document.createElement("div")
   div.classList("card")
   div.innerHTML=`
   
   <img src=${product.image}>
   <p>${product.title}</p>
   <p>${product.price*80}</p>
   <button onclick="addToCart(${product.id})">add to cart</button>
   `
   Main.append(div)

  })
}


let logout=document.getElementById("logout")

logout.addEventListener("click",()=>{
    localStorage.removeItem("loginuser")
    window.location.href="login.html"
})

let addToCart=(productId)=>{
    console.log(products)
let item=products.find((product)=>product.id==productId)
console.log(item)


let userss=JSON.parse(localStorage.getItem("users"))
console.log(users)
let loginuser=localStorage.getItem("loginuser")
console.log(loginuser)

let user=users.find((u)=>u.id==loginuser)
console.log(user)

user.cart.push(item)

localStorage.setItem("users",JSON.stringify(users))
localStorage.setItem("loginuser",JSON.stringify(user))

alert("product add to the cart")
}