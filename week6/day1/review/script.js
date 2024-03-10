// function sayHello() {
//     console.log('hello');
// }

// setTimeout(sayHello, 5000)

// setTimeout(()=>{
//     console.log('nadav');
// },5000)

// let counter = 0

// let intervalName = setInterval(()=> {
//     if (counter >= 5) {
//         clearInterval(intervalName)
//     }
//     console.log(counter);
//     counter++


// },3000)

// let count = 0

// let countUp = setInterval(()=>{
//     if (count == 10) {
//         clearInterval(countUp)
//     }
//     console.log('the number is:', count);
//     count++
// }, 1000)

let body = document.getElementsByTagName('body')[0]
let button = document.createElement('button')
button.textContent = 'click here'

button.addEventListener('click', () => {
    let div = document.getElementById('numbers')
    let count = 0
    let countUp = setInterval(() => {
        if (count == 10) {
            clearInterval(countUp)
        }

        let p = document.createElement('p')
        p.textContent = `the number is: ${count}`
        div.appendChild(p)

        count++
    }, 1000)
})

body.appendChild(button)

function sayHello(name = 'guest') {
    console.log('Hello,', name);
}

// sayHello()

let age = 18

// if (age>18) {
//     return true
// } elseif (age==18){
//     console.log('just right');
// }else {
//     return false
// }

console.log(age > 18 ? console.log('yep') : age == 18 ? sayHello('nadav') : alert('nope'));


let thing = 'hello, there \njnrejoger ${age}'
console.log(thing);