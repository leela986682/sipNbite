import React from 'react'
import p1 from '../../../public/Ieela_Resume_page-0001.jpg'
import p2 from '../../../public/Ieela_Resume_page-0002.jpg'
function About() {
    return (
        <>
            <div className='md:hidden lg:hidden w-full h-20 bg-transparent'></div>
            <div className='flex-row border-4 border-gray-500'>

                <img className='w-[50%] mx-auto border-2 shadow-2xl shadow-gray-600' src={p1} />
                <img className='w-[50%] mx-auto border-2 shadow-2xl shadow-gray-600' src={p2} />
            </div>
        </>
    )
}

export default About