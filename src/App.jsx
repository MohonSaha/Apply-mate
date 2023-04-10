import React from 'react';
import Header from './components/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Header/Navbar';

const App = () => {
  return (
    <>

      <Navbar></Navbar>

      <Outlet/>

      {/* <Footer></Footer> */}
    </>
  );
};

export default App;