// function func() {
//     let x = 'hello'
//     if (condition) {
//         console.log(x);
//         let b = 10
//     }
//     console.log(b);
// }
// console.log(x);


// let y = 'nadav'
// function func2() {
//     console.log(y);
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if (condition) {
//         }
//     }
// }

// let obj = {}

// {
//     let a = 5
// }

// function sayHello(name='guest') {
//     console.log('Hello', name);
// }
// sayHello('Sarah')
// sayHello('Shosh')
// sayHello()

// let age = 28

// if (age < 18) {
//     console.log("Sorry, you're too young.");
// } 
// else if (age > 18) {
//     console.log("Yay! You're old enough!");
// } 
// else {
//     console.log();
// }

// age < 18 ? console.log("Sorry, you're too young.") : 
// age > 18 ? console.log("Yay! You're old enough!") : 
// console.log('exactly');


// condition ? if true : if false

// age > 21 ? console.log('older') : 
// age < 21 ? console.log('younger') : 
// console.log(false);

// let person = ''

// if (person == '') {
//     console.log('מלך');
// } else {
//     console.log('איכס');
// }

// person == '' ? console.log('מלך') : console.log('איכס');

// let year = 2024

// let str = `hello class, 
// the year is ${year}`

// // ---------------------------------------

// funcName()

// function funcName () {

// }

// const funcName2 = () => {

// }

// const add = (num1, num2) => {
//     return num1 + num2
// }

// const add2 = (num1, num2) => num1 + num2

// const sayHey = name => {
//     console.log(`hey, ${name}`);
// }

// const times2 = num => num*2 

// function times(num) {
//     return num*2 
// }

// console.log(times2(25));

// const calculator = (num1, num2, sign) => 
//     sign == '+' ? num1 + num2 :
//     sign == '-' ? num1 - num2 :
//     sign == '*' ? num1 * num2 : 
//     console.log('not supported');

// console.log(calculator(2,5,'*'))
// console.log(calculator(2,5,'-'))
// console.log(calculator(2,5,'+'))

//---------------------------------------------------

let arr = [1,2,3,4,5]
arr.forEach((item,index) => {
    console.log(`
    number is ${item}
    index is ${index}`);
    arr[index] = arr[index] * 2
})
console.log(arr);


const numbers = [10,11,12,15,20];

numbers.forEach((num, i) => {
    num % 2 == 0 ? console.log(num) : undefined
})

let ifTrue = numbers.some((value) => {
    return (value < 13)
})

let ifAllTrue = numbers.every((value) => {
    return (value > 5)
})


const words = ["wow","hey","bye"];

let ifStartH = words.some((value) => {
    return (value[0] == 'h')
})

console.log(ifStartH);

//------------------------------

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes('Banana', 1));

