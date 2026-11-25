// let nums=[10,20,30,40]
// let ans1=nums.map((element)=>{
//     console.log(element)
// })

let player=[{name:"virat",jno:18,age:36},{name:"rohit",jno:45,age:39},{name:"dhoni",jno:7,age:41},{name:"dk",jno:19,age:40}]
let ans=player.map((element)=>{
    console.log(element.name.toUpperCase())
})
let totalage=player.reduce((acc,element)=>{
    return acc+element.age
},0)
let avgage=totalage/player.length

console.log(avgage)
let ans1=player.map((element)=>{
    console.log(element.jno)
})

