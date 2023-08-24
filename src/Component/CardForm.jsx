import React, { useState } from "react";
import "../Style/Style-Component/CardForm.css"
import cross from "../assets/images/icon-cross.svg"

const CardForm = ({ title, onDelete, darkMode,onDuplicate }) => {

    const [button, setButton] = useState(localStorage.getItem(title) === 'true');

    const handleClick = () => {
      const newValue = !button;
      setButton(newValue);
      localStorage.setItem(title, newValue);
      onDuplicate(title);
    };

    const handleDelete = () => {
        onDelete();
    }
    return (
        <div className={`cardForm1 ${darkMode ? "dark-mode" : ""}`}>
            <div className={`warpCard1 ${darkMode ? "dark-mode" : ""}`}>
                <button onClick={() => { handleClick(); onDuplicate(title); }} className={`btnCard ${button ? "activet" : ""}`}>{button ? "Cancelled":"Finished" }</button>
                <h1 className={`cardText ${darkMode ? "dark-mode" : ""} ${button ? "activet" : ""}`}>{title}</h1>
            </div>
            <button id="deleteBtn" onClick={handleDelete}><img src={cross} alt="" id="imgDelete" /></button>
        </div>
    )
}

export default CardForm