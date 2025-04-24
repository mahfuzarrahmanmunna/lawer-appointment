import React from 'react';
import { Link } from 'react-router';

const LowerCard = ({ lower }) => {
    const {
        image,
        name,
        experience,
        speciality,
        license_number
    } = lower || {}
    return (
        <div className='flex lg:gap-8 gap-4 items-center border border-gray-400 rounded-2xl p-8'>
            <div className="group relative w-36 h-40 overflow-hidden rounded-2xl shadow-lg transition-all duration-300">
                <div
                    className="pointer-events-none absolute inset-0 rounded-2xl
               ring-0 ring-indigo-400/50 ring-offset-0
               transition-all duration-300 group-hover:ring-4 group-hover:ring-offset-2"
                />
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover
               transition-transform duration-300 ease-out group-hover:scale-110"
                />

                <div
                    className="pointer-events-none absolute inset-0 rounded-2xl
               bg-gradient-to-t from-black/40 via-transparent to-black/40
               opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                ></div>
            </div>

            <div className='lg:space-y-1'>
                <div className='lg:flex gap-3'>
                    <div className="badge badge-soft badge-success text-xs">Available</div>
                    <div className="badge badge-soft badge-info">{experience}</div>
                </div>
                <h2 className='lg:text-xl font-extrabold'>{name}</h2>
                <p className='text-sm lg:text-base text-gray-600'>
                    {speciality}
                </p>
                <p className='text-sm lg:text-base text-gray-600 flex'>
                    <span className='p-1 py-0 border border-gray-600 rounded-full'>R</span> &nbsp;&nbsp; {license_number}
                </p>
                <Link
                    to={`lower-details/${license_number}`}
                    className="btn btn-block border  border-indigo-600 mt-1 rounded-full font-bold text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default LowerCard;