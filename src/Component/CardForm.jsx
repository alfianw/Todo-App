import React from "react";

const CardForm = ({title}) =>{
    return(
        <div className="cardForm">
            <input type="checkbox" />
            <h1>{title}</h1>
        </div>
    )
}

export default CardForm