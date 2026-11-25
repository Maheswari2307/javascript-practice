let arr=[10,20,30,40]
for(let element of arr){
    console.log(element)
}
for(let i in arr){
    console.log(i,arr[i])
}
console.log("------------------------------")
let str="javascript"
for(let ch of str){
    console.log(ch)
}
console.log("------------------------------")
for(let i in str){
 console.log(i,str[i])
}
// for of and for in loop
let ob={
    sname:"miller",
    sage:10,
    isstudent:true
}
for(let key in ob){
    console.log(key)
}
// for of loop is not applicabale in object .Object allows only for in loop.