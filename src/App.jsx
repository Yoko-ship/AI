import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/MainPage';
import Coding from './components/Coding';


function App() {


  return (
    <>
      <Router>
      <header>
        <div className='div-span'>
          <span>AI MODEL</span>
        </div>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/coding">Кодинг</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
        </ul>
      </header>

        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path='/coding' element={<Coding/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
