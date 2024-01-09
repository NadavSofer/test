// function sayHi(phrase, who) {
//     alert( phrase + ', ' + who );
// }

// const sayhi = (phrase, who) => {
//     alert( phrase + ', ' + who );
// }

// setTimeout(sayHi, 5000, "Hello", "Sarah");

// setTimeout((phrase, who) => {
//     alert( phrase + ', ' + who );
// }, 5000, "Hello", "Sarah");

// let something = confirm('do you want to study in friday?')

// if (something) {
//     setTimeout(() => {
//         alert('you said yes')
//     }, 5000);

// } else {
//     function saidNo() {
//         alert('you said no')
//     }

//     setTimeout(saidNo, 5000)
// }

// let xfgnsfgnsfx = 0
// setInterval(() => {
//     console.log(xfgnsfgnsfx);
//     xfgnsfgnsfx++
// }, 3000);


let id;
function setInter() {
    let num = 0
    id = setInterval(function () {
        console.log(num);
        num++
    }, 1000);
}