import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Zomato from '../../assets/sipnbite.jpg'
import poster from '../../assets/poster.webp'
import Categories from '../Categories'
import Restrunts from '../Restrunts'
import location from '../../assets/restarunts.webp'
import delivery from '../../assets/package.webp'
import offer from '../../assets/offers.webp'
import Video from './Video';
import Footer from '../footer'
import box from '../../assets/food-tray.png'
import sw1 from '../../assets/carousel/sw1.webp'
import sw2 from '../../assets/carousel/sw2.webp'
import sw3 from '../../assets/carousel/sw3.webp'
import sw4 from '../../assets/carousel/sw4.webp'
import sw5 from '../../assets/carousel/biryani.webp'
import sw6 from '../../assets/carousel/meat.webp'
import sw7 from '../../assets/carousel/mugali.webp'
import sw8 from '../../assets/carousel/prawns.webp'
import sw9 from '../../assets/carousel/tandoorijoint.webp'
const arr = [sw1, sw2, sw3, sw4, sw5, sw6, sw7, sw8, sw9];
function Overview() {
    const [index, setIndex] = useState(0);
    const next = () => { (index < arr.length - 1) ? setIndex(index + 1) : setIndex(0) }
    const prev = () => { (index != 0) ? setIndex(index - 1) : setIndex(arr.length - 1) }
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 2000);
        return () => clearInterval(interval)
    },)
    const navigate = useNavigate();
    const goToOffers = () => {
        navigate('/Offers')
    }
    const goToDine = () => {
        navigate('/Dine')
    }
    const goToHome = () => {
        navigate('/Home')
    }
    return (
        <div>
            <div className="relative w-screen">
                <Video />
            </div>
            <div className='w-screen'>
                <img className='w-full h-[100%]' src={Zomato} />
            </div>
            <div className='flex  lg:justify-center lg:items-center bg-gray-100'>
                <Categories title="What's on your mind ?" />
            </div>
            <div>
                <div className='w-screen h- border-2 bg-slate-700 overflow-hidden relative'>
                    <div className='flex transition-transform duration-500 ease-in-out'>
                        {
                            arr.map((img, i) => (
                                <div key={i} onClick={goToOffers} style={(i === index) ? { display: 'block' } : { display: 'none' }}>
                                    <img className='shrink-0 h-60 w-screen' src={img} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <img src={poster} className='w-screen' />
                </div>
                <div onClick={goToDine} className='grid border-2 bg-white z-50 w-[90%] mx-auto rounded-2xl shadow-2xl shadow-orange-500 m-5 p-3 h-28'>
                    <span className='text-gray-500 font-extralight'>Select Restaurant</span>
                    <h1 className='text-black text-2xl font-extrabold'>Select Restaurant</h1>
                    <hr className='bg-black m-1' />
                    <button className='bg-orange-500 flex justify-center items-center mx-auto gap-5 rounded w-[80%] border border-orange-500'><img className='w-5 h-5' src={box} /><p className='text-white font-bold'>Reserve Table</p></button>
                </div>
                <div className='flex gap-2'>
                    <div onClick={goToDine} className='w-1/3 h-32 grid gap-2 justify-center items-center text-center'><img src={location} className='w-14' /><p className='w-full h-7 mx-auto bg-orange-500 rounded text-white' >Restraw's</p></div>
                    <div onClick={goToOffers} className='w-1/3 h-32 grid gap-2 justify-center items-center text-center'><img src={delivery} className='w-14' /><p className='w-full h-7 mx-auto bg-orange-500 rounded text-white' >Offer's</p></div>
                    <div onClick={goToHome} className='w-1/3 h-32 grid gap-2 justify-center items-center text-center'><img src={offer} className='w-14' /><p className='w-full h-7 mx-auto bg-orange-500 rounded text-white' >TakeAway</p></div>
                </div>
                <div className='w-screen' >
                    <Restrunts />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>

    )
}

export default Overview
