import React from 'react';
import './CartItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const CartItem = ({ job }) => {

    const { id, job_title, company_logo, company_name, job_type, job_time, location, salary, job_description, job_responsibility, experiences, educational_requirements, phone, email, address } = job;

    return (
        <div className='review-item'>
            <img src={company_logo} alt="" />
            <div className='review-details'>
                <h3 className='job-title'>{job_title}</h3>
                <p className='company-name'>{company_name} </p>
                <div>
                    <button className='btn-outline'>{job_type}</button>
                    <button className='btn-outline time-btn'>{job_time}</button>
                </div>
                <div className='flex'>
                    <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                    <p><FontAwesomeIcon icon={faCircleDollarToSlot} /> Salary: {salary}</p>
                </div>
            </div>
            <Link to={`/job/${id}`}><button className='btn-secondary'>View Details</button></Link>

        </div>
    );
};

export default CartItem;