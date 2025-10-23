import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartTile from '../components/header/cart-tile';

export default function Cart() {

    const [totalCart, setTotalCart] = useState(0)

    const { cart } = useSelector((state) => state);

    useEffect(() => {
        setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

    console.log(cart, totalCart);


    return (
        <>
            {
                cart && cart.length ? ( 
                <div className='flex flex-row justify-between'>
                  <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-3 gap-4' >
                    
                        {
                            cart.map(cartItem => <CartTile cartItem={cartItem} /> )
                        }

                  
                </div>

                <div>
                    <div className='flex flex-col justify-center items-start p-5 space-y-5 mt-14'>
                        <h1 className='font-bold text-lg text-red-800'>
                            Your cart Summary
                        </h1>
                        <p>
                            <span className='text-gray-800 font-bold'>Total Items</span>
                            <span>:{cart.length}</span>

                        </p>

                        <p>
                            <span className='text-gray-800 font-bold'>Total Items</span>
                            <span>:{totalCart}</span>

                        </p>
                    </div>
                </div>
                </div>
              ) :

                    <div className='min-h-[80vh] flex flex-col justify-center items-center mr-4'>
                        <h1 className='text-gray-800 font-bold text-xl mb-2'>Your cart is empty</h1>
                        <Link to={'/'}>
                            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">Shop Now</button>
                        </Link>
                    </div>
            }
        </>
    )
}
