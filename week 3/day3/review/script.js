let num = 3
let num2 = 7
let str = ''
// if (!(num >= num2)) {
//     console.log('HELLO');
// }

// >
// <
// ==
// >=
// <=
// ===

let password = '12345'

// if (password == '123456') {
//     console.log('welcome!');
// } else {
//     console.log('incorrect password');
// }

// if (num < num2  ||  num == num2) {
//     console.log('');
// }


let person = 'yaffa'

switch (person) {
    case 'nadav':
        console.log('nadav');
        break

    case 'yaffa':
        console.log('yaffa');
        break
    
    default: 
    console.log('invalid name');
}

let obj = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

let obj2 = {
    firstName: "nadav",
    lastName: "sofer",
    age: 25,
    eyeColor: "green"
}

obj.food = 'pizza'
obj.age = 45

delete obj.eyeColor

console.log(obj);

if (obj.age > 18) {
    
}