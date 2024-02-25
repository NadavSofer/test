// let personForm = document.forms[0]
// let personForm2 = document.forms.personform
// let elements = personForm.elements
// let age = elements.age
// let ageValue = age.value
// ageValue = 50
// console.log(ageValue);

function sayHello() {
    alert('Hello!!!')
}

let cake = document.getElementById('cake')
cake.addEventListener('mouseout', sayHello, true)
cake.addEventListener('click', ()=>{
    console.log('cheesecake');
})

let getInfo = document.getElementById('getinfo')
getInfo.addEventListener('click', (e)=>{
    console.log(e.target);
    console.log(e.type);
    console.log(e);
})