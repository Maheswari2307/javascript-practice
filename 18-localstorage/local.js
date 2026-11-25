// how to add on localstorage

localStorage.setItem("myName","mahi")
localStorage.setItem("myId","101")
localStorage.setItem("skills",JSON.stringify(["java","python","webtech"]))

// 2.how to get data
let myname=localStorage.getitem("myName")
console.log(myName)
let myId=localStorage.getitem("myId")
console.log(myId)
console.log(typeof myId)
let skills=JSON.parse(localStorage.getitem("myName"))
console.log(skills)


// how to remmove data fro local storage

localStorage.removeItem("myId")

// how to remove all the items