let obj = {
    fname: 'nadav',
    lname: 'sofer',
    age: 25,
    color: ['red', 'blue', 'green'],
    thing() {
        console.log('thing');
    },
    undefined: undefined,
    obj2: {
        test: 'yep'
    }
}

let jsonObj = JSON.stringify(obj, null, 2)
let unjson = JSON.parse(jsonObj)
let tojson = new Date().toJSON()


let arr = [1,4,2,3,5]

let nadavInfo = {
    key: 'value',
    fname: 'nadav',
    lname: 'sofer'
}

let myName = nadavInfo.fname
let {fname, lname} = nadavInfo

// for (const [key, value] of Object.entries(nadavInfo)) {
//     console.log(`the key of the value ${value} is ${key}`);
// }


const users = { user1: 18273, user2: 92833, user3: 90315 }
let test = (obj) =>{
    let outList = []
    for (const [key, value] of Object.entries(obj)) {
        outList.push([key, value * 2])
    }
    console.log(outList);
}

test(users)

// try {
//     // let test = someFunc()
//     throw new Error('img is null')
//     console.log('working code');
// } catch (e) {
//     console.log('sorry, something went wrong');
//     console.log(e);
// } finally {
//     console.log('will always happen');
// }
// console.log(unjson);

