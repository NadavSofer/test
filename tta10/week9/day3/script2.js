// x.name()
let numbers = [45, 78, 34, 31, 91]

let doubledNumbers = numbers.map((num, index) => {
    return num * 2
})

// console.log(doubledNumbers);

let arr = [1, 1, 1, 1, 1]

let numsTimesIndex = arr.map((num, index) => {
    return `${num} * ${index} = ${num * index}`
})

// console.log(numsTimesIndex);

let names = ['nadav', 'shosh', 'sarah', 'odaya']

let correctNames = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})

// console.log(correctNames);

let myArr = [10, 20, 30, 40];

let newArr = myArr.map((val, i, arr) => {
    return {
        value: val,
        index: i
    };
});

// console.log(newArr);

//-----------------------------------------------

let numbers2 = [45, 78, 34, 31, 91]

let biggerThen40 = numbers2.filter((num) => {
    return num > 40
})

// console.log(biggerThen40);

let names2 = ['nadav', 'shosh', 'sarah', 'odaya']

let notStart = names2.filter((name) => {
    return name[0] == 's'
})

// console.log(notStart);

//--------------------------------------------------

let numbers3 = [45, 78, 34, 31, 91]

let reduced = numbers3.reduce((acc, num)=>{
    return acc + num 
})

// console.log(reduced);

let bills = [45, 79, 157, 389, 67]

let account = 1000

let accountAfter = bills.reduce((acc, bill)=> {
return acc - bill
}, account)

// console.log(accountAfter);

//--------------------------------------------


let a, b, c;
[a, b, c] = [10, 20, 30]

// console.log(a);


let colors = ['red', 'blue']
let newcolors = ['pink', 'purple', 'orange', ...colors]

// console.log(newcolors);

let [pink, purple, ...otherColors] = newcolors

// console.log(otherColors);

let newcolors2 = newcolors
let newcolors3 = [...newcolors]

newcolors.push('green')

console.log(newcolors2);
console.log(newcolors3);