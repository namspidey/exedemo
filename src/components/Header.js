import React from 'react';
import '../style/Header.css'
import { useState, useEffect } from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { CgProfile } from "react-icons/cg";
import { BsChatDots } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa";


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
                    <ul className='login-header'>
                        
                        <li >
                            <NavLink to='/courses' >
                            <FaList  className='ic'/>


                            </NavLink>
                        </li>
                        <li >
                            <NavLink to='/chat'>
                            <BsChatDots className='ic'/>


                            </NavLink>
                        </li>
                        <li >
                            <NavLink >
                            <IoNotificationsOutline  className='ic'/>

                            </NavLink>
                        </li>
                        <li >
                            <NavLink to='/profile'>
                            <CgProfile  className='ic' />
                            </NavLink>
                        </li>
                        {/* <li onClick={handleLogout}>
                            <NavLink >
                                Thoát
                            </NavLink>
                        </li> */}


                    </ul>) : (
                    <ul className='logout-header'>
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