
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "./redux/cartSlice";
import { useEffect } from "react";

const Cart = () => {
    const cartItems = useSelector((state)=> state.cart.cartItems)
    const cart = useSelector((state)=> state.cart)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getTotals())
    }, [cart])

    const handleDelete = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    const increaseQuantity = (product)=>{
        dispatch(addToCart(product))
    }

    const decreaseQuantity = (product)=>{
        dispatch(decreaseCart(product))
    }

    const handlePurchase = () =>{
        window.location.replace('/success')
        dispatch(clearCart())
    }

    return (
        <>
        <div className="flex flex-col h-screen">
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <br/>

        <div className="flex">
            <div className="flex flex-col h-screen w-3/4">
                <div className="flex justify-center">
                    <h1 className="font-bold text-3xl">Cart</h1> {/* Put on navbar */}
                </div>

                {cartItems.length === 0?(
                        <p className=" m-8 text-xl font-semibold">There are no items</p>
                    ):(
                    <>
                    {/* CART ITEMS CONTAINER */}
                    <div className='flex w-full h-screen flex-col  p-8 divide-y'>
                        
                    {cartItems.map((cartItem)=>(
                        // ONE CART ITEM CONTAINER
                            <div className="flex justify-between mb-2">
                                {/* image and name container*/}
                                <div className="flex justify-between w-[250px]">
                                    <div className="flex">
                                        <img src={cartItem.image} className="h-[100px] w-[100px]"/>
                                    </div>
                                    <div className="flex w-[150px]">
                                        <h3 className="ml-1">{cartItem.name}</h3>
                                    </div>
                                </div>
                                {/* price container */}
                                <div className="flex justify-center w-1/3">
                                    <p>${cartItem.price}</p>
                                </div>
                                {/* quantity and remove button container */}
                                <div className="flex justify-around w-1/3">
                                    {/* quantity container */}
                                    <div className="flex h-1/3 w-[90px] items-center justify-between">
                                        <button className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-2xl" 
                                        onClick={()=>decreaseQuantity(cartItem)}>-</button>

                                        <p className=" font-medium">{cartItem.cartQuantity}</p>

                                        <button onClick={()=>increaseQuantity(cartItem)}
                                        className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-xl">+</button>
                                    </div>
                                    {/* remove button container */}
                                    <div className="flex h-1/3">
                                        <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor" 
                                        aria-hidden="true" 
                                        className=" text-gray-500 w-[20px] hover:cursor-pointer"
                                        onClick={()=> handleDelete(cartItem)}>
                                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                                        </svg>
                                    </div>

                                </div>
                            </div>
                            
                        ))}
                        </div>
                        </>
                        )}


        </div>
        
        {/* summary section */}
            <div className="flex flex-col w-1/4 bg-gray-100 sticky">
                <div className="flex">
                    <h1 className="font-bold text-2xl p-4">Summary</h1>
                </div>
                
                <ul className="divide-y divide-gray-50">

                {cartItems.map((cartItem)=>(
                    <>
                    <li>
                        <div className="flex justify-between p-4 w-full">
                            <p className="flex">{cartItem.cartQuantity}x {cartItem.name}</p>
                            <p className="flex">${cartItem.price * cartItem.cartQuantity}</p>
                        </div>
                    </li>

                    </>
                ))}
                </ul>

                <div className="flex w-full justify-between p-4">
                    <p className="flex font-bold">Total</p>
                    <p className="flex font-bold">${cart.cartTotalAmount}</p>
                </div>

                

                <div className="flex w-full">
                    <button
                    onClick={() => handlePurchase()}
                    className="flex justify-center bg-black text-white text-xl font-md rounded-full h-fit w-full p-5">Purchase</button>
                </div>

            </div>
        {/* --------- */}
        </div>
        </div>
        </>
    );
}

export default Cart;