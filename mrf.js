let arr = [1,2,3,4,5,6,7,8,9]

let arr_sqr = arr.map(num => num**2)

console.log(arr_sqr)

let arr_filter = arr.filter(num => num%2==0)
console.log(arr_filter)

let arr_sum = arr.reduce((a,b)=>a+b,0)
console.log(arr_sum)
