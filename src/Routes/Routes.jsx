import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Contact from "../Pages/ContactUs/Contact";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
// import LowersDetails from "../Components/LowerDetails/LowersDetails";
import LowerControlled from "../Components/LowerControled/LowerControled";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                hydrateFallbackElement: <LoadingSpinner />,
                loader: () => fetch('/lower.json')
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
            },
            {
                path: 'lower-details/:reg',
                Component: LowerControlled,
                hydrateFallbackElement: <LoadingSpinner />,
                loader: () => fetch('/lower.json')
            }
        ]
    }
])