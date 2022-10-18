(async()=>{ 
let data =await fetch("https://jsonplaceholder.typicode.com/todos/1")
console.log(data.json())
}
)()