import React, { useState } from "react";
import "../Style/Style-Component/Form.css"
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'
import FooterForm from "./FooterForm";
import CardForm from "./CardForm";


const Form = ({ isDarkMood, handleClick }) => {

    const images = [
        moon,
        sun
    ]

    const [cards, setCards] = useState([]);
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title) {
            setCards([...cards, { title }]);
            setTitle('');
        } else if (!title) {
            alert("Can not be empty!")
        }
    };

    const handleCardDelete = (titleToDelete) => {
        const updatedCards = cards.filter(card => card.title !== titleToDelete);
        setCards(updatedCards);
    }

    const handleDeleteAllCards = () => {
        setCards([]);
    };

    return (
        <div className={`form ${isDarkMood ? "dark-mode" : ""}`}>
            <div className={`cardForm ${isDarkMood ? "dark-mode" : ""}`}>
                <div className={`headForm ${isDarkMood ? "dark-mode" : ""}                                                                              `}>
                    <h1>TODO</h1>
                    <button onClick={handleClick} id="btnDarkMood">
                        <img src={images[isDarkMood ? 1 : 0]} alt="" />
                    </button>
                </div>
                <form action="" className={`inputForm ${isDarkMood ? "dark-mode" : ""}`} onSubmit={handleSubmit}>
                    <button id="btnInput" type="submit">Input</button>
                    <input type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`formInput ${isDarkMood ? "dark-mode" : ""}`}
                        placeholder="Currently typing" />
                </form>
                <div className={`imputContainer ${isDarkMood ? "dark-mode" : ""}`}>
                    {cards.map((card, index) => (
                        <CardForm key={index}
                            title={card.title} onDelete={() => handleCardDelete(card.title)}
                            darkMode={isDarkMood}
                            onDarkModeToggle={handleClick} />
                    ))}
                </div>
                <FooterForm card={cards.length}
                    onDelete={handleDeleteAllCards}
                    darkMode={isDarkMood} />
            </div>
        </div>
    )
}

export default Form