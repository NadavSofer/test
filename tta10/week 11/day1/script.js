let obj = {
    key: 'value',
    thing: 'thing',
    num: 5,
    bool: 5 < 10,
    arr: [1,2,3,4,5],
    car: {
        model: 'ford focus',
        color: 'gold'
    },
    func: ()=> {
        console.log('I am in an object');
    }
}
obj.num
// obj.func()

let {car: {model, color}, key} = obj
// console.log(model, color, key);

let thing = 'thing'

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// for (const [key, value] of Object.entries(obj)) {
//     console.log(`this is the key: ${key}, this is the value: ${value}`);
// }

let toBeObject = [['a', 'nadav'], ['b', 40], ['c', true]]
let newObj = Object.fromEntries(toBeObject)
// console.log(newObj);


let {a: person, b: num, c: bool} = newObj
// let {key: varName} = nameOfObject

let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}

let {name:personName, lastName: lName, age: johnAge, friends:friendsArr} = myObj

let {name, lastName, age, friends} = myObj

// console.log(lastName);

function sayHey({name, lastName, age, friends}) {
    console.log(name, lastName, age, friends);
}

// sayHey(myObj)

let myCar = {
    model: 'skoda octavia',
    color: 'white'
}

let myCar1 = myCar
let myCar2 = {...myCar}

myCar.year = 2024

console.log(myCar1);
console.log(myCar2);