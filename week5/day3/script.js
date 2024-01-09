let button = document.getElementsByTagName('button')[0]

function raphy() {
    alert('hello');
}


// ----------------------------------------------
let ul = document.getElementById('movies');
let ilana = 1

function boris(element) {
    element.style.color = 'red'
}
function addLine() {
    let li = document.createElement('li')
    li.textContent = `line number ${ilana}`
    boris(li)
    ul.appendChild(li)
    ilana++
}

let button2 = document.getElementById('button')

let changeP = document.getElementById('onchange')
function fonchange(e) {
    changeP.textContent = e.target.value
}