import React from 'react';

const LowerDetails = ({ lower }) => {
    console.log(lower);
    const {
        image,
        name
    } = lower || {}
    return (
        <div className='flex gap-8'>
            <div className="group relative w-44 h-56 overflow-hidden rounded-2xl shadow-lg">
                {/* image */}
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                />

                {/* subtle overlay glow on hover */}
                <div
                    className="pointer-events-none absolute inset-0 rounded-2xl
               bg-gradient-to-t from-black/40 via-transparent to-black/40
               opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
            </div>
            <div>
                <div>
                    <div className="badge badge-soft badge-success text-xs">Available</div>
                    <div className="badge badge-soft badge-info"></div>
                </div>
            </div>
        </div>
    );
};

export default LowerDetails;