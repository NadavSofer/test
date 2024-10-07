// (function thing() {
//     console.log(x);
//     var x = 1
//     console.log(x);
// })()

// function testlong(num) {
//     return num * 1000
// }

// const test = num => num * 1000

// say('fish')

// function say(word) {
//     console.log(word)
// }

function xFunc(x) {
    function yFunc(y) {
        return x + y;
    }
    return yFunc;
}

let inside = xFunc(5);

console.log(inside(8));

// Example of a function that logs messages with a prefix
function logger(prefix) {
    return function (message) {
        console.log(`${prefix}: ${message}`);
    };
}

const errorLogger = logger("ERROR");
const infoLogger = logger("INFO");

errorLogger("Something went wrong!"); // Output: ERROR: Something went wrong!
infoLogger("This is an informational message."); // Output: INFO: This is an informational message.
