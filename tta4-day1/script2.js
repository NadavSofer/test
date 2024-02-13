

function sayGoodDay(name) {
    console.log(`${name} have a good day!!!`);
}

let arr =  ['israel', 'odaya', 'yaffa']
let nadavCar = {
    keyword: 'value',
    carModel: 'ford focus',
    color: 'gold',
    year: 2016,
    testList: [2021, 2022, 2023],
    passedTest: true,
    ownerInfo: {
        firstName: 'nadav',
        LastName: 'sofer',
        age: 25
    }
}

let thkajbdkgnodgv = document.getElementById('thing')
thkajbdkgnodgv.textContent = 'jadhfhoughoiqerguoqerdftherhrwthr6wh'

console.log(nadavCar.color);


for (const name of arr) {
    sayGoodDay(name)
}

const double = (num) => {
    return num * 2
}

let number = 40555

if (number == 40) {
    console.log(double(number));
}