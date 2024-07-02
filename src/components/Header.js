import React from 'react';
import '../style/Header.css'
import { useState, useEffect } from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Header = ({ isLogin, logout,setIsLogin }) => {
    
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }
    useEffect(() => {
        const loggedIn = localStorage.getItem('isLogin') === 'true'
        setIsLogin(loggedIn)
      }, [isLogin])

    return (
        <div className='header'>
            <div className='logo'>

                <NavLink to='/'>
                    <h3>Dekiru</h3>
                </NavLink>
            </div>
            <div className='menu'>
                {isLogin ? (
                    <ul>
                        <li onClick={handleLogout}>
                            <NavLink >
                                Thoát
                            </NavLink>
                        </li>


                    </ul>) : (
                    <ul>
                        <li >
                            <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/login'>
                                Đăng nhập
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/register'>
                                Đăng ký
                            </NavLink>
                        </li>

                    </ul>
                )}

            </div>
        </div>
    );
};

export default Header;