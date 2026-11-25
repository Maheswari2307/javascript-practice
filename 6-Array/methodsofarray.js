// METHODS OF ARRAY
// 1.push()
console.log("-----------------------METHODS IN JAVASCRIPT----------------------")
let arr=[75,80,95,65]
arr.push(20)
console.log("push method :",arr)

// 2.pop()
arr.pop()
console.log("pop method :",arr)

// 3.shift()
arr.push(20,30,10)
arr.shift()
console.log("shift method:",arr)

// 4.unshift()
arr.unshift(5)
console.log("unshift method :",arr)

// 5.indexof
console.log("indexoff method :",arr.indexOf(5))

// 6.lastindexof
arr.push(95)
console.log("lastindexof method:",arr.lastIndexOf(95))

// 7.includes
console.log("includes method:",arr.includes(5))

// 8.concat()
let arr2=[1,2,3]
let arr3=[4,5,6]
console.log("concat method:",arr2.concat(arr3))

//9. join()
console.log("join method:",arr2.join(arr3))

//10. reverse()
console.log("reverse method :",arr2.reverse())

// 11.splice()
let arr4=[10,20,30,40,50,60]
console.log(arr4)
arr4.splice(1,2) // 2- is delete count
console.log(arr4)

// 
let arr5=[100,200,300,400,500,600]
arr5.splice(2,2,700)
console.log(arr5)
// prameter
// first--->start index
// second--->delete Count
// third--->replace element


// without delete count 
let arr6=["java","node","sql","html","css","advance java"]
arr6.splice(1,0,"javascript")
console.log(arr6)


// map()
// Three parameter---->element,indes,array
let arr7=[10,20,30,40]
arr7.map((element,index,arr)=>{
    console.log(element,index,arr)
})


