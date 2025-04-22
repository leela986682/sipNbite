import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Cart from '../cart.jsx'
import { useNavigate } from 'react-router-dom'
const Home = ({ category }) => {
    const dine = false
    const online = true
    const [Items, setItems] = useState([])
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate();
    const goToBag = () => {
        navigate("/Cart");
    };
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.categories);
                setItems(data.categories);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <div className='md:hidden lg:hidden w-full h-20 bg-transparent'></div>
            <div className='w-full h-fit shadow-2xl flex justify-start gap-5 items-end mx-10'>
                <Link className={(online) ? 'text-black font-bold underline decoration-orange-500 ' : 'text-gray-500 font-bold '} to="/Home">OrderOnline</Link>
                <Link className={(dine) ? 'text-black font-bold underline decoration-orange-500 ' : 'text-gray-500 font-bold '} to="/Dine">DineOut</Link >
            </div>
            <div className='h-screen w-screen'>
                <div className='w-fit h-fit grid md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-1 p-5  bg-white'>
                    {Items.map((dish, i) => (
                        <div key={i} className=" relative flex-row-reverse border-4 p-5 w-[100%] h-[100%]">
                            <h1 className='ml-1 font-black'>{dish.strCategory}</h1>
                            <div className='flex gap-5'>
                                <img className='lg:mx-14 md:mx-14 lg:my-5 md:my-5 lg:w-40 md:w-40 w-28 rounded-2xl hover:motion-preset-bounce ' src={dish.strCategoryThumb} alt={dish.strCategory} />
                                <div className='w-52 h-fit grid justify-between'>
                                    <p className='font-thin'>{(
                                        (dish.strCategoryDescription +
                                            ' A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. Calls a defined callback function on each element of an array, and returns an array that contains the results.'
                                        ).substring(0, 150)
                                    )}</p>
                                    <div onClick={() => setVisible(true)} className='flex gap-1 justify-end m-2'>
                                        <Cart text={dish} itmid={i} show={false} c={1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {visible && (
                        <div className="fixed bottom-0 left-0 w-full bg-transparent shadow-md p-4 flex justify-center items-center z-50">
                            <button onClick={goToBag} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                                Proceed to Checkout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Home