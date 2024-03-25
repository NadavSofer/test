let five = 5;
let x = 5;
let b = 1<10;

let a = [1,2,3,4,5];
let o =  {
    age: 25,
    list: [1,'2',3,4,5],
    obj: {
        name: 'nadav'
    }
};
o.age
console.log(o.obj.name);
console.log(o.list[4]);

x = 10;

const adi = (num) => {
    num * 2
};

let num = 10


if (num<10) {
    console.log('num is smaller than 10');
} else if (num > 10){
    console.log('num is bigger than 10');
} else {
    console.log('num is equal to 10');
}

if (num<10) {
    
}

if (num > 10) {
    
}



let numbers = [1,2,3,4,5]

for (const number of numbers) {
    console.log(`this number is ${number}`);
}

for (const key in o) {
        const element = o[key];

        console.log(`${key} is the keyword for ${element}`);
}

let num2 = 20

while (num2 > 10) {
    num2--
}

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    
}

function name(params) {
    
}

let people = [
    {name: 'nadav', age: 25, color: 'red'},
    {name: 'shoshi', age: 12, color: 'yellow'},
    {name: 'odaya', age: 25, color: 'blue'},
]

const sentence = (name, age, color='blue') => {
    return `hello I'm ${name}, I'm ${age} years old. my favorite color is ${color}`;
}

// console.log(sentence('nadav', 25, 'red'));
// console.log(sentence('shoshi', 12, 'yellow'));
// console.log(sentence('odaya', 25));


for (const person of people) {
    console.log(sentence(person.name, person.age, person.color));
}

const weather = (x) => {
    let y = x * 9 / 5 + 32
    return `${x} in celsius in equal to ${y} in fahrenheit`
}

console.log(weather(16));

// -------------------------------------------------


let infoList = [
    {name: 'nadav', age: 25},
    {name: 'odaya', age: 25},
    {name: 'sarah', age: 27}
]

function info(name, age) {
    let out = `My name is ${name} and I'm ${age} years old. I was born in ${2024-age}`
    console.log(out);
}

for (const iterator of infoList) {
    // console.log(iterator);
    info(iterator.name, iterator.age)
}

function celctip() {
    let bill = Number(prompt('how much moneys???'))
    let tip;
    if (bill < 50) {
        tip = bill * 0.2
    } else if (bill >= 50 && bill <= 200) {
        tip = bill * 0.15
    } else if (bill > 200) {
        tip = bill * 0.1
    } else {
        console.log('not a number');
    }

    console.log(bill + tip);
}

celctip()