import React from 'react';
import './Catagory.css'

const Catagory = ({ catagory }) => {

    const { category_name, category_logo, Jobs_available } = catagory;
    // console.log(catagory); 
    return (
        <div className='catagory-container'>
            
            <img src={category_logo} alt="" />
            <h3>{category_name}</h3>
            <p>{Jobs_available} Jobs Available</p>
        </div>
    );
};

export default Catagory;