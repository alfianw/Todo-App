import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import moon from "./assets/images/icon-moon.svg"
import sun from './assets/images/icon-sun.svg'
import CardAll from './Component/CardAll';
import CardCompleted from './Component/CardCompleted';
import CardActive from './Component/CardActive';

function App() {

  // untuk darkmode
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [activeCards, setActiveCards] = useState([]);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode)
  }

  //mengganti gambar darkmode 
  const images = [
    moon,
    sun
  ]

  // menambahkan card baru


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

    const updatedActiveCards = activeCards.filter(card => card.title !== titleToDelete);
    setActiveCards(updatedActiveCards);
  }

  // fungsi delete semua card
  const handleDeleteAllCards = () => {
    setCards([]);
  };

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
    setCards(storedCards);
  }, []);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);


  const handleCardDuplicateActive = (titleToDuplicate) => {
    const cardToDuplicate = cards.find(card => card.title === titleToDuplicate);
    const isCardActive = activeCards.some(card => card.title === titleToDuplicate);

    if (cardToDuplicate && !isCardActive) {
      setActiveCards([...activeCards, { title: cardToDuplicate.title }]);
    } else if (isCardActive === false) {
      setCancelCard([...cancelCard, { title: cardToDuplicate.title }]);
    }
  };

  return (
    <>
      <BrowserRouter basename='/Todo-App'>
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
              handleCardDuplicateActive={handleCardDuplicateActive}
            />} />
            <Route path='completed' element={<CardCompleted
              isDarkMode={isDarkMode}
              cards={activeCards}
              title={title}
              handleCardDelete={handleCardDelete}
            />} />
            {/* <Route path='active' element={<CardActive
              isDarkMode={isDarkMode}
              cards={cancelCard}
              title={title}
              handleCardDelete={handleCardDelete}
            />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App