import React, { useState } from "react";
import "../Style/Style-Pages/Home.css"
import Form from "../Component/Form";

const Home = ({isDarkMode, handleClick, images, handleSubmit, cards, title, setTitle,handleCardDelete,handleDeleteAllCards}) =>{

    return(
        <div className={`home ${isDarkMode ? "dark-mode" : ""}`}>
            <Form 
            isDarkMood={isDarkMode} 
            handleClick={handleClick}
            images={images}
            handleSubmit={handleSubmit}
            cards={cards}
            title={title}
            setTitle={setTitle}
            handleCardDelete={handleCardDelete}
            handleDeleteAllCards={handleDeleteAllCards}
            />
        </div>
    )
}

export default Home