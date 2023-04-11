import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../../../utils/fakedb';

const JobDetails = () => {

    const [viewJob, setViewJob] = useState({});

    const dynamicId = useParams();

    const jobs = useLoaderData()

    useEffect(() => {
        if (jobs) {
            const viewData = jobs.find(job => job.id === dynamicId.id);
            setViewJob(viewData);
        }

    }, [])

    // console.log(viewJob);
    const { id, job_title, company_logo, company_name, job_type, job_time, location, salary, job_description, job_responsibility, experiences, educational_requirements, phone, email, address } = viewJob;

    const handleApplyNow = (job) => {
        // let newCart = [];
        // const exist = cartArr.find(existingProduct => existingProduct.id === product.id)

        // if (!exist) {
        //     product.quantity = 1;
        //     newCart = [...cartArr, product]
        // }
        // else {
        //     const rest = cartArr.filter(existingProduct => existingProduct.id !== product.id)
        //     exist.quantity = exist.quantity + 1;
        //     newCart = [...rest, exist]
        // }

        // toast.success('Successfully Added');
        // setCartArr(newCart)
        alert("applied")
        addToDb(job.id)
    }

    return (
        <div className='job-details-container'>
            <h1>Job Details</h1>
            <div className='job-details'>
                <div className='left-section'>
                    <p>{id}</p>
                    <p> <strong>Job Description: </strong> {job_description}</p>
                    <p> <strong>Job Responsibility: </strong> {job_responsibility}</p>
                    <p> <strong>Educational Requirements:</strong> <br />{educational_requirements}</p>
                    <p> <strong>Experiences::</strong> <br />{experiences} Years in this field.</p>

                </div>
                <div className='right-section'>
                    <div>
                        <h3>Job Details</h3>
                        <hr />
                        <p><FontAwesomeIcon icon={faCircleDollarToSlot} /> <strong>Salary:</strong> {salary}</p>
                        <p><FontAwesomeIcon icon={faCircleDollarToSlot} /> <strong>Job Title :</strong> {job_title}</p>

                        <h3>Contact Information</h3>
                        <hr />

                        <p><FontAwesomeIcon icon={faCircleDollarToSlot} /> <strong>Phone :</strong> {phone}</p>
                        <p><FontAwesomeIcon icon={faCircleDollarToSlot} /> <strong>Email :</strong> {email}</p>
                        <p><FontAwesomeIcon icon={faCircleDollarToSlot} /> <strong>Address :</strong> {address}</p>
                    </div>
                    <button onClick={() => handleApplyNow(viewJob)} className='btn-secondary'>Apply Now</button>

                </div>
            </div>
        </div >
    );
};

export default JobDetails;