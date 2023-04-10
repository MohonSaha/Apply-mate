import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';

const JobDetails = () => {

    const [viewJob, setViewJob] = useState({});

    const dynamicId = useParams();
    // console.log(dynamicId.id);

    const jobs = useLoaderData()
    console.log(jobs);

    useEffect(() => {

        if (jobs) {
            const viewData = jobs.find(job => job.id === dynamicId.id);
            setViewJob(viewData);
        }

    }, [])

    console.log(viewJob);
    const { id, job_title, company_logo, company_name, job_type, job_time, location, salary, job_description, job_responsibility, experiences, educational_requirements } = viewJob;


    return (
        <div className='job-details-container'>
            <h1>Job Details</h1>
            <div className='job-details'>
                <div className='left-section'>
                    <p> <strong>Job Description: </strong> {job_description}</p>
                    <p> <strong>Job Responsibility: </strong> {job_responsibility}</p>
                    <p> <strong>Educational Requirements:</strong> <br />{educational_requirements}</p>
                    <p> <strong>Experiences::</strong> <br />{experiences} Years in this field.</p>
                
            </div>
            <div className='right-section'>

            </div>
        </div>
        </div >
    );
};

export default JobDetails;