
console.log("hello")
let wish=()=>{
    console.log("happy birthday!!!")
}
setTimeout(wish,5000)
let t1=setTimeout(wish,5000)
let t2=setTimeout(()=>{
    console.log("this is settimeoutfunction")
},7000)

console.log("😊")
clearTimeout(t1)
clearTimeout(t2)

// let hello=()=>{
//     console.log("hello")
// }
// setInterval(hello,1000)

let timer3=setInterval(hello,1000)
let timer4=setInterval()