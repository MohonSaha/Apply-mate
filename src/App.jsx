import React, { createContext, useState } from 'react';
import Header from './components/Header/Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from './components/Header/Navbar';

export const CartContext = createContext([]);

const App = () => {



  return (


    <div>

      <Navbar></Navbar>

      <Outlet />

      {/* <Footer></Footer> */}
    </div>


  );
};

export default App;