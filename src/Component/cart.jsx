import React, { useContext, useEffect, useState } from 'react'
import cartImg from '../assets/shopping-bag.png'
import { cartContext } from '../App.jsx'
function Cart({ text, itmid, show, c }) {
    const [click, setClick] = useState(0);
    const [cart, setCart] = useState(show);
    const [count, setCount] = useState(c);
    const { cartItems, setCartItems } = useContext(cartContext)
    const handleAddToCart = () => {
        setCart(true);
        const newItem = { item: text, id: itmid, quantity: count };
        setCartItems(prev => [...prev, newItem]);
    };

    const handleIncrement = () => setCount(prev => prev + 1);

    const handleDecrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1);
        } else {
            setCart(false);
        }
    };

    useEffect(() => {
        if (cart) {
            setCartItems(prevCart =>
                prevCart.map(item =>
                    item.id === itmid ? { ...item, quantity: count } : item
                )
            );
            console.log(cartItems)
        }
    }, [setCount, count, click]);
    return (
        <div className=' absolute bottom-0 right-0 flex justify-evenly  bg-white  text-red-400 w-14 rounded-2xl cursor-pointer hover:bg-white hover:text-black'>
            {
                (cart) ? (
                    <div>
                        <button onClick={() => { setClick(click + 1), handleDecrement() }}>-</button>
                        <span className=' mx-2'>{count}</span>
                        <button onClick={() => { setClick(click + 1), handleIncrement() }}>+</button>
                    </div>
                )
                    : (
                        <button onClick={() => { setClick(click + 1), handleAddToCart() }}>
                            <img src={cartImg} className=' w-4 h-4 mb-2' />
                        </button>
                    )
            }
        </div>
    )
}

export default Cart