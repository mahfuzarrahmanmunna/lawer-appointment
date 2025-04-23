import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/Navbar/NavBar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='font-mulish'>
            <NavBar />
            <div className='min-h-[calc(100vh-348px)] lg:min-h-[calc(100vh-288px)]'>
                <div className=''>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Root;