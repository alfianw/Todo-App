import React from "react";
import CardForm from "./CardForm";

const CardActive = ({ isDarkMode, cards, handleCardDelete}) => {
    return (
        <div className={`imputContainer ${isDarkMode ? "dark-mode" : ""}`}>
            {cards.map((card, index) => (
                <CardForm
                    key={index}
                    title={card.title}
                    onDelete={() => handleCardDelete(card.title)}
                />
            ))}
        </div>
    );
};

export default CardActive