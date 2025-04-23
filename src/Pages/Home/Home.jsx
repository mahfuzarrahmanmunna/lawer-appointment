import React from 'react';
import usePageTitle from '../../Hooks/usePageTitle';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import LowerContainer from '../../Components/LowersContainer/LowerContainer';

const Home = () => {
    usePageTitle()
    const data = useLoaderData()
    return (
        <div className='mim-w-xl mx-auto md:px-12 lg:px-16 xl:px-24'>
            <Banner />
            <LowerContainer data={data} />
        </div>
    );
};

export default Home;