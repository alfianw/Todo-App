import React, { useState } from "react";
import "../Style/Style-Component/Form.css"
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'
import FooterForm from "./FooterForm";
import CardForm from "./CardForm";


const Form = () => {

    const [imageIndex, setImageIndex] = useState(0)

    const images = [
        moon,
        sun
    ]

    const handleClick = () => {
        setImageIndex((imageIndex + 1) % images.length)
    }

    const [cards, setCards] = useState([]);
    const [title, setTitle] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (title) {
        setCards([...cards, { title }]);
        setTitle('');
      }else if(!title){
        alert("none")
      }
    };

    return (
        <div className="form">
            <div className="cardForm">
                <div className="headForm">
                    <h1>TODO</h1>
                    <button onClick={handleClick} id="btnDarkMood">
                        <img src={images[imageIndex]} alt="" />
                    </button>
                </div>
                <form action="" id="inputForm" onSubmit={handleSubmit}>
                    <button id="btnInput" type="submit">Input</button>
                    <input type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="formInput" 
                        placeholder="Currently typing" />
                </form>
                <div className="imputContainer">
                    {cards.map((card, index) => (
                        <CardForm key={index} title={card.title}/>
                    ))}
                </div>
                <FooterForm />
            </div>
        </div>
    )
}

export default Form