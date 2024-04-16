import React from 'react'

const Button = ({text, action}) => {
    return (
        <button style={{
            padding: '1rem 2rem', 
            backgroundColor:'blue', 
            color:'aliceblue'}}
            onClick={action}>
                {text}
        </button>
    )
}

export default Button