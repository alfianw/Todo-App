import React from "react";
import "../Style/Style-Component/FooterForm.css"

const FooterForm = () =>{
    return(
        <div className="footerForm">
            <div className="footerItems">
                <h3><span>3</span> items left</h3>
            </div>
            <div className="footerList">
                <button id="btnFooter">All</button>
                <button id="btnFooter">Active</button>
                <button id="btnFooter">Completed</button>
            </div>
            <button id="btnFooter">Clear Completed</button>
        </div>
    )
}

export default FooterForm;