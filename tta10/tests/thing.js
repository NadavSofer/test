// let nadav = 'nadav';
// console.log(nadav);

// let test = 5

// let shoshe = 5 < 4

// let yaffa = [1, 2, 3, 8, [8, 9, 0, { shosh: 1 }]]
// let sarah = null

// let may;

// let nadavcar = {
//     model: 'ford focus',
//     year: '1222',
//     color: 'gold',
// }
// console.log(nadav, test, shoshe,)
// let yosi = [1, 2, 3, 4, 5]
// for (const num of yosi) {
//     console.log(num * 10);
// }
// for (const nam of yosi) {
//     console.log(nam)

// }

// let colors = ['yellow', 'red', 'blue']

// for (const color of colors) {
//     console.log(`${color} is my #${colors.indexOf(color) + 1} favorite color`);
// }

// for (let i = 0; i < colors.length; i++) {
//     console.log(`${colors[i]} is my #${i + 1} favorite color`);
// }

// let adiInfo = {
//     name: "adi",
//     age: 27,
//     profession: "trainer"
// }

// let nadavInfo = {
//     name: "nadav",
//     age: 17,
//     profession: "trainer"
// }

// function boris(person) {
//     if (person.age >= 18) {
//         console.log(person.name + " can drink");
//     }
//     else {
//         console.log(person.name + " cant drink");
//     }

// }
// boris(adiInfo)
// boris(nadavInfo)


// function logIt(info) {
//     console.log(info.name, 'is ', info.age, 'years old');
// }

// logIt(adiInfo)
// logIt(nadavInfo)


// //-------------------------------

// function calculateTax(amount, taxrate) {
//     let x = taxrate / 100
//     return amount * x
// }
// calculateTax(100, 8)
// console.log(calculateTax(100, 8));


// function plus(num1, num2) {
//     return num1 + num2
// }
// console.log(plus(2, 4));


// function doubleNumber(num) {
//     return num * 2
// }

// function squareAndDouble(num2) {
//     let double = doubleNumber(num2)
//     return double * double
// }
// console.log(squareAndDouble(16));


// let button = document.getElementById('clickMe')


// function buttonClicked() {
//     console.log('button clicked');
// }
// button.addEventListener('click', buttonClicked)

// //------------------------------------------------

// addEventListener('click', () => {
//     console.log('button clicked');
// })

//------------------------------------------------

let title = document.getElementById('title')
title.textContent = 'thing'
title.style.color = 'red'
let body = document.getElementsByTagName('body')[0]
// console.log(body);
body.style.backgroundColor = 'pink'

let things = document.getElementsByClassName('pTag')
console.log(things);

things[0].textContent = 'thing1'

for (const thing of things) {
    thing.style.color = 'blue'
}

let q = document.querySelector('body')

let h2 = document.createElement('h2')
h2.textContent = 'will Sarah notice?'

body.appendChild(h2)

body.removeChild(things[1])