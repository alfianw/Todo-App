import React from "react";
import CardCom from "./CardCom";

const CardCompleted = ({ isDarkMode, cards, handleCardDelete, cancelHandle}) => {

    return (
        <div className={`imputContainer ${isDarkMode ? "dark-mode" : ""}`}>
            {cards.map((card, index) => (
                <CardCom
                    key={index}
                    title={card.title}
                    darkMode={isDarkMode}
                    onDelete={() => handleCardDelete(card.title)}
                    cancelHandle={() => cancelHandle(card.title) }
                />
            ))}
        </div>
    )
}

export default CardCompleted