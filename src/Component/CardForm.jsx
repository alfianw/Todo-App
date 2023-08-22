import React, { useState } from "react";
import "../Style/Style-Component/CardForm.css"
import cross from "../assets/images/icon-cross.svg"

const CardForm = ({ title, onDelete, darkMode, onDuplicate, onDuplicateActive }) => {

    const [font, setFont] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleFont = () => {
        setFont(!font);
        onDuplicateActive(title);
    }

    const handleDelete = () => {
        onDelete(title);
    }
    return (
        <div className={`cardForm1 ${darkMode ? "dark-mode" : ""}`}>
            <div className={`warpCard1 ${darkMode ? "dark-mode" : ""}`}>
                <input type="checkbox" id="checkBoxCard" onChange={handleFont} />
                <h1 className={`cardText ${darkMode ? "dark-mode" : ""} ${font ? "activet" : ""}`}>{title}</h1>
            </div>
            <button id="deleteBtn" onClick={handleDelete}><img src={cross} alt="" id="imgDelete" /></button>
        </div>
    )
}

export default CardForm