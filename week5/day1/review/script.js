let title = document.getElementById('title')
// let title = document.querySelector('#title')

title.textContent = 'hello'
title.style.color = 'red'

let body = document.getElementsByTagName('body')[0]
let p = document.createElement('p')
p.innerText = 'nadav'
p.classList.add('text')
body.appendChild(p)

// title.remove()
// let prop = prompt('name?')
// console.log(prop);

let myform = document.forms.personform


myform.addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    console.log(formData);
});