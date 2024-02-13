const hello = (person) => {
    console.log(`hello ${person}, how are you?`);
}

function bye(person) {
    console.log(`bye ${person}`);
}

let thing = 'thingy'


module.exports = {
    hello,
    bye,
    stuff:thing
}