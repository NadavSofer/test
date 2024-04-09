import React from 'react'

const Text = ({name}) => {
    const hello = "hello, I'm in the Text component"
    const charactersJson = {
        "people": [
            {
                "id": "1",
                "name": "Luke Skywalker",
                "height": "172",
                "mass": "77",
                "hair_color": "blond",
            },
            {
                "id": "2",
                "name": "C-3PO",
                "height": "167",
                "mass": "75",
                "hair_color": "n/a",
            },
            {
                "id": "3",
                "name": "R2-D2",
                "height": "96",
                "mass": "32",
                "hair_color": "n/a",
            }
        ]
    }

    const characters = JSON.parse(JSON.stringify(charactersJson));


    return (
        <div>
            <p className='redText' style={{backgroundColor:'pink'}}>
                {hello}, {name}</p>
            {characters.people.map(person => (
                <ul key={person.id}>
                    <li>name: {person.name}</li>
                    <li>height: {person.height}</li>
                    <li>mass: {person.mass}</li>
                    <li>hair color: {person.hair_color}</li>
                </ul>
            ))}
        </div>
    )
}

export default Text