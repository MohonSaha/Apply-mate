import React from 'react';
import './Job.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

    const { id, job_title, company_logo, company_name, job_type, job_time, location, salary, job_description, job_responsibility, experiences } = job;

    return (
        <div className='job'>
            <img src={company_logo} alt="" />
            <h3 className='job-title'>{job_title}</h3>
            <p className='conpany-name'>{company_name}</p>
            <div>
                <button className='btn-outline'>{job_type}</button>
                <button className='btn-outline time-btn'>{job_time}</button>
            </div>
            <div className='flex'>
                <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                <p><FontAwesomeIcon icon={faCircleDollarToSlot} /> Salary: {salary}</p>
            </div>
            <Link to="/job/:id"><button className='btn-details'>View Details</button></Link>
        </div>
    );
};

export default Job;