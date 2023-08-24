import React from "react";
import CardForm from "./CardForm";

const CardCompleted = ({ isDarkMode, cards, handleCardDelete, handleCardReactivate }) => {

    return (
        <div className={`imputContainer ${isDarkMode ? "dark-mode" : ""}`}>
            {cards.map((card, index) => (
                <CardForm
                    key={index}
                    title={card.title}
                    onDelete={() => handleCardDelete(card.title)}
                    onReactivate={() => handleCardReactivate(card.title)}
                />
            ))}
        </div>
    )
}

export default CardCompleted