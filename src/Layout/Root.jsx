import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/Navbar/NavBar';

const Root = () => {
    return (
        <div className='font-mulish'>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Root;