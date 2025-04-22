import React, { useEffect, useState } from 'react'
import left from '../assets/left-arrow.png'
import right from '../assets/right-arrow.png'
import foodCategories from '../../../swiggy/src/Components/foodCategories';
function Carousel({ title }) {
    const [categories, setCategories] = useState(foodCategories);
    // useEffect(() => {
    //     fetch()
    //         .then(response => response.json())
    //         .then(data => { console.log(data), setCategories(data) })
    //         .catch((err) => console.log(err))
    // }, []);
    const [index, setIndex] = useState(0);
    const itemsPerPage = 5; // Number of items visible at a time

    const totalItems = 20;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const nextPage = () => {
        if (index < totalPages - 1) setIndex(index + 1);
    };

    const prevPage = () => {
        if (index > 0) setIndex(index - 1);
    };

    return (

        <div className='  relative w-[100%] mx-auto p-4 bg-white rounded-lg shadow-lg' >
            {/* title pos-t-l div */}
            <h1 className=' absolute top-2 left-2 text-lg font-bold' >{title}</h1>

            {/* buttons pos t-r div */}
            <div className=' absolute top-2 right-20 flex space-x-2'>
                <img className=' w-6 p-2 bg-white shadow rounded-full' onClick={prevPage} src={left} />
                <img className=' w-6 p-2 bg-white shadow rounded-full' onClick={nextPage} src={right} />
            </div>
            {/* inner div */}
            <div className=' overflow-hidden mt-8' >
                {/* food items div */}
                <div className=' flex gap-3 transition-transform duration-300 ' style={{ transform: `translateX(-${index * 100}%)` }} >
                    {categories.map((food, i) => (
                        <div key={i} className='  w-1/5 bg-black text-white grid items-center justify-center mx-2 rounded-lg' >
                            <img className='  w-20 h-16 object-cover rounded-lg' src={food.img} />
                            <h3 className=' mt-2' >{food.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

        </div >
    )
}

export default Carousel