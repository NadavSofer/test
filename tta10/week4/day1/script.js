function sayHello (name, age, eyeColor='brown') {
    console.log(`hello ${name}, you are ${age} years old, your eyes are ${eyeColor}`);
}

// sayHello('yaffa', 24, 'brown')
// sayHello('adi')

function change(usd) {
    return usd*3.63;
}
// change(50)
console.log(`50 dollar = ${change(50)} shekel`);

function change2(nis) {
    console.log(nis * 0.28);
}

// change2(80)

function familyAge (myAge) {
    console.log(`my age is: ${myAge}. my mother's age is: ${myAge*2}. my father's age is: ${myAge*2*1.2}`);
}

// console.log(familyAge(27));

function myAge () {
    let myAge = 25
    return myAge
}

function motherAge(myAge) {
    console.log(myAge*2);
}

motherAge(myAge())

function myfunc () {

}

const myfunc2 = () => {

}