import React, { useEffect, useState } from 'react';
import LowerCard from '../LowerDetails/LowerCard';

const LowerContainer = ({ data }) => {
    const [displayLowers, setDisplayLowers] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) {
            setDisplayLowers(data)
        }
        else {
            setDisplayLowers(data.slice(0, 6))
        }
    }, [data, showAll])
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
                    displayLowers.map((lower, idx) => <LowerCard lower={lower} key={idx} />)
                }
            </div>
            <div className='flex justify-center mt-12'
                onClick={() => {
                    setShowAll(prv => !prv)
                    if (showAll) window.scrollTo(0, 500)
                }}
            >
                <button className='btn'>
                    {showAll ? 'Show Less' : 'Show All'}
                </button>
            </div>
        </div>
    );
};

export default LowerContainer;