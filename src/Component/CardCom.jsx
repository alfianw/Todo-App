import React, { useState } from "react";
import "../Style/Style-Component/CardForm.css"
import cross from "../assets/images/icon-cross.svg"

const CardCom = ({ title, onDelete, darkMode, cancelHandle}) => {

    const [button, setButton] = useState(localStorage.getItem(title) === 'true');

    const handleClick = () => {
        const newValue = !button;
        setButton(newValue);
        localStorage.setItem(title, newValue);
        cancelHandle()
    };

    const handleDelete = () => {
        onDelete();
    }

    return (
        <div className={`cardForm1 ${darkMode ? "dark-mode" : ""}`}>
            <div className={`warpCard1 ${darkMode ? "dark-mode" : ""}`}>
                <button onClick={() => { handleClick() }} className={`btnCard ${button ? "activet1" : ""}`}>{button ? "Cancel" : "On Going"}</button>
                <h1 className={`cardText ${darkMode ? "dark-mode" : ""}`}>{title}</h1>
            </div>
            <button id="deleteBtn" onClick={handleDelete}><img src={cross} alt="" id="imgDelete" /></button>
        </div>
    )
}

export default CardCom