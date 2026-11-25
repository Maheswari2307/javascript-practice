// let str="hello how are you"
// let ans=" "
// let words=str.split(" ")
// for(let word of words)
// {
//     let rev=" ";
//     for(let i=word.length-1;i>=0;i--)
//     {
//         rev=rev+word.charAt(i);
//     }
//     ans=ans+rev+" "
// }
// console.log(ans.trim())

// let merge=()=>
// {
//     let a=[5,9,13]
//     let b=[7,8,12,18,25,45,50]
//     let c=[a.length+b.length]
//     let i=0
//     let j=0
//     let k=0
//     while(i<a.length && j<b.length){
//         if(a[i]>b[j]){
//             c[k]=b[j]
//             j++
//             k++
//         }
//         else{
//             c[k]=a[i]
//             i++
//             k++
//         }
//     }
//     while(i<a.length){
//         c[k]=a[i]
//         i++
//         k++
//     }
//     while(j<b.length){
//         c[k]=b[j]
//         k++
//         j++
//     }
//     console.log(c);
// }
// merge()


// ADD THE ELEMENTS OF THE ARRAY
let arr=[75,50,65,96,28,49]
let nums=[1,2,3,4,,5]
let ans=nums.reduce((accumelator,element)=>{
   return accumelator+element 
})
console.log(ans)

let nums1=[1,2,3,4,,5]
let ans1=nums1.reduce((accumelator,element)=>{
    return accumelator*element
}
)
console.log(ans1)

let unsorted=[5,1,4,3,2]
let asc=unsorted.sort((a,b)=>{
    return a-b
})
console.log("before aorting in asc:",unsorted)
console.log("after sorting in asc:",asc)

let desc=unsorted.sort((a,b)=>b-a)
console.log("before aorting in desc:",unsorted)
console.log("after sorting in desc:",desc)

