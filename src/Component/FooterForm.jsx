import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Style-Component/FooterForm.css"

const FooterForm = ({ card, onDelete, darkMode}) => {

    const handleDeleteAll = () => {
        onDelete(card);
    }

    const [activePage, setActivePage] = useState("")

    const handleActivePage = (page) => {
        setActivePage(page)
    }

    return (
        <div className={`footerForm ${darkMode ? "dark-mode" : ""}`}>
            <div className="footerItems">
                <h3><span>{card}</span> items left</h3>
            </div>
            <div className="footerList">
                <Link to='all'
                    onClick={() => { handleActivePage("all") }}
                    className={`btnFooter ${darkMode ? "dark-mode" : ""} 
                ${activePage === "all" ? "act" : ""}`
                    }>All</Link>
                {/* <Link to='active' className={`btnFooter ${darkMode ? "dark-mode" : ""}`}>Active</Link> */}
                <Link to='completed'
                    onClick={() => { handleActivePage("completed") }}
                    className={`btnFooter ${darkMode ? "dark-mode" : ""} 
                 ${activePage === "completed" ? "act" : ""}`}
                >Completed</Link>
            </div>
            <button className={`btnFooter ${darkMode ? "dark-mode" : ""}`} onClick={handleDeleteAll}>Delete All Tasks</button>
        </div>
    )
}

export default FooterForm;