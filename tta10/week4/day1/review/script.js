// for (let index = 0; index <= 30; index++) {
//     if (index % 2 == 0) {
//         console.log(index + ' is even');
//     } else {
//         console.log(index + ' is odd');
//     }
// }

// for (let index = 0; index <= 15; index++) {
//     if (index % 2 == 0) {
//         console.log(index + ' is even');
//     } else {
//         console.log(index + ' is odd');
//     }
// }

// for (let index = 0; index <= 150; index++) {
//     if (index % 2 == 0) {
//         console.log(index + ' is even');
//     } else {
//         console.log(index + ' is odd');
//     }
// }

// for (let index = 0; index <= 183; index++) {
//     if (index % 2 == 0) {
//         console.log(index + ' is even');
//     } else {
//         console.log(index + ' is odd');
//     }
// }

//-------------------------------------------------------

function evenOdd(num, num2) {
    for (let index = 0; index <= num; index++) {
    if (index % num2 == 0) {
        console.log(index + ' is even');
    } else {
        console.log(index + ' is odd');
    }
}}

// evenOdd(30, 2)
// evenOdd(15, 3)
// evenOdd(150, 7)
// evenOdd(183, 10)

function five() {
    return 5
}

// let greeting = 'hello'

function hello(name) {
    
    return greeting + name
    console.log(name);
}

// console.log(`${hello('shosh')} is great`);
// console.log(hello('yaffa'));

// console.log(five() + 4);

let num2 = 0

function counter() {
    let num = 0
    console.log(num);
    console.log(num2);
    num++
    num2++
    console.log(num);
    console.log(num2);
}

// counter()
// counter()

let obj = {
    add: function (num1, num2) {
        return num1 + num2
    },
    name: 'nadav',
    greeting: function () {
        return `hello ${this.name}, how are you?`
    },
    age: 25,
    
}

console.log(obj.name);
console.log(obj.add(35, 23));
console.log(obj.greeting());