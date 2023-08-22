import React from "react";
import CardForm from "./CardForm";

const CardActive = ({ isDarkMode, activeCards, handleCardDelete, handleCardDuplicateActive }) => {
    return (
        <div className={`imputContainer ${isDarkMode ? "dark-mode" : ""}`}>
            {activeCards.map((card, index) => (
                <CardForm
                    key={index}
                    title={card.title}
                    onDelete={() => handleCardDelete(card.title)}
                    onDuplicate={() => {}}
                    onDuplicateActive={() => handleCardDuplicateActive(card.title)}
                    darkMode={isDarkMode}
                />
            ))}
        </div>
    )
}

export default CardActive