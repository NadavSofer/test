let numbers = [1,2,3,4,5]
let names = ['nadav', 'yaffa', 'israel']

// for (const number of numbers) {
//     let bigNumber = number + 10
//     console.log(bigNumber);
// }
// console.log(bigNumber);

// for (const number of names) {
//     console.log(number.toUpperCase());
// }

let obj = {
    name: 'nadav',
    age: 25
}

// for (const key in obj) {
//     console.log(key, '-', obj[key]);

// }

// for (let index = 0; index < names.length; index++) {
//     console.log(names[index]);
    
// }


let counter = 0
// while (counter < names.length) {
//     counter++
//     console.log(counter);
// }

do {
    counter++
    console.log(counter);
} while (counter < names.length);



if (counter % 2 == 0) {
    
}

for (let index = 0; index <= 15; index++) {
    if (index % 2 == 0) {
        console.log(index + ' is even');
    } else {
        console.log(index + ' is odd');
    }
}

let names2= ["john", "sarah", 23, "Rudolf",34]

for (let index = 0; index < names2.length; index++) {
    if (typeof names2[index] == 'string') {
        let nameItem = names2[index]
        if (!(nameItem[0] === nameItem.toUpperCase()[0])) {
            console.log(nameItem);
        }
    }
}