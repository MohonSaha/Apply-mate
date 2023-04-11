import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Cart.css'
import CartItem from '../CartItem/CartItem';

const Cart = () => {


    const { cart } = useLoaderData();

    const [remoteFilter, setRemoteFilter] = useState(cart);

    const remoteJobHandler = () => {
        const remoteJob = cart.filter(job => job.job_type === "Remote");
        console.log(remoteJob);
        setRemoteFilter(remoteJob);
    }

    const onSiteJobHandler = () => {
        const OnSiteJob = cart.filter(job => job.job_type === "Onsite");
        console.log(OnSiteJob);
        setRemoteFilter(OnSiteJob);
    }


    return (
        <div className='cart-container'>
            <h1>Applied Jobs</h1>
            <div className='cart-details'>
                
                <div className="sort-container">
                    <div className='cart-sort'>

                        <label for="touch"><span className='sort-title'>Filter By</span></label>
                        <input type="checkbox" id="touch" />

                        <ul class="slide">
                            <li><span onClick={remoteJobHandler}>Remote</span></li>
                            <li><span onClick={onSiteJobHandler}>On-site</span></li>
                        </ul>



                    </div>
                </div>

                <div className='cart-review'>
                    {
                        remoteFilter.map(job => <CartItem
                            job={job}
                        ></CartItem>)
                    }
                </div>


            </div>
        </div>
    );
};

export default Cart;