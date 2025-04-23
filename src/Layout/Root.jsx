import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/Navbar/NavBar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='font-mulish'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;