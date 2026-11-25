// Reverse number
function reverseno(a){
    let reversed=0
    while(a>0){
       let digit=a%10
       reversed=reversed*10+digit
       a=Math.floor(a/10)
    }
    return reversed
}
console.log(reverseno(123))
console.log(reverseno(234))
console.log(reverseno(567))