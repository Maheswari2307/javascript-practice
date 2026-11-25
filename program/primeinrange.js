let prime=function(a,b){
    for(let i=a;i<=b;i++){
       let check=function(a){
        for(let i=2;i<a;i++){
            if(a%i==0){
                continue
            }
            else{
                return a
            }
        }
       }
       check(a)
    }
}
prime(2,20)