import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Contact from "../Pages/ContactUs/Contact";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/',
                Component: Home,
                hydrateFallbackElement: <LoadingSpinner />,
                loader: () => fetch('/lower.jsx')
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