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



for (const iterator of object) {
    let test = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute('src', 'link')
}