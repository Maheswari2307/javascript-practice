

let display=()=>{
let loginuser=JSON.parse(localStorage.getItem(loginuser))
console.log(loginuser)

let cartItems=loginuser.cart
console.log(cartItems)

let main=document.querySelector("main")

if(cartItems.length==0){
    main.innerHTML=`<h1>cart is empty</h1>`

}
else{
    cartItems.map((item)=>{
    let div=document.createElement("div")
    div.classsList.add("card")

    div.innerHTML=`
      <img src=${cartItems.image}>
      <p>${item.title}</p>
      <p>${item.price}</p>
      <button>remove</button>
    
    `
    main.append(div)
 })
}
}
display()
