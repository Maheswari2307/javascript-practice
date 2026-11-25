// let p1=new Promise((resolve,reject)=>{

// })
// console.log(p1)

// let p2=new Promise((resolve,reject)=>{
//     resolve("this promise is resolved")
// })
// console.log(p2)

// let p3=new Promise((resolve,reject)=>{
//     reject("sorry this promise is rejected ")
// })
// console.log(p3)

// p2.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// p3
// .then((dta)=>{
//     console.log(dta)
// })
// .catch((dta)=>{
//     console.log(dta)
// })
// // finally(
// // (console.log("promise is present"))
// // )
// .finally(console.log("promise is present"))  //like in java execute always

// // promise is asyschonised(not line b line excution)
// console.log("end")

// example800

let mypromise=new Promise((resolve,reject)=>{
    let study=true;
    if(study)
        resolve("i will start your react batch")
    else
        reject("i will not start your react batch😒")
})
mypromise.then((data)=>{
    console.log(data)
})
mypromise.catch((err)=>{
    console.log(err)
})


// notes

