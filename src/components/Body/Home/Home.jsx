import React, { useState } from 'react';
import './Home.css'
import Banner from '../../../assets/All Images/banner-img.png'
import { useLoaderData } from 'react-router-dom';
import Catagory from '../Catagory/Catagory';
import Job from '../Job/Job';

const Home = () => {

   
    const { catagorys,  jobs } = useLoaderData();
     const [showAll, setShowAll] = useState(false);

    

    const handelShowAll = () =>{
        setShowAll(true);
    }

    return (
        <div>
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


            <div className='catagory-section'>
                <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='catagory'>
                    {
                        catagorys.map(catagory => <Catagory
                            catagory={catagory}
                            key={catagory.id}
                        ></Catagory>)
                    }
                </div>
            </div>


            <div className='job-section'>
                    <h2>Featured Jobs</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='job-container'>
                        {
                            jobs.slice(0, showAll ? 6 : 4).map(job=> <Job
                                job={job}
                                key={job.id}
                            ></Job>)
                        }
                    </div>

                
            </div>



            {
                !showAll && <span onClick={handelShowAll} className='see-more'>
                <button className='btn-primary'>See More</button>
                    </span>
            }

        </div>
    );
};

export default Home;