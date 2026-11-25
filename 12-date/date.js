let date=new Date();
console.log(date)
console.log("hour is:",date.getHours())
console.log("minute is:",date.getMinutes())
console.log("second is:",date.getSeconds())
console.log("milliseconds is:",date.getMilliseconds())
console.log("time is:",date.toLocaleTimeString())
console.log("year is:",date.getFullYear())
// console.log("month is:",date.getMonth())

let months=['january','feb','march','april','may','june','july','august','september','octomber','november','dec']
console.log("month is:",months[date.getMonth()])
let days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
console.log("day is :",days[date.getDay()])
console.log("date is:",date.getDate())
console.log("dd/mm/yy:",date.toLocaleDateString())