let outer=()=>{
    let a=20;
    let inner=()=>{
        a=a+1;
        console.log(a)
    }
   return inner;
}

let ans=outer();
ans()
ans()
ans()
console.log("------------------------------")
function multiply(a,b,c){
    return a*b*c
}
let res=multiply(2,3,4)
console.log(res)

function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
let sum=add(1)(2)(3)
console.log(sum)


// function currying with arrow function
// let add2=a=>b=>c=>a+b+c;
// console.log(add2(10)(20)(30))