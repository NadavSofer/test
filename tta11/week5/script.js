// let name = value
let name2;
name2 = 5
// let str = 'text'
// let num = 5
// let bool = 4 > 5;
// let void = null
// let un = undefined
// let arr = []
// let obj = {}
/*gfguouo*/

let str2 = '"``"'

let greeting = 'hello'
let name3 = 'Nadav'
let fullGreeting = greeting + name3
// console.log(greeting, name3);

let longStr = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise, my code is unreadable.";

// console.log(longStr.length);
// console.log(longStr.indexOf('log'));
// console.log(longStr.substring(15, 19));
let small = longStr.toLowerCase()
let big = longStr.toUpperCase()

//---------------------------------------------------

let num2 = 15
// console.log(isNaN(num2));
let stringed = num2.toString()
let frac = 7.446541651
// console.log(frac.toFixed());

//--------------------------------------------
let bool2 = false
let checkBool = Boolean(bool2)
// console.log(checkBool);

let compare = 10 === '10'
let not = !(10 == 10)

let or = 10 > 5 || 5 > 15
let and = 15 > 2 && 5 > 18

let num3 = 5
// num3++

num3 += 15

//----------------------------------------

// alert('hello students')
// let conf = confirm('are you feeling ok?')
// let prop = prompt('and what is your name?')
// console.log(prop);


//------------------------------------

let numbers = [1, 2, 3, 4, 5]
let colors = ['blue', 'red', 'green']
colors[2] = 'pink'
colors.push('green')
colors.pop()
colors.shift()
colors.unshift('brown')
colors.splice(0, 0, 'yellow', 'orange')
let sliced = colors.slice(1, 3)
// console.log(colors.join());
// console.log(sliced);
//----------------------------------------

let obj2 = {
    key: 'value'
}

let car = {
    owner: 'nadav',
    year: 2016,
    model: 'ford focus',
    thing: {
        key: 'value'
    }
}

let thing = 'value'

car.color = 'gold'
car.year = 2019
delete car.thing

// console.log(car);
// console.log(car['year']);
// console.log(car.model);
// console.log(car.thing.key);

//----------------------------------------

if (car.year > 2022) {
    console.log(`that's a new car`);
}
else if (car.year < 2005) {
    console.log(`that's an old car`);
}
else {
    // console.log(`not a new car`);
}

switch (car.owner) {
    case 'gil':
        console.log(`gil's car`);

    case 'nadav':
        // console.log(`that's nadav's car`);
        break

    case 'fred':
        console.log(`who's fred anyways`);
        break

    default:
        console.log('this is the default');
}

//-----------------------------------------

let nums = [48, 35, 78, 12]

for (let index = 10; index >= 0; index--) {
    // console.log(index);
}

for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i] * 2);
}

for (let num of nums) {
    // console.log(num);
}

for (const key in car) {
    console.log(key);
    let value = car[key]
}


let counter = 0
// while (counter < 10) {
//     // counter++
//     console.log(counter);
//     counter++
//     console.log(counter);
// }

do {
    if (counter == 5) {
        counter++
        continue
    }
    console.log(counter);
    counter++
    
} while (counter < 10);

{
    let stuff = 'stuff'
    console.log(counter);
    console.log(stuff);
}
// console.log(stuff);

let nadav = 'nadav'
nadav = 'Nadav'

const person = 'thing'
person = 'nadav'
