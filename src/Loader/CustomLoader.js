import { getShoppingCart } from "../utils/fakedb";

export const customLoader = async() =>{


    const catagoryData = await fetch('data.json');
    const catagorys = await catagoryData.json();


    const jobsData = await fetch('jobsData.json');
    const jobs = await jobsData.json();


    const savedCart = getShoppingCart();

    let cart = [];
    for (const id in savedCart) {
        const foundJob = jobs.find(job => job.id === id);
        if (foundJob) {
            foundJob.quantity = savedCart[id];
            cart.push(foundJob);
        }
    }

    return {catagorys, jobs, cart};

}

