let n=9;   //give only the odd number even number not look good
for(let i=0;i<n;i++){
    let str=""
    for(let j=0;j<n;j++){
        if(i==j+Math.floor(n/2) || i==j-Math.floor(n/2) || i+j==n-1+Math.floor(n/2)||i+j==n-1 -Math.floor(n/2))
            str=str+"* "
        else
            str=str+"  "
    }
    console.log(str)
}