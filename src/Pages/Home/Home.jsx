import React from 'react';
import usePageTitle from '../../Hooks/usePageTitle';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
    usePageTitle()
    return (
        <div className='mim-w-xl mx-auto md:px-12 lg:px-16 xl:px-24'>
            <Banner />
        </div>
    );
};

export default Home;