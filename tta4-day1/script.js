const obj = {
    key: 'value',
    name: 'nadav',
    age: 25,
    color: 'red',
    pets: {
        gili: 'dog',
        trico: 'cat'
    }
}

// console.log(Object.entries(obj));

// for (const [key, value] of Object.entries(obj)) {
//     console.log(`The ${key} key is : --- The ${value} value is : ---`);
// }

// const {key: varName, name, color, pets: {gili, ginger = 'cat'}} = obj


function info({name, age, color}) {
    console.log(`hello I'm ${name}, I'm ${age} years old`);
}

// info(obj)



const obj2 = {...obj, eyeColor: 'green'}
let arr = [1,2,3,4,5]
let arr2 = [0, ...arr, 6]
// console.log(arr2);

class shape {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    calArea(params) {
        return `the area of this ${params} is ${this.height * this.width}`
    }

    set widthTimesX(x){
        this.width = this.width * x
    }

    set changeWidth (newNum) {
        this.width = newNum
    }

    get area() {
        return this.width * this.height
    }


}

class math {
    plus(num1, num2) {
        return num1 + num2 
    }

    celToFern(cel) {
        return cel * 9 / 5 +32 
    }
}

let toMath = new math()

let tempNow = toMath.celToFern(17)

class rectangle extends shape {
    constructor (width, height, color) {
        super(width, height)
        this.color = color
    }
}

let rec1 = new rectangle(100, 100, 'blue')
// console.log(rec1.area);
let square = new shape(25, 25)
console.log(square);
square.widthTimesX = 4

// console.log(square.area);

// console.log(square.calArea('rectangle'));


class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

// killerRabbit.speak('die!!! please');

const date1 = new Date()
let day = date1.getDay()
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let dayName = dayNames[day];
// console.log(date.getTime());

let today = new Date();
let anotherDay = new Date(2021,1,19, 11, 55)
let diff = anotherDay - today;
console.log('diff',diff);
let days = diff / (1000 * 60 * 60 * 24);
console.log('days',days);

// setInterval(() => {
//    
//     console.log(date.getHours(), date.getMinutes(), date.getSeconds());
// }, 1000);

let date = document.getElementById('datetime');
date.addEventListener("change",function(event){
    let date = new Date(event.target.value);
    console.log(date);
});

function displayStudentInfo(objUser){
    
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});