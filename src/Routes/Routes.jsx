import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Contact from "../Pages/ContactUs/Contact";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: 'blogs',
                Component: Blogs
            },
            {
                path: 'my-bookings',
                Component: MyBookings
            },
            {
                path: 'contact-us',
                Component: Contact
            }
        ]
    }
])