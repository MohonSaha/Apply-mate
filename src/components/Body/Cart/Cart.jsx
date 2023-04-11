import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Cart.css'
import CartItem from '../CartItem/CartItem';

const Cart = () => {

    const { cart } = useLoaderData();
    console.log(cart);

    return (
        <div className='cart-container'>
            <h1>Applied Jobs</h1>
            <div className='cart-details'>
                <div className='cart-sort'>                  
                    <select name="sort" id="sort">
                        
                        <option selected disabled>Select Sort Method</option>
                        <option value="remote">Remote Job</option>
                        <option value="onsite">On-site Job</option>
                    </select>
                </div>

                <div className='cart-review'>
                    {
                        cart.map(job=> <CartItem 
                            job={job}
                        ></CartItem>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Cart;