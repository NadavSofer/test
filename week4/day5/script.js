// alert('hello! this is an alert')

// let conf = confirm('are you learning?')
// if (conf == true) {
//     alert('good job!')
// } else {
//     alert('no good!')
// }

let prop = prompt('what is your favorite number?')
if (!(isNaN(prop))) {
    if (prop == 7) {
        alert('hey Sarah!')
    } else if (prop == 5) {
        alert('hey Nadav')
    } else {
        alert('hey guest');
    }
} else {
    alert('not a number')
}
