import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link, NavLink, Navigate } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { useState, useEffect } from 'react';
import Courses from './pages/Courses';
function App() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLogin') === 'true'
    setIsLogin(loggedIn)
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.setItem('isLogin', 'false')
    setIsLogin(false)
  };

  return (
    <div className="App">
      <Header isLogin={isLogin} logout={logout} setIsLogin={setIsLogin}/>
      <Routes>
        <Route path='/' element={<Home isLogin={isLogin}/>} />
        <Route path='/login' element={<Login setIsLogin={setIsLogin}/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/courses' element={<Courses/>} />
      </Routes>
      
      {/* <Footer/> */}
    </div>
  );
}

export default App;
