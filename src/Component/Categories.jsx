import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Pasta from '../assets/Categories/Pasta.jpeg';
import Noodles from '../assets/Categories/Noodles.jpeg';
import Salad from '../assets/Categories/Salad.jpeg';
import IceCream from '../assets/Categories/IceCream.jpeg';
import Sandwich from '../assets/Categories/Sandwich.jpeg';
import Cake from '../assets/Categories/Cake.jpeg';
import Chocolate from '../assets/Categories/Chocolate.jpeg';
import FrenchFries from '../assets/Categories/FrenchFries.jpeg';
import Steak from '../assets/Categories/Steak.jpeg';
import BBQ from '../assets/Categories/BBQ.jpeg';
import Tacos from '../assets/Categories/Tacos.jpeg';
import Biryani from '../assets/Categories/Biryani.jpeg';
import Dumplings from '../assets/Categories/Dumplings.jpeg';
import Donuts from '../assets/Categories/Donuts.jpeg';
import Samosa from '../assets/Categories/Samosa.jpeg';
import Kebab from '../assets/Categories/Kebab.jpeg';
import Soup from '../assets/Categories/Soup.jpeg';
import Curry from '../assets/Categories/Curry.jpeg';
import Pancakes from '../assets/Categories/Pancakes.jpeg';
import Waffles from '../assets/Categories/Waffles.jpeg';
import Cheese from '../assets/Categories/Cheese.jpeg';
import Bacon from '../assets/Categories/Bacon.jpeg';
import Seafood from '../assets/Categories/Seafood.jpeg';
import Cereal from '../assets/Categories/Cereal.jpeg';
import Croissant from '../assets/Categories/Croissant.jpeg';
import Shawarma from '../assets/Categories/Shawarma.jpeg';
import Smoothie from '../assets/Categories/Smoothie.jpeg';
import Ramen from '../assets/Categories/Ramen.jpeg';
import HotDog from '../assets/Categories/HotDog.jpeg';
import DimSum from '../assets/Categories/DimSum.jpeg';
import Muffins from '../assets/Categories/Muffins.jpeg';
import Pudding from '../assets/Categories/Pudding.jpeg';
import Falafel from '../assets/Categories/Falafel.jpeg';
import Lasagna from '../assets/Categories/Lasagna.jpeg';
import Yogurt from '../assets/Categories/Yogurt.jpeg';
import Sashimi from '../assets/Categories/Sashimi.jpeg';
import SpringRoll from '../assets/Categories/SpringRoll.jpeg';
import { ChevronLeft, ChevronRight } from 'lucide-react';
function Categories({ title }) {
    const foodCategories = [
        { name: "Pasta", image: Pasta },
        { name: "Noodles", image: Noodles },
        { name: "Salad", image: Salad },
        { name: "Ice Cream", image: IceCream },
        { name: "Sandwich", image: Sandwich },
        { name: "Cake", image: Cake },
        { name: "Chocolate", image: Chocolate },
        { name: "French Fries", image: FrenchFries },
        { name: "Steak", image: Steak },
        { name: "BBQ", image: BBQ },
        { name: "Tacos", image: Tacos },
        { name: "Biryani", image: Biryani },
        { name: "Dumplings", image: Dumplings },
        { name: "Donuts", image: Donuts },
        { name: "Samosa", image: Samosa },
        { name: "Kebab", image: Kebab },
        { name: "Soup", image: Soup },
        { name: "Curry", image: Curry },
        { name: "Pancakes", image: Pancakes },
        { name: "Waffles", image: Waffles },
        { name: "Cheese", image: Cheese },
        { name: "Bacon", image: Bacon },
        { name: "Seafood", image: Seafood },
        { name: "Cereal", image: Cereal },
        { name: "Croissant", image: Croissant },
        { name: "Shawarma", image: Shawarma },
        { name: "Smoothie", image: Smoothie },
        { name: "Ramen", image: Ramen },
        { name: "Hot Dog", image: HotDog },
        { name: "Dim Sum", image: DimSum },
        { name: "Muffins", image: Muffins },
        { name: "Pudding", image: Pudding },
        { name: "Falafel", image: Falafel },
        { name: "Lasagna", image: Lasagna },
        { name: "Yogurt", image: Yogurt },
        { name: "Sashimi", image: Sashimi },
        { name: "Spring Roll", image: SpringRoll }

    ]
    const [index, setIndex] = useState(0);
    const itemsPerPage = 5;
    const scrollRef = useRef(null);
    const totalItems = 20;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const scroll = (scrollOffset) => {
        scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    };
    const nextPage = () => {
        if (index < totalPages - 1) setIndex(index + 1);
    };

    const prevPage = () => {
        if (index > 0) setIndex(index - 1);
    };
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/Home");
    };
    return (

        <div className='relative w-screen p-4 bg-white rounded-lg shadow-lg' >
            <h1 className=' absolute top-2 left-2 text-lg font-bold'>{title}</h1>
            <div className=' absolute top-5 lg:top-2 right-10 lg:right-20 flex  space-x-2'>
                <button
                    onClick={() => scroll(200)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 border shadow-inner shadow-orange-500 z-50 text-black p-1 rounded-full"
                >
                    <ChevronRight />
                </button>
                <button
                    onClick={() => scroll(-200)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-50 border shadow-inner shadow-orange-500 text-black p-1 rounded-full "
                >
                    <ChevronLeft />
                </button>
            </div>
            {/* inner div */}
            <div className=' overflow-hidden mt-8' >
                {/* food items div */}
                <div ref={scrollRef} className='flex gap-5 whitespace-nowrap overflow-x-auto scroll-smooth scrollbar-hide'
                //  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {foodCategories.map((food, i) => (
                        <div key={i} onClick={goToHome} className='cursor-pointer shrink-0 lg:w-1/5 lg:h-30 bg-white text-black grid items-center justify-center rounded-lg text-center lg:p-2 min-w-40' style={{ flex: '0 0 10%' }}>
                            <img className=' h-20 m-2 object-cover rounded-lg' src={food.image} />
                            <h3 className=' mt-2' >{food.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

        </div >
    )
}

export default Categories;