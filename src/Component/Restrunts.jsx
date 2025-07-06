import React from 'react'
import { useNavigate } from 'react-router-dom'
import rest1 from '../assets/carousel/res1.webp'
import rest2 from '../assets/carousel/res2.webp'
import rest3 from "../assets/carousel/res3.webp"
import rest4 from "../assets/carousel/res4.webp"
const places = [
    {
        image: rest1,
        title: "Sunny Beach Resort",
        address: "123 Ocean Drive, Miami, FL",
        rating: 4.7,
        description: "A beautiful beachfront resort with stunning ocean views and luxurious amenities."
    },
    {
        image: rest2,
        title: "Mountain Retreat",
        address: "789 Peak Road, Aspen, CO",
        rating: 4.9,
        description: "A cozy retreat nestled in the mountains, perfect for hiking and skiing adventures."
    },
    {
        image: rest3,
        title: "Urban Paradise Hotel",
        address: "456 Skyline Avenue, New York, NY",
        rating: 4.5,
        description: "A modern hotel in the heart of the city, offering a luxurious stay with skyline views."
    },
    {
        image: rest4,
        title: "Forest Cabin Getaway",
        address: "101 Greenwoods Trail, Oregon",
        rating: 4.8,
        description: "A peaceful cabin retreat in the woods, perfect for nature lovers and adventurers."
    }
];
function Restrunts() {
    const navigate = useNavigate();
    const goToCart = () => {
        navigate("/Dine");
    };
    return (
        <div>
            <div className='m-3'><h1 className='text-xs text-orange-500 font-semibold lg:text-lg lg:font-bold motion-preset-oscillate '>Hey! Thought of going out for dinner with some friends </h1></div>
            <div className='flex gap-3 justify-center rounded-lg w-full'>
                {places.map((obj, i) => (
                    <div key={i} className='hidden lg:block md:block'>
                        <div onClick={goToCart}
                            // className='cursor-pointer w-1/4 lg:h-80 h-40 flex flex-col justify-end bg-white rounded-lg shadow-lg overflow-hidden relative'
                            className='relative w-72 h-48 bg-gray-200 overflow-hidden group cursor-pointer'
                            style={{
                                backgroundImage: `url(${obj.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute bottom-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-black bg-opacity-70 text-white text-center p-4">
                                <h1 className='lg:text-xl text-sm font-semibold'>{obj.title}</h1>
                                <strong className='text-yellow-400 text-sm lg:text-lg'>⭐ {obj.rating}</strong>
                                <p className='hidden lg:text-slate-300 lg:font-light lg:mt-2'>{(obj.description).substring(0, 50)}</p>
                                <p className='text-sm font-extralight text-slate-300 lg:font-light mt-1'>{obj.address}</p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            <div className=' md:hidden lg:hidden overflow-y-auto w-screen border-2 shadow-inner h-72'>
                {places.map((obj, i) => (
                    <div key={i} className='grid gap-2'>
                        <div onClick={goToCart} className='p-2'>
                            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100">
                                <img className="object-cover mt-4    w-[85%] rounded-t-lg h-36 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={obj.image} alt="" />
                                <div className="flex flex-col gap-1 justify-between p-4 leading-normal">
                                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">{obj.title}</h5>
                                    <strong className='text-yellow-400 text-sm'>⭐ {obj.rating}</strong>
                                    <p className="text-sm font-normal text-gray-700 dark:text-gray-400">{obj.address}</p>
                                </div>
                            </a>
                        </div>
                    </div>))
                }
            </div>
        </div>
    )
}

export default Restrunts