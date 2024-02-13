fetch('https://restcountries.com/v3.1/subregion/northern europe')
.then(res => {
    return res.json()
})
.then(data => {
    console.log(data);

    let div = document.getElementById('test')

    for (const country of data) {
        let p = document.createElement('p')
        p.textContent = country.name.common
        div.appendChild(p)
    }
})