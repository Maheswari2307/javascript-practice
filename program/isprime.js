let isprime=function(a){
    for(let i=2;i<a;i++){
       if(a%i==0){
             return false
       }
    }
    return true
}
console.log("is primerange in range")
let check=function(start,end){
for(let i=Start;i<=end;i++){
    if(isprime(i)){
        return i
    }
}
}
console.log(check(2,20))