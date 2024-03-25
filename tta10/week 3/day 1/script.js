let name = 'value'
let str = 'text'
let num = 6
let bool = true
let un;
let v = null  
let array = [12, 15, 17, 'num']
let object = {
    key: 'value',
    name: 'Nadav'
}
let x = str.indexOf('x')
// console.log(x); 

// ---------------------------

let str2 = 'hello, its me '+ str + num + bool
let str3 = "hello it's me" 
let str4 = `${str} text ${num}`

// console.log(str4);


let sentence = 'Hello Sarah, HOW ARE YOU?'
// console.log(sentence.toLowerCase());
// console.log('hello' * 5);

// console.log(10.6569842486.toFixed(0));

// -----------------------
let users = ['mike', 'steve', 'greg']
users.push('sarah')
users.pop()
users.splice(1, 0, 'yaffa', 'odaya')

let first3 = users.slice(0, 3)
console.log(users);
console.log(first3);