import React from 'react'
import bsearch from '../assets/search-b.png'
import home from '../assets/home.png'
import offer from '../assets/discount.png'
import bag from '../assets/shopping-bag.png'
import about from '../assets/question.png'
import { X, Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Header = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const goToOffers = () => {
    navigate("/Offers");
  };
  const goToBag = () => {
    navigate("/Cart");
  };
  const goToAbout = () => {
    navigate("/About");
  };
  const [searchBox, setSearchBox] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex w-full fixed lg:static lg:h-20 z-50 p-5 md:px-4 lg:px-4 align-baseline justify-between border-b-0 shadow-2xl'>
      <div className=''>
        <h1 className='hover:opacity-15 sm:text-xl md:text-xl lg:text-6xl text-orange-600 font-extrabold'>SipN'Bite</h1>
      </div>
      <div className='hidden lg:flex lg:justify-between lg:gap-10'>
        {
          !searchBox ? <input placeholder='Search for restarunts and food' className='absolute top-2 right-96 outline-none w-full h-[50px] rounded-3xl border shadow-2xl shadow-orange-500' />
            : <div onClick={() => { setSearchBox(!searchBox) }} className='flex justify-center gap-1 mt-7 h-6'><img src={bsearch} className='w-3 h-3 mt-2 hover: motion-preset-rebound-left cursor-pointer' /><span className=' font-black w-15 h-5 border-solid-2 hover:cursor-pointer motion-preset-oscillate-sm'>Search</span></div>
        }
        <div onClick={goToHome} className='cursor-pointer flex justify-center gap-1 mt-7 h-6'><img src={home} className='w-4 h-4 mt-1  hover:motion-preset-pulse-lg' /><span className=' font-black hover:motion-text-in-zinc-400 motion-preset-wiggle w-15 h-5'>Home</span></div>
        <div onClick={goToOffers} className='cursor-pointer flex justify-center gap-1 mt-7 h-6'><img src={offer} className='w-3 h-3 mt-1  hover:motion-preset-pulse-lg' /><span className=' font-black hover:motion-text-in-zinc-400 motion-preset-wiggle w-15 h-5'>Offers</span></div>
        <div onClick={goToBag} className='cursor-pointer flex justify-center gap-1 mt-7 h-6'><img className=' w-3 h-4 mt-1 hover:motion-preset-pulse-lg ' src={bag} /><span className='font-black hover: motion-preset-shake cursor-pointer w-10 h-5 motion-preset-stretch '>Bag</span></div>
        <div onClick={goToAbout} className='cursor-pointer flex justify-center gap-1 mt-7 h-6'><img className=' w-3 h-3 mt-1 hover:motion-preset-pulse-lg ' src={about} /><span className='font-black hover:motion-preset-shake cursor-pointer w-10 h-5'>About</span></div>
      </div>
      <div className='lg:hidden flex bg-white rounded-md'>
        <button className='text-orange-500' onClick={() => setIsOpen(!isOpen)}>
          {
            (isOpen) ? <X size={20} /> : <Menu size={20} />
          }
        </button>
        <div>
          {
            (isOpen) && (<div className="flex flex-col text-xs w-40 p-2 border-white bg-white rounded-3xl shadow-2xl gap-2 fixed top-14 right-0 motion-translate-x-in-100 -motion-translate-y-in-75">
              <div onClick={goToHome} className='cursor-pointer flex justify-center gap-1 mt-7 h-6'><img src={home} className='w-4 h-4 mt-1  hover:motion-preset-pulse-lg' /><span className=' font-black hover:motion-text-in-zinc-400 motion-preset-wiggle w-15 h-5'>Home</span></div>
              <div onClick={goToOffers} className='cursor-pointer flex justify-center gap-1 mt-7 h-6'><img src={offer} className='w-3 h-3 mt-1  hover:motion-preset-pulse-lg' /><span className=' font-black hover:motion-text-in-zinc-400 motion-preset-wiggle w-15 h-5'>Offers</span></div>
              <div onClick={goToBag} className='cursor-pointer flex justify-center gap-1 mt-7 h-6'><img className=' w-3 h-4 mt-1 hover:motion-preset-pulse-lg ' src={bag} /><span className='font-black hover: motion-preset-shake cursor-pointer w-10 h-5 motion-preset-stretch '>Bag</span></div>
              <div onClick={goToAbout} className='cursor-pointer flex justify-center gap-1 mt-7 h-6'><img className=' w-3 h-3 mt-1 hover:motion-preset-pulse-lg ' src={about} /><span className='font-black hover:motion-preset-shake cursor-pointer w-10 h-5'>About</span></div>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Header