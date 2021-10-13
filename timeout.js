const doSomething = () => {
    console.log('I am coding javascript.');
}
console.log('First is running');
console.log('Second is running');
console.log('Third is running');
setTimeout(doSomething, 6000);
setTimeout(function () {
    console.log('Dating with js.')
}, 4000);
setTimeout(() => {
    console.log('Hello Bangladesh');
}, 2000)
console.log('Fourth is running');