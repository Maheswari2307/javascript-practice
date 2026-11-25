let n=9
for(let i=0;i<n;i++){
    let str=""
    for(let j=0;j<n;j++){
        if(i+j==4 ||i==j ||i==Math.floor(n/2) ||j==Math.floor(n/2))
            return str=str+"* "
        else
            return str=str+"  "
    }
    console.log(str)
}