[{
    model: 'ford focus',
    color: 'gold'
}]

[{
    "model": "ford focus",
    "color": "gold"
}]

// fetch('')
fetch("./countries.json")
.then((res)=>{
    return res.json()
})
.then((data)=> {
    try {
        console.log(data);
    } catch (error) {
        
    }
    console.log('thing');
    // console.log(data.info.license_text);
    // console.log(data.data.api_model);
    // console.log(data.data.classification_titles[1]);
})

fetch('./countries.json')
.then((res)=> {
    return res.json()
})
.then((countyList) => {
    let container = document.getElementById('container')
    for (const county of countyList) {
        // creating the elements
        let div = document.createElement('div')
        let img = document.createElement('img')
        let countyName = document.createElement('h3')
        let capital = document.createElement('p')
        let langs = document.createElement('p')

        // filling elements with content
        countyName.textContent = county.name
        capital.textContent = county.capital
        langs.textContent = county.languages.join(', ')
        img.setAttribute('src', county.image_link)
        img.style.height = '100px'

        // adding elements to the div
        div.appendChild(img)
        div.appendChild(countyName)
        div.appendChild(capital)
        div.appendChild(langs)

        //adding the div to the dom

        container.appendChild(div)

    }
})