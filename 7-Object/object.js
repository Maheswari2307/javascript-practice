let student={
    sname:"miller",
    sid:101,
    isstudying:false,
    skills:["sql","java","webtech"],
    address:{
        city:"chennai",
        pin:543216
    },
    work:function(){
        console.log("love to sleep")
    }
}
console.log(student)
// how to access the elements
console.log(student.sname)
console.log(student.sid)
console.log(student.isstudying)
console.log(student.skills[2])
console.log(student.address)
console.log(student.address.pin)
student.work()

// how to modify the objecct value
student.address.sid=102
console.log(student)

// how to add new property
student.phno=98765432101

// how  to deletee 
delete student.isstudying

let marker={
  brand:"we",
  price:20,
  color:"blue",
  canwrite:true
}

let obj1={
    name:"laptop",
    price:200000,
    color:"black"
}
console.log("before freeze")
console.log(obj1)
Object.freeze(obj1)
console.log(obj1)

// seal
let ob2={
    obname:"projector",
    band:"epson",
    price:75000
}
console.log("before seal")
console.log(ob2)
Object.seal(ob2)
console.log("after seal")
ob2.roomno=401  //we cant add
delete ob2.price //we cant delete
ob2.price=65000   //modificatio is possible
console.log(ob2)

// 7.object.issealed

console.log(Object.isSealed(obj1))   //if the object is frozen then also it will give true   
console.log(Object.isSealed(ob2))
console.log(Object.isSealed(marker))

// 8.object.assign()
let ob3={
    namme:"raja"
}
let ob4={
    gf:"rani"
}
let mergedob=Object.assign({},ob3,ob4)
console.log(mergedob)
console.log(ob3)

// 9.hasownproperty
let stu={
    sname:"mahi",
    age:10
}
console.log(stu.hasOwnProperty("age"))
console.log(stu.hasOwnProperty("height"))

// class 
class student1{
    sname;
    sid;
    sage;

    constructor(sname,sid,sage){
        this.sname=sname;
        this.sid=sid;
        this.sage=sage;
    }
}
let stu1=new student1("dhoni",7,10)
let stu2=new student1("virat",2,10)
let stu3=new student1("rohith",5,10)
console.log(stu1)
console.log(stu2)
console.log(stu3)