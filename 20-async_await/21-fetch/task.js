let getproducts=async ()=>{

    try{
        let res=await fetch("https://fakestoreapi.com/products")
        console.log(res)

        let data=await res.json();
        console.log(data)
    
    data.map((ele)=>{
        let list=document.createElement("li")
        list.innerText=ele.title
        ol.append(list)
    })
}
catch(err){
    console.log(err)
}
}
getproducts()