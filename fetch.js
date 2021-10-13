console.log(1111);
console.log(2222);
setTimeout(() => console.log('I am ok'), 6000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(3333);
console.log(4444);
// for (let i = 0; i <= 10000; i++) {
//     console.log(i);

// }