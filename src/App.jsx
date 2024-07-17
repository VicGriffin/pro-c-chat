import { useState } from 'react'
import { Route , Router,Routes , BrowserRouter } from 'react-router-dom'
import Home  from './pages/home/Home'
import Login  from './pages/login/Login.jsx'
import Register from './pages/signup/Signup.jsx'
import Header from './components/header/Header'
import './App.css'

function App() {

   return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
