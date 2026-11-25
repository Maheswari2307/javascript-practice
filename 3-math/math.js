
// 1.Math.max()
console.log(Math.max(5,8,2,9,7))
console.log(Math.max(15,8,34,21,45))

//2. Math.min()
console.log(Math.min(9,3,4,8))

//3. Math.sqrt()
console.log(Math.sqrt(100))
console.log(Math.sqrt(4))

// 4.Math.abs()
console.log(Math.abs(-20))
console.log(Math.abs(-56.9))

//5. Math.floor()----->it will give the before point value
console.log("-------------------floor---------------------")
console.log(Math.floor(5.3))
console.log(Math.floor(5.999))

//6. Math.ceil()---->Next Integer number it will give
console.log("----------------------ceil--------------------------")
console.log(Math.ceil(4.8))
console.log(Math.ceil(4.0001))

//7. Math.round()--->it will round the given value
console.log("---------------round--------------------")
console.log(Math.round(7.6))
console.log(Math.round(7.4))

//8. Math.random()---->it will generate the random number

console.log("---------------random-------------------------------")
console.log(Math.random())
// generate one number between 0 to 9 
console.log(Math.floor(Math.random()*10))
// to generate 4 digit otp
console.log("---------------OTP-------------------")
console.log(Math.floor(Math.random()*9000+1000))
// to generate 5 digit otp
console.log(Math.floor(Math.random()*90000+10000))


// to generate one number betwween 10 to 25
//The formula for that
// ((max-min)+1)+min
// Math.random()*((10-25)+1)+10
console.log(Math.floor(Math.random()*16+10))

// !Math.pow()
console.log(Math.pow(5,3))