import React from 'react';
import { NavLink } from 'react-router';
import { Facebook, Github, Instagram } from 'lucide-react';


const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-slate-600 text-base-content  p-10">
            <ul className="lg:flex grid grid-cols-2 gap-5 px-1">
                <li>
                    <NavLink to='/' className={({ isActive }) => (`font-medium ${isActive ? 'text-indigo-600 py-2 font-bold px-3 rounded hover:bg-white hover:text-stone-800 bg-white' : 'font-medium bg-gray-500 text-white py-2 px-3 rounded hover:bg-white hover:text-stone-800 '}`)}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-bookings' className={({ isActive }) => (`font-medium ${isActive ? 'text-indigo-600 py-2 font-bold px-3 rounded hover:bg-white hover:text-stone-800 bg-white' : 'font-medium bg-gray-500 text-white py-2 px-3 rounded hover:bg-white hover:text-stone-800 '}`)}>
                        My-Bookings
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/blogs' className={({ isActive }) => (`font-medium ${isActive ? 'text-indigo-600 py-2 font-bold px-3 rounded hover:bg-white hover:text-stone-800 bg-white' : 'font-medium bg-gray-500 text-white py-2 px-3 rounded hover:bg-white hover:text-stone-800 '}`)}>
                        Blogs
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact-us' className={({ isActive }) => (` font-medium ${isActive ? 'text-indigo-600 py-2 font-bold px-3 rounded hover:bg-white hover:text-stone-800 bg-white' : 'font-medium bg-gray-500 text-white py-2 px-3 rounded hover:bg-white hover:text-stone-800'}`)}>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/profile.php?id=61558381851640" target='_blank'>
                        <Facebook />
                    </a>
                    <a href="https://www.instagram.com/md.mahfuzarrahmanmunna/" target='_blank'>
                        <Instagram />
                    </a>
                    <a href="https://www.instagram.com/md.mahfuzarrahmanmunna/" target='_blank'>
                        <Github />
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Lower Talk LTD..</p>
            </aside>
        </footer>
    );
};

export default Footer;