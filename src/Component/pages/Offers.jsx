import React from 'react'
import Footer from '../footer'
import { Link } from 'react-router-dom';
import onlinepic from '../../assets/Categories/onlie.avif'
import r1 from '../../assets/carousel/of1.avif';
import r2 from '../../assets/carousel/of2.avif';
import r3 from '../../assets/carousel/of3.avif';
import r4 from '../../assets/carousel/of4.avif';
import r5 from '../../assets/carousel/of5.avif';
import r6 from '../../assets/carousel/of6.avif';
import r7 from '../../assets/carousel/of7.avif';
import r8 from '../../assets/carousel/of8.avif';
import r9 from '../../assets/carousel/of9.avif';
import r10 from '../../assets/carousel/of10.avif';
import r11 from '../../assets/carousel/of11.avif';
import r12 from '../../assets/carousel/of12.avif';
import r13 from '../../assets/carousel/of13.avif';
import r14 from '../../assets/carousel/of14.avif';
import r15 from '../../assets/carousel/of15.avif';
import r16 from '../../assets/carousel/of16.avif';
const restaurants = [
    {
        image: r1,
        name: "Biryani House",
        address: "Hitech City, Hyderabad",
        rating: 4.5,
        foodType: "Indian, Biryani",
        costForCouple: "₹600",
        offer: "20% off on booking via app"
    },
    {
        image: r2,
        name: "Spice Hub",
        address: "Gachibowli, Hyderabad",
        rating: 4.2,
        foodType: "Chinese, Continental",
        costForCouple: "₹800",
        offer: "Flat ₹100 off on dine-in"
    },
    {
        image: r3,
        name: "Pizza Paradise",
        address: "Banjara Hills, Hyderabad",
        rating: 4.0,
        foodType: "Italian, Pizza",
        costForCouple: "₹700",
        offer: "Buy 1 Get 1 Free"
    },
    {
        image: r4,
        name: "Curry Point",
        address: "Madhapur, Hyderabad",
        rating: 4.3,
        foodType: "South Indian",
        costForCouple: "₹500",
        offer: "10% Cashback on card payment"
    },
    {
        image: r5,
        name: "Urban Tandoor",
        address: "Kukatpally, Hyderabad",
        rating: 4.4,
        foodType: "North Indian, Tandoori",
        costForCouple: "₹900",
        offer: "Free dessert on ₹1000+ order"
    },
    {
        image: r6,
        name: "The Asian Spoon",
        address: "Jubilee Hills, Hyderabad",
        rating: 4.6,
        foodType: "Asian, Thai",
        costForCouple: "₹1100",
        offer: "15% off on reservations"
    },
    {
        image: r7,
        name: "Green Leaf",
        address: "Begumpet, Hyderabad",
        rating: 4.1,
        foodType: "Vegetarian, South Indian",
        costForCouple: "₹400",
        offer: "Free soft drink with lunch"
    },
    {
        image: r8,
        name: "Steak Story",
        address: "Hitech City, Hyderabad",
        rating: 4.7,
        foodType: "Steaks, American",
        costForCouple: "₹1500",
        offer: "Buy 2 meals, get 1 starter free"
    },
    {
        image: r9,
        name: "Noodle House",
        address: "Ameerpet, Hyderabad",
        rating: 4.0,
        foodType: "Chinese, Noodles",
        costForCouple: "₹650",
        offer: "10% off for students"
    },
    {
        image: r10,
        name: "Desi Diner",
        address: "Kompally, Hyderabad",
        rating: 3.9,
        foodType: "Desi, Tandoori",
        costForCouple: "₹550",
        offer: "Combo meal at ₹299"
    },
    {
        image: r11,
        name: "Cafe Culture",
        address: "SR Nagar, Hyderabad",
        rating: 4.2,
        foodType: "Cafe, Continental",
        costForCouple: "₹750",
        offer: "25% off on first booking"
    },
    {
        image: r12,
        name: "Tandoori Tales",
        address: "Manikonda, Hyderabad",
        rating: 4.3,
        foodType: "Tandoori, Indian",
        costForCouple: "₹900",
        offer: "Free mocktail with meal"
    },
    {
        image: r13,
        name: "Wrap 'n Roll",
        address: "Himayatnagar, Hyderabad",
        rating: 4.0,
        foodType: "Wraps, Fast Food",
        costForCouple: "₹300",
        offer: "BOGO on all wraps"
    },
    {
        image: r14,
        name: "Royal Rasoi",
        address: "Secunderabad, Hyderabad",
        rating: 4.5,
        foodType: "Rajasthani, North Indian",
        costForCouple: "₹850",
        offer: "Thali at ₹199"
    },
    {
        image: r15,
        name: "Mehfil Moments",
        address: "Charminar, Hyderabad",
        rating: 4.1,
        foodType: "Mughlai, Hyderabadi",
        costForCouple: "₹950",
        offer: "15% off for group bookings"
    },
    {
        image: r16,
        name: "Dosa Delights",
        address: "Kondapur, Hyderabad",
        rating: 4.2,
        foodType: "South Indian, Fast Food",
        costForCouple: "₹350",
        offer: "Free chutney refill"
    }
]
function Offers() {
    const dine = true
    const online = false
    return (
        <>
            <div>
                {/* <div className='relative'>
                    <div className='md:hidden lg:hidden w-full h-20 bg-transparent'></div>
                    <img className='w-screen h-64' src={onlinepic} />
                    <div className='absolute lg:top-6 lg:left-9 md:top-6 md:left-9 bg-orange-500 rounded-xl p-3'>
                        <h1 className='text-xl text-white font-extrabold'>SipN'Bite</h1>
                    </div>
                    <h1 className='absolute bottom-20 left-5 text-white font-bold text-3xl'>Dining Out Restarunts In</h1>
                    <h1 className='absolute bottom-10 left-5 text-white font-bold text-3xl'>Hyderbad</h1>
                </div> */}
                <div className='relative'>
                    <div className='md:hidden lg:hidden w-full h-20 bg-transparent'></div>
                    <img src={onlinepic} />
                    <div className='absolute lg:top-8 md:top-8 top-24 lg:left-5 md:left-5 left-3 rounded-2xl bg-black lg:px-5 lg:py-5 md:px-5 md:py-5'>
                        <h1 className='lg:text-2xl md:text-2xl text-xl text-white font-extrabold'>SipN'Bite</h1>
                    </div>
                    <h1 className='absolute lg:bottom-20 lg:left-5 md:bottom-20 md:left-5 bottom-7 left-5 text-white font-bold lg:text-3xl md:text-3xl '>Dining Out Restarunts In</h1>
                    <h1 className='absolute lg:bottom-10 lg:left-5 md:bottom-10 md:left-5 bottom-1 left-5 text-white font-bold lg:text-3xl md:text-3xl '>Hyderbad</h1>
                </div>
                <div className='w-full h-[50px] shadow-2xl flex justify-start gap-5 items-end mx-10 '>
                    <Link className={(online) ? 'text-black font-bold underline decoration-orange-500 ' : 'text-gray-500 font-bold '} to="/Home">OrderOnline</Link>
                    <Link className={(dine) ? 'text-black font-bold underline decoration-orange-500 ' : 'text-gray-500 font-bold '} to="/Dine">DineOut</Link >
                </div>
                <div>
                    <div className='h-screen w-screen flex'>
                        <div className='w-fit h-fit grid lg:grid-cols-3 md:grid-cols-3 justify-center items-center gap-1 p-5  bg-white'>
                            {restaurants.map((dish, i) => (
                                <div key={i} className=" relative grid justify-between border-4 p-5 w-[100%] h-[100%]">
                                    <div className='grid gap-5'>
                                        <h1 className='ml-1 font-black'>{dish.name}</h1>
                                        <img className='object-cover rounded-2xl hover:motion-preset-bounce ' src={dish.image} alt={dish.strCategory} />
                                        <div className='w-52 h-fit grid'>
                                            <div className='flex justify-between'>
                                                <p className='font-semibold'>foodType: {dish.foodType}</p>
                                                <p className='font-bold'>{dish.rating}</p>
                                            </div>
                                            <div>
                                                <p className='font-semibold'>{dish.address}</p>
                                                <p className='font-semibold'>for two: {dish.costForCouple}</p>
                                            </div>
                                        </div>
                                        <div className='w-full h-fit bg-orange-400 rounded-lg text-center'>
                                            <p className='font-light text-xs text-white'>{dish.offer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Offers