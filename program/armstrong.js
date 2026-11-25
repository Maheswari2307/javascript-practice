// let numcount=(a)=>{
//     let count=0
//     while(a>0){
//      a=Math.floor(a/10)
//      count++
//     }
//     return power(count,a)
// }

// let power=(count,a)=>{
//     let add=1
//     let temp=a
//     let sum=0
//     while(a>0){
//         let lastdigit=a%10
//         for(let i=1;i<=count;i++){
//              add=lastdigit*add
//         }
//      sum=sum+add
//         a=Math.floor(a/10)
//     }
//     return temp==sum
// }
// console.log("is the number is armstrong",numcount(153))
// console.log("is the number is arstrong",numcount(1634))

// let countdigit=(n)=>{
//     let count=0
//     while(n>0){
//         n=Math.floor(n/10)
//         count++
//     }
//     return count
// }
// let isarmstrong=(n)=>{
//     let sum=0
//     let temp=n
//     let count=countdigit(n);
//     while(n>0){
//         let ld=n%10
//         sum=sum+Math.pow(ld,count)
//         n=Math.floor(n/10)
//     }
//     return sum==temp
// }
// console.log(isarmstrong(123))
// console.log(isarmstrong(153))
// console.log(isarmstrong(1634))


// console.log("----------------Nested function----------------")
// let outer=()=>{
//     console.log("i am outer function")
//     let inner=()=>{
//         console.log("i am inner function")
//     }
//     inner()
// }
// outer()


// console.log("----------------Lexical Scopping----------------")
// // In 
// let outer=()=>{
//     console.log("i am outer function")
//     let a=10
//     let inner=()=>{
//         let b=20
//         console.log("i am inner function")
//         console.log("a=",a)
//         console.log("b=",b)
//     }
//     console.log("b value is",b) 
//     // error
//     inner()
// }
// outer()



// console.log("--------------Higher Order Function-----------")
// // it means that takes another function as a argument or parameter
// let wish=()=>{
//     console.log("Happy birthday")
// }
// let greetings1=(Myfunc,a)=>{
//     Myfunc()
//     console.log(a)
// }
// greetings2(wish,10)

// greetings(wish)

let greetings=(myfunc)=>{
    myfunc()     //calling
}


greetings(()=>{

    console.log("i am call back function")
})

console.log("------------Creating calculator-------------------")
let add=(a,b)=>{
    console.log("Addition of ",a,"and",b,"is",a+b)
}
let sub=(a,b)=>{
    console.log("subtraction of ",a,"and",b,"is",a-b)
}
let mul=(a,b)=>{
    console.log("multiplication of ",a,"and",b,"is",a*b)
}
let div=(a,b)=>{
    console.log("division of ",a,"and",b,"is",a/b)
}
let calculator=(task,num1,num2)=>{
    task(num1,num2)
}
calculator(add,5,6)
calculator(sub,10,6)
calculator(mul,5,6)
calculator(div,25,5)



// open terminal ctrl+` or ... terminal -->new terminal
// node- it gives Version
// If any any js folder is present then we call node foldername.js
// otherwise we have to change the directory  so cd 4-function
// then call node function.js
// exit from the folder means  -->cd..
// then give path
// cd program
// node ./armstrong.js