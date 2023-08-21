import React, { useState } from "react";
import "../Style/Style-Pages/Home.css"
import Form from "../Component/Form";

const Home = () =>{

    const [isDarkMood, setIsDarkMood] = useState(false)

    const handleClick = () => {
        setIsDarkMood(!isDarkMood)
    }

    return(
        <div className={`home ${isDarkMood ? "dark-mode" : ""}`}>
            <Form isDarkMood={isDarkMood} handleClick={handleClick}/>
        </div>
    )
}

export default Home