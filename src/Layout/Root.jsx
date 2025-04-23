import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/Navbar/NavBar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='font-mulish'>
            <NavBar />
            <div className=' min-h-[calc(100vh-288px)]'>
                <div className='mim-w-xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Root;