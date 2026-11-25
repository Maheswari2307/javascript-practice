let p=new Promise((resolve,reject)=>{
    let flag=false
    if(flag)
        resolve("hi")
    else
        reject("bye")
})
let handlepromise=async()=>{
    try{
        let res=await p
    console.log(res)
}
catch(err){
  console.log(err)
}
finally{
    console.log("i am finally block")
}
}
handlepromise()
git pull origin main --allow-unrelated-histories
git push -u origin main
git branch -M main