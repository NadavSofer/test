// let title = document.getElementById('title')
// let title = document.querySelector('#title')

// title.textContent = 'hello'
// title.style.color = 'red'

// let body = document.getElementsByTagName('body')[0]
// let p = document.createElement('p')
// p.innerText = 'nadav'
// p.classList.add('text')
// body.appendChild(p)

// title.remove()
// let prop = prompt('name?')
// console.log(prop);

// let myform = document.forms.personform


// myform.addEventListener('submit', function(event) {
//     event.preventDefault();

//     let formData = new FormData(event.target);
//     console.log(formData);
// });

//-------------------------------------------------


let title = document.getElementById('title');
let titleByClass = document.getElementsByClassName('headers')[0];
let titleByTag = document.getElementsByTagName('h1')[0];
let titleBySelector = document.querySelector('.headers')
// console.log(titleBySelector);

let body = document.getElementsByTagName('body')[0]
console.log(body.innerHTML);

let p = document.createElement('p')
p.textContent = 'hello world!!!'
p.style.backgroundColor = 'pink'
p.style.width = 'fit-content'
p.style.padding = '16px'
body.appendChild(p)

let div = document.createElement('div')
div.innerHTML = '<h3 id="test">thing</h3> <h4 class="headers">thing2</h4>'

div.classList.add('thing', 'fish')
div.classList.remove('fish')
div.classList.replace('thing', 'sarah')
body.appendChild(div)