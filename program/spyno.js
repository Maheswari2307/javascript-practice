// spy number
function spy(a){
    let sum=0
    let mul=1
while(a>0){
    let digit=a%10
    sum=sum+digit
    mul=mul*digit
    a=Math.floor(a/10)
}
return sum==mul
}
console.log(spy(123))
console.log(spy(1214))
console.log(spy(124))