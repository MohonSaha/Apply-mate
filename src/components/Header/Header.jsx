import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h2>ApplyMate</h2>
            <div className='nav-item'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedjobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <button className='btn-primary'>
                Star Applying
            </button>
        </div>
    );
};

export default Header;