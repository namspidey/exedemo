import React from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Profile = ({ logout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }
    return (
        <div>
            <button onClick={handleLogout}>
                <NavLink >
                    Logout
                </NavLink>
            </button>
        </div>
    );
};

export default Profile;