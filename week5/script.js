function cTOf(celsius) {
    let times9 = celsius * 9
    let divide5 = times9 / 5
    let plus32 = divide5 + 32
    return plus32
}

console.log(cTOf(17));

function times9(number) {
    let out = number * 9
    return out
}

// let times9Out = times9(17)

function divide5() {
    let number = times9(17)
    let out = number / 5
    return out
}

// let divide5Out = divide5(times9Out)

function plus32() {
    let number = divide5()
    let out = number + 32
    return out
}

console.log(plus32());
