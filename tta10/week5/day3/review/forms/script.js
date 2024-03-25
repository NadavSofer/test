let personForm = document.forms.personform

// console.log(personForm);

let nameInput = document.getElementById('name')
let nameResult = document.getElementById('nameResult')

nameInput.addEventListener('change', (event)=>{
    // console.log(event.target.value);
    nameResult.textContent = event.target.value
})

personForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(e);
})