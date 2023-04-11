import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleDollarToSlot, faBriefcase, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../../../utils/fakedb';
import toast, { Toaster } from 'react-hot-toast';

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
    const { id, job_title, salary, job_description, job_responsibility, experiences, educational_requirements, phone, email, address } = viewJob;

    const handleApplyNow = (job) => {
        addToDb(job.id)
        toast.success('Successfully Applied!');

    }

    return (
        <div className='job-details-container'>
            <h1>Job Details</h1>
            <div className='job-details'>
                <div className='left-section'>
                    
                    <p> <strong>Job Description: </strong> {job_description}</p>
                    <p> <strong>Job Responsibility: </strong> {job_responsibility}</p>
                    <p> <strong>Educational Requirements:</strong> <br />{educational_requirements}</p>
                    <p> <strong>Experiences:</strong> <br />{experiences} Years in this field.</p>

                </div>
                <div className='right-section'>
                    <div>
                        <h3>Job Details</h3>
                        <hr />
                        <p><FontAwesomeIcon className='font' icon={faCircleDollarToSlot} /> <strong>Salary:</strong> {salary}(Per Month)</p>
                        <p><FontAwesomeIcon className='font' icon={faBriefcase} /> <strong>Job Title :</strong> {job_title}</p>

                        <h3 className='contract-info'>Contact Information</h3>
                        <hr />

                        <p><FontAwesomeIcon className='font' icon={faPhone} /> <strong>Phone :</strong> {phone}</p>
                        <p><FontAwesomeIcon className='font' icon={faEnvelope} /> <strong>Email :</strong> {email}</p>
                        <p><FontAwesomeIcon className='font' icon={faLocationDot} /> <strong>Address :</strong> {address}</p>
                    </div>
                    <button onClick={() => handleApplyNow(viewJob)} className='btn-secondary'>Apply Now</button>

                </div>
            </div>
        </div >
    );
};

export default JobDetails;