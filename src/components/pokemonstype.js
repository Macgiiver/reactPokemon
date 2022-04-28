import React from 'react'

const Pokemonstype = ({ type }) => {
    const style = type + " thumb-container";
    return (
        <div className="detail-wrapper"> 
            <h3>{type}</h3>
        </div>
    )
}

export default Pokemonstype