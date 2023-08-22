import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import moon from "./assets/images/icon-moon.svg"
import sun from './assets/images/icon-sun.svg'
import CardAll from './Component/CardAll';
import CardActive from './Component/CardActive';

function App() {

  // untuk darkmode
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleClick = () => {
    setIsDarkMode(!isDarkMode)
  }

  //mengganti gambar darkmode 
  const images = [
    moon,
    sun
  ]

  // menambahkan card baru
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [activeCards, setActiveCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      setCards([...cards, { title }]);
      setTitle('');
    } else if (!title) {
      alert("Can not be empty!")
    }
  };

  // fungsi delete card

  const handleCardDelete = (titleToDelete) => {
    const updatedCards = cards.filter(card => card.title !== titleToDelete);
    setCards(updatedCards);
  }

  // fungsi delete semua card
  const handleDeleteAllCards = () => {
    setCards([]);
  };


  const handleCardDuplicate = (titleToDuplicate) => {
    const cardToDuplicate = cards.find(card => card.title === titleToDuplicate);
    if (cardToDuplicate) {
      const cardExists = cards.some(card => card.title === cardToDuplicate.title);
      if (!cardExists) {
        setCards([...cards, { title: cardToDuplicate.title }]);
      }
    }
  }

  const handleCardDuplicateActive = (titleToDuplicate) => {
    const cardToDuplicate = cards.find(card => card.title === titleToDuplicate);
    if (cardToDuplicate) {
        const cardExists = activeCards.some(card => card.title === cardToDuplicate.title);
        if (!cardExists) {
            setActiveCards([...activeCards, { title: cardToDuplicate.title }]);
        }
    }
}
    console.log(activeCards)
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home
            isDarkMode={isDarkMode}
            handleClick={handleClick}
            images={images}
            handleSubmit={handleSubmit}
            cards={cards}
            title={title}
            setTitle={setTitle}
            handleCardDelete={handleCardDelete}
            handleDeleteAllCards={handleDeleteAllCards}
          />}>
            <Route path='/all' element={<CardAll
              isDarkMode={isDarkMode}
              cards={cards}
              title={title}
              handleCardDelete={handleCardDelete}
              handleCardDuplicate={handleCardDuplicate}
            />} />
            <Route path='active' element={<CardActive
              isDarkMode={isDarkMode}
              activeCards={activeCards}
              title={title}
              handleCardDelete={handleCardDelete}
              handleCardDuplicateActive={handleCardDuplicateActive}
            />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
