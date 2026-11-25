let emp={
    name:"miller",
    age:10,
    isemp:true
}
console.log(emp)
console.log(typeof emp)
// json methods
// 1.JSON.stringify---->converts object into json
let jsondata=JSON.stringify(emp)
console.log(jsondata)
console.log(typeof jsondata)

// convert json into object
// 2.parse
let emp2=JSON.parse(jsondata)
console.log(emp2)
console.log(typeof emp2)

let arr=[10,20,30,40]
console.log(arr)
console.log(typeof arr)  //object 


let arr2=JSON.stringify(arr)
console.log(arr2)
console.log(typeof arr2)  //string

let arr3=JSON.parse(arr2)
console.log(arr3)
console.log(typeof arr3)


// deep copy
let arr10=[10,20,30]
let copy=arr10
console.log(arr10)
console.log(copy)
// deep cop by using json
arr10=[10,20,30]
copy=JSON.parse(JSON.stringify(arr10));
copy.push("html")
arr10.shift()
console.log(copy)
console.log(arr10)