import React from 'react';
import './Home.css'
import Banner from '../../../assets/All Images/banner-img.png'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='banner-text'>
                <h1>One Step <br /> 
                Closer To Your <br /> 
                <span className='special-text'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn-secondary'>Get Started</button>
            </div>

            <div className='banner-img'>
                <img src={Banner} alt="" />
            </div>
        </div>
    );
};

export default Home;