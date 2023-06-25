fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'lorem ipsum',
        content: 'lorem ipsum dolor sit amet', 
        author: 'Enzo'
    })
})
.then(response => response.json())
.then(data => console.log(data));