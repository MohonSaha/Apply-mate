
export const customLoader = async() =>{


    const catagoryData = await fetch('data.json');
    const catagorys = await catagoryData.json();


    const jobsData = await fetch('jobsData.json');
    const jobs = await jobsData.json();


    return {catagorys, jobs};

}