import React from "react";
import { Link } from "react-router-dom";
import "../Style/Style-Component/FooterForm.css"

const FooterForm = ({ card, onDelete, darkMode }) => {

    const handleDeleteAll = () => {
        onDelete(card);
    }

    return (
        <div className={`footerForm ${darkMode ? "dark-mode" : ""}`}>
            <div className="footerItems">
                <h3><span>{card}</span> items left</h3>
            </div>
            <div className="footerList">
                <Link to='all' className={`btnFooter ${darkMode ? "dark-mode" : ""}`}>All</Link>
                {/* <Link to='active' className={`btnFooter ${darkMode ? "dark-mode" : ""}`}>Active</Link> */}
                <Link to='completed' className={`btnFooter ${darkMode ? "dark-mode" : ""}`}>Completed</Link>
            </div>
            <button className={`btnFooter ${darkMode ? "dark-mode" : ""}`} onClick={handleDeleteAll}>Clear Completed</button>
        </div>
    )
}

export default FooterForm;