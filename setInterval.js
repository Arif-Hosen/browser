console.log('first');
// setInterval(() => {
//     console.log('tik tik');
// }, 2000)
let second = 0;
const timeId = setInterval(() => {
    // second++;
    console.log(++second);

    if (second > 15)
        clearInterval(timeId);
}, 1000)
console.log('second');