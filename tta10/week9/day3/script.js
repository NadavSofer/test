let names = ['nadav', 'yaffa', 'sarah']

let capitalNames = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})

let reducedNames = names.reduce((sum, name) =>{
    return sum + name
})

// console.log(reducedNames);

// console.log(capitalNames);
// console.log(names);


let numbers = [500, 45, 30, 3, 2]

let valueTimesIndex = numbers.map((num, index) => {
    return `${num} * ${index} = ${num * index}`
})

let filteredNumbers = numbers.filter((value)=> {
    return value < 40
})
// console.log(filteredNumbers);

// console.log(valueTimesIndex);

let myArr = [10, 20, 30, 40];

let newArr = myArr.map((val, i, arr) => {
    return {
        value: val,
        index: i
    };
});

let reducedNumbers = myArr.reduce((acc, num) => {
    return acc * num
})

// console.log(reducedNumbers);

// console.log(newArr);


let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let filteredList = words.filter((word, index)=> {
    return word.length > 6
})

// console.log(filteredList);

//----------------------------------
let name1, name2, name3;
[name1, name2, name3] = ['nadav', 'yaffa', 'sarah']

// console.log(name1, name2, name3);

//-----------------------------------

let o = 'odaya'
let a = 'ariel'

let fullList = [o,a, ...names]

// console.log(fullList);

//--------------------------------
let arr = [10,54,87,23,49,45]

let [num1, num2, ...otherNums] = arr


// console.log(arr);
// console.log(num1);
// console.log(num2);
// console.log(otherNums);

//------------------------------

let arr2 = arr
let [...arr3] = arr
arr.push(37)

console.log('arr2:',arr2);
console.log('arr3', arr3);

// let alphabets = ["A", ..."BCD", "E"];
// console.log(alphabets);