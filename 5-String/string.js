let str1='hii'
let str2="hello"
let str3=`I
am
Maheswari`
console.log(typeof str1)
console.log(typeof str2)
console.log(typeof str3)
console.log(str3)

// String interpolation
// template literals
let a=10
let b=20
let myname="santanu"
console.log(`the addition of ${a} and ${b} is:${a+b}`)
console.log(`my name is:${myname}`)    
let msg="how are you"
console.log("-----------Slice Programe---------")
// Counts from the end
// slice(0, 4) extracts indexes 0 to 3.
// slice(-6) starts six characters from the end.
console.log(msg.slice(0,2)) //ho
console.log(msg.slice(4))    //how are
console.log(msg.slice(3,0))   // 
console.log(msg.slice(-3))  //you
console.log(msg.slice(0,-1))   //how are yo // remove the last charachter    
console.log("-----------Substring Programe---------")
// Treats negative values as 0
// - substring(0, 4) extracts indexes 0 to 3.
// - substring(-3, 4) treats -3 as 0, so it extracts from index 0 to 3.

console.log(msg.substring(0,2)) //ho
console.log(msg.substring(4))    // are you
console.log(msg.substring(3,0))   // how
console.log(msg.substring(-3))  //how are you
console.log(msg.substring(0,-1))  



console.log("-----------String rotation Programe---------")
let s1="javascript"
let s2="scriptjava"
 s1=s1+s1
console.log(s1.includes(s2))


console.log("-----------String Frequency Programe---------")
