// let num = 5

// whatever()
// func_name()

// function whatever() {
//     console.log(num * 2);
// }

// let func_name = function () {
//     console.log(num * 3);
// }

(function(name){
    console.log(`hello, ${name}`);
})('nadav')

function verify(name) {
    function isShosh() {
        return name == 'Shosh'
    }

    if (isShosh()) {
        console.log('Hey Shosh');
    } else {
        console.log('Not Shosh!!!');
    }
}

verify('Shosh')

function add(num) {
    let counter = 0;
    function plus(x) {
        counter += x;
        console.log(counter);
    }
    return plus
}

add(5)(10)