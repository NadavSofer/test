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


// let counter = 0;
// const intervalId = setInterval(() => {
//     console.log(counter);
//     counter++;

//     if (counter > 5) {
//         clearInterval(intervalId);
//         console.log('Interval cleared at counter 5');
//     }
// }, 1000);


let counter = 0;
let intervalId = setInterval(intervalFunction, 1000);

function intervalFunction() {
    console.log(counter);
    counter++;

    if (counter === 5) {
        clearInterval(intervalId);
        console.log('Interval cleared at counter 5');
    }
}

