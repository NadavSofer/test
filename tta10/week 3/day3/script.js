let arr = ['adi', 'odaya', 'yaffa']

let obj = {
    username: 'nadav sofer',
    role: 't',
    online: arr
}

let mydata = {
    name: 'nadav sofer',
    age: 25,
}
mydata.age = 26

mydata.eyeColor = 'green'

delete mydata.name

// console.log(mydata);

//-----------------------------------------
let myAge = 25
// if (myAge >= 21 ) {
//     console.log('nadav can drink');
// } 
// else if (myAge > 18 && myAge < 21) {
//     console.log('nadav can drink, not in the US');
// }
// else {
//     console.log("nadav can't drink");
// }

let password = 'nadav7887557858757898';

if (password.length > 18) {
    console.log('password is too long');
} else if (password.length < 8) {
    console.log('password is too short');
}
else {
    console.log('password is ok');
}