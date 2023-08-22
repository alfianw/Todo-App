import React from "react";
import CardForm from "./CardForm";

const CardAll = ({ isDarkMode, cards, handleCardDelete, handleCardDuplicate }) => {
    return (
        <div className={`imputContainer ${isDarkMode ? "dark-mode" : ""}`}>
            {cards.map((card, index) => (
                <CardForm
                    key={index}
                    title={card.title}
                    onDelete={() => handleCardDelete(card.title)}
                    onDuplicate={() => handleCardDuplicate(card.title)}
                    onDuplicateActive={() => {}}
                    darkMode={isDarkMode}
                />
            ))}
        </div>
    )
}

export default CardAll