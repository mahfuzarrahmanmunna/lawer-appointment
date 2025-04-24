import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const usePageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;

        if (path === '/') document.title = 'Home | Lower App';
        else if (path === '/my-bookings') document.title = 'My Bookings | Lower App'
        else if (path === '/blogs') document.title = 'Blogs | Lower App';
        else if (path === '/contact-us') document.title = 'Contact Us | Lower App';
        else if (path === path.startsWith('/lower-details/')) document.title = 'Lower Profile | Lower App';
        else return document.title = 'Lower App'
    }, [location])
};

export default usePageTitle;