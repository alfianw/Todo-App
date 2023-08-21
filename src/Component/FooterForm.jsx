import React from "react";
import { Link} from "react-router-dom";
import "../Style/Style-Component/FooterForm.css"

const FooterForm = ({card,onDelete, darkMode}) =>{

    const handleDeleteAll = () => {
        onDelete(card);
    }

    return(
        <div className={`footerForm ${darkMode ? "dark-mode" : ""}`}>
            <div className="footerItems">
                <h3><span>{card}</span> items left</h3>
            </div>
            <div className="footerList">
                <button className={`btnFooter ${darkMode ? "dark-mode" : ""}`}>All</button>
                <button className={`btnFooter ${darkMode ? "dark-mode" : ""}`}>Active</button>
                <button className={`btnFooter ${darkMode ? "dark-mode" : ""}`}>Completed</button>
            </div>
            <button className={`btnFooter ${darkMode ? "dark-mode" : ""}`}onClick={handleDeleteAll}>Clear Completed</button>
        </div>
    )
}

export default FooterForm;