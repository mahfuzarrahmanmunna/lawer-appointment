import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div className="p-0 px-4 md:px-12 lg:px-20 navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink to='/' className={({ isActive }) => (`font-medium ${isActive ? 'text-indigo-600' : ''}`)}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/my-bookings' className={({ isActive }) => (`font-medium ${isActive ? 'text-indigo-600' : ''}`)}>
                                My-Bookings
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/blogs' className={({ isActive }) => (`font-medium ${isActive ? 'text-indigo-600' : ''}`)}>
                                Blogs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact-us' className={({ isActive }) => (`font-medium ${isActive ? 'text-indigo-600' : ''}`)}>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="https://i.ibb.co.com/Nd40Hq08/logo.png" alt="" />
                    <h1 className='font-extrabold text-3xl'>Law.BD</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to='/' className={({ isActive }) => (`font-medium ${isActive ? 'text-indigo-600' : ''}`)}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/my-bookings' className={({ isActive }) => (`font-medium ${isActive ? 'text-indigo-600' : ''}`)}>
                            My-Bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/blogs' className={({ isActive }) => (`font-medium ${isActive ? 'text-indigo-600' : ''}`)}>
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact-us' className={({ isActive }) => (`font-medium ${isActive ? 'text-indigo-600' : ''}`)}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end lg:flex hidden">
                <button className='btn btn-success text-white '>Contact Now</button>
            </div>
        </div>
    );
};

export default NavBar;