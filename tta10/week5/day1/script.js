let element = document.getElementById('title')
element.textContent = 'hello'
element.style.color = 'red'


// console.log(document.getElementsByTagName('h1')[0]);

// console.log(document.getElementsByClassName('titles')[0]);

// console.log(document.querySelector('.titles'));


let thing = document.createElement('div');
let body = document.getElementsByTagName('body')[0]
let p = document.createElement('p')
p.textContent = 'i just added this'
thing.appendChild(p)
body.appendChild(thing)

let ul = document.createElement('ul');
let h3 = document.createElement('h3');
h3.textContent = 'this is a list:';
ul.appendChild(h3)
body.appendChild(ul)

let colors = ['red', 'yellow', 'black', 'blue', 'green', 'white']

for (const color of colors) {
    let li = document.createElement('li');
    li.textContent = color
    li.classList.add('color', color)
    ul.appendChild(li)
}

let red = document.getElementsByClassName('red')[0]
red.classList.replace('color', 'fishcake')
ul.removeChild(red)