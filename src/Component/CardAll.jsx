import React from "react";
import CardForm from "./CardForm";

const CardAll = ({ isDarkMode, cards, handleCardDelete,handleCardDuplicateActive }) => {
    return (
        <div className={`imputContainer ${isDarkMode ? "dark-mode" : ""}`}>
            {cards.map((card, index) => (
                <CardForm
                    key={index}
                    title={card.title}
                    onDelete={() => handleCardDelete(card.title)}
                    darkMode={isDarkMode}
                    onDuplicate={() => handleCardDuplicateActive(card.title)}
                />
            ))}
        </div>
    )
}

export default CardAll