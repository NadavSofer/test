// let num = 5
// let string = 'word'
// let real = true

// console.log(num,string,real);

// for (let i = 1; i < 6; i++) {
//     console.log("i = " + i)
// }

// let colors = ['yellow', 'blue', 'red'] //| forgot part of the question 
// for (let i=0; i<colors.length; i++) {
//     console.log(colors[i]);
// }

// const obj = {name:'bob', age:20, pro:'Dr'}
// console.log(obj.age);

// function drinking(obj) {
//     obj = {name:'bob', age:20, pro:'Dr'} //| this is the parameter
//     if (obj.age>18) {
//         console.log(`${obj.name} its above the drinking age`);
//     } else {
//         console.log(`${obj.name} its not above the drinking age`);
//     }
// }
// drinking()

function calculateTax(amout, tax){
    amout = 100 //| this is the parameter
    tax = amout * 8 / 100 //| this is the parameter
    let totally = amout + tax
    console.log(totally+'$');
}
calculateTax()




