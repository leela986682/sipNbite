import React, { useContext } from 'react';
import { cartContext } from '../../App';
import Cart from '../cart.jsx'
import cartvideo from '../../../public/emptycart.mp4'
function CartPage() {
    const { cartItems } = useContext(cartContext);

    return (
        <div className='overflow-y-auto w-screen h-screen scroll-smooth scrollbar-hide grid gap-2 mx-5 mt-5 '>
            <div className='md:hidden lg:hidden w-full h-20 bg-transparent'></div>
            {
                (cartItems && cartItems.length > 0) ? (
                    <>
                        {
                            cartItems.map((dish, i) => (
                                <div key={i} className='flex justify-around w-[90%] border-2 border-orange-500 shadow-md shadow-orange-300 rounded-lg'>
                                    <img className='w-28 h-28' src={dish.item.strCategoryThumb} alt="Cart Item" />
                                    <div className='grid w-fit'>
                                        <h1 className='ml-1 font-black'>{dish.item.strCategory}</h1>
                                        <p className='font-thin'>
                                            {(
                                                (dish.item.strCategoryDescription +
                                                    ' A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. Calls a defined callback function on each element of an array, and returns an array that contains the results.'
                                                ).substring(0, 150)
                                            )}
                                        </p>
                                    </div>
                                    <div className='flex'>
                                        <Cart text={dish.item} itmid={i} show={true} c={dish.quantity} />
                                    </div>
                                </div>
                            ))
                        }

                        {/* Fixed bottom bar */}
                        <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
                            <span className="text-lg font-semibold">Total: ₹999</span>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                                Go To Payment's
                            </button>
                        </div>
                    </>
                ) : (<>
                    <div className='flex flex-col gap-5 justify-center items-center'>
                        <div className="flex justify-center items-center">
                            <video
                                src={cartvideo}
                                className="w-[40%] h-fit"
                                autoPlay
                                muted
                                loop
                                playsInline
                            ></video>
                        </div>
                        <h1 className='mx-auto text-gray-500'>Cart Is Empty!</h1>
                    </div></>
                )
            }
        </div>
    );
}

export default CartPage;
