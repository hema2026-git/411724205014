fetch('https://jsonplaceholder.typicode.com/posts/3',
    {
    method:'PATCH',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        title:'Title'
      //title:'Title', //put
      //body:'Body',
      //userId:5
        //title:'My Post',  //post
        //body:'Learning fetch',
        //userId:1
    })
    }
)
.then(response=>response.json())
.then(data=>{console.log(data)})