import React from 'react';
import LowerCard from '../LowerDetails/LowerCard';

const LowerContainer = ({ data }) => {
    return (
        <div className='mb-12 px-8'>
            <div className='mb-8'>
                <h1 className='lg:text-3xl text-xl font-extrabold text-center'>
                    Our Best Lawyers
                </h1>
                <p className='text-center text-sm lg:text-base text-gray-600'>
                    Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine <br /> checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>
            <div className='grid lg:grid-cols-2 gap-12 '>
                {
                    data.map((lower, idx) => <LowerCard lower={lower} key={idx} />)
                }
            </div>
        </div>
    );
};

export default LowerContainer;