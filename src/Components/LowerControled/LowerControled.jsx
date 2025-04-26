import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate,  useParams } from 'react-router';
import InvalidLower from './InvalidLower';
import { getBooking, setBooking } from '../../Utils/LocalStorage';
import toast, { Toaster } from 'react-hot-toast';

const LowerControlled = () => {
    const lowerData = useLoaderData()
    const [isAlreadyBooked, setIsAlreadyBooked] = useState(false)
    const id = useParams()
    const navigate = useNavigate()
    const { reg } = id
    console.log(reg);
    const singleLower = lowerData.find(lower => lower.license_number === reg)

    const {
        image,
        name,
        experience,
        speciality,
        license_number,
        availability,
        fee
    } = singleLower || {}

    useEffect(() => {
        const existingBookings = getBooking();
        const found = existingBookings.find(low => low.license_number === reg)
        setIsAlreadyBooked(!!found)
    }, [reg])
    if (!singleLower) {
        return <InvalidLower />
    }

    const handleBooked = () => {
        if (isAlreadyBooked) {
            {
                toast.error(`You have already booked ${name}`);
                return;
            }
        }
        navigate('/my-bookings')
        setBooking(singleLower)
        toast.success(`Added ${name}`)
    }
    return (
        <div className='lg:w-[1160px] mx-auto px-6'>
            <Toaster />
            <div className='bg-[#f3f3f3] lg:px-16 px-2 text-center py-16 my-8 border border-transparent rounded-2xl'>
                <h1 className='font-extrabold text-3xl'>
                    Lawyer’s Profile Details
                </h1>
                <p className='text-xs lg:text-base text-gray-600 font-medium'>
                    Get to know your lower - qualifications, experience, and specialties at a glance. Trust and <br /> transparency to help you choose the best care.
                </p>
            </div>
            <div className='my-8 p-8 border border-gray-300 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 w-full bg-white'>
                <div className='lg:flex gap-8 items-center'>
                    {/* Image Section */}
                    <div className="group relative w-full lg:w-[300px] h-[300px] overflow-hidden rounded-2xl shadow-lg transition-all duration-300">
                        <div
                            className="pointer-events-none absolute inset-0 rounded-2xl
        ring-0 ring-indigo-400/50 ring-offset-0
        transition-all duration-300 group-hover:ring-4 group-hover:ring-offset-2"
                        />
                        <img
                            src={image}
                            alt={name}
                            className="h-full w-full object-cover
        transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                        <div
                            className="pointer-events-none absolute inset-0 rounded-2xl
        bg-gradient-to-t from-black/40 via-transparent to-black/40
        opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        ></div>
                    </div>

                    {/* Info Section */}
                    <div className='mt-6 lg:mt-0 w-full'>
                        <div className='space-y-4'>
                            <div className="badge badge-info bg-blue-100 text-blue-700">{experience}</div>
                            <h1 className='text-base lg:text-3xl font-extrabold'>{name}</h1>
                            <p className='text-xs lg:text-sm text-gray-500 font-bold'>{speciality}</p>
                            <p className='flex gap-4 items-center text-gray-500 font-medium text-xs lg:text-sm'>
                                <span className='py-0 p-2 border border-gray-500 rounded-full'>R</span>{license_number}
                            </p>
                            <div className='flex gap-8 items-center flex-wrap'>
                                <strong className='font-bold text-gray-500'>Availability</strong>
                                <div className='flex gap-2 flex-wrap'>
                                    {
                                        availability.map(avl =>
                                            <div className="badge badge-warning bg-yellow-100 text-yellow-700" key={avl}>{avl}</div>
                                        )
                                    }
                                </div>
                            </div>
                            <h5>
                                <strong className='text-gray-500'>Consultation Fee:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <strong className='font-extrabold text-[#0EA106]'>Taka : {fee}</strong>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-8 p-8 border border-gray-300 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 w-full bg-white space-y-8'>
                <div>
                    <h3 className='text-2xl font-bold text-center'>
                        Book an Appointment
                    </h3>
                </div>
                <div className='flex justify-between'>
                    <h1>
                        <strong>Availability</strong>
                    </h1>
                    <div className="badge badge-soft badge-success">Lawyer  Available Today</div>
                </div>
                <div className="badge badge-soft badge-warning h-24 lg:h-0">
                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><g fill="currentColor"><path d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><line x1="9" y1="6.5" x2="9" y2="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line><path d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" fill="currentColor" data-stroke="none" stroke="none"></path></g></svg>
                    Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                </div>
                <div className='p-6'>
                    <button
                        onClick={handleBooked}
                        className="btn btn-block bg-[#0EA106] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0bc000] hover:scale-105 active:scale-95">
                        {isAlreadyBooked ? 'Already Booked' : ' Book Appointment Now'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LowerControlled;