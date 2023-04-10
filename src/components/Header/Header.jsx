import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee, faX } from '@fortawesome/free-solid-svg-icons'


const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='header'>
            <div className='header-one'>
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
            </div>

            <div className='header-two'>
                <div className='header-container'>
                    <h2>ApplyMate</h2>
                    <span onClick={() => setOpen(!open)} className='bars-container'>
                        <span>{open ? <FontAwesomeIcon icon={faX} />
                            : <FontAwesomeIcon icon={faBars} />}</span>
                    </span>

                    {/* <div className={`header-container  ${open ? 'header-option' : 'header-option-toggle'}`}>

                        
                    </div> */}


                </div>
            </div>
        </div>
    );
};

export default Header;