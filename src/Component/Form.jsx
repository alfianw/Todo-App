import React, { useState } from "react";
import "../Style/Style-Component/Form.css"
import FooterForm from "./FooterForm";
import { Outlet } from "react-router-dom";


const Form = ({ isDarkMood, handleClick, images, handleSubmit, cards,title,setTitle,handleCardDelete,handleDeleteAllCards }) => {

    return (
        <div className={`form ${isDarkMood ? "dark-mode" : ""}`}>
            <div className={`cardForm ${isDarkMood ? "dark-mode" : ""}`}>
                <div className={`headForm ${isDarkMood ? "dark-mode" : ""}                                                                              `}>
                    <h1>TODO</h1>
                    <button onClick={handleClick} id="btnDarkMood">
                        <img src={images[isDarkMood ? 1 : 0]} alt="" />
                    </button>
                </div>
                <form action="" 
                className={`inputForm ${isDarkMood ? "dark-mode" : ""}`} 
                onSubmit={handleSubmit}>
                    <button id="btnInput" type="submit">Input</button>
                    <input type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`formInput ${isDarkMood ? "dark-mode" : ""}`}
                        placeholder="Currently typing" />
                </form>
                <Outlet />
                <FooterForm card={cards.length}
                    onDelete={handleDeleteAllCards}
                    darkMode={isDarkMood} />
            </div>
        </div>
    )
}

export default Form