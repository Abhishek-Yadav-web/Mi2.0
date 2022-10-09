import React from 'react'
import '../styles/heading.css'

const Heading = ({text}) => {
    return (
        <>
            <div className="headingBx">
                <div></div>
                <p>{text}</p>
                <div></div>
            </div>
        </>
    )
}

export default Heading
