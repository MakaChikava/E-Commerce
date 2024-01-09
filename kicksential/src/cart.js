
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseCart, getTotals, removeFromCart } from "./redux/cartSlice";
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
                    <h1 className="font-bold text-3xl">Shopping cart</h1> {/* Put on navbar */}
                </div>

                {cartItems.length === 0?(
                        <p>there are no items</p>
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
                                        <img src={cartItem.get_image} className="h-[100px] w-[100px]"/>
                                    </div>
                                    <div className="flex w-[150px]">
                                        <h3>{cartItem.name}</h3>
                                    </div>
                                </div>
                                {/* price container */}
                                <div className="flex justify-center w-1/3">
                                    <p>${cartItem.price}</p>
                                </div>
                                {/* quantity and remove button container */}
                                <div className="flex flex-col justify-around items-center w-1/3">
                                    {/* quantity container */}
                                    <div className="flex h-1/3 w-[90px] items-center justify-between">
                                        <button className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-2xl" 
                                        onClick={()=>decreaseQuantity(cartItem)}>-</button>

                                        <p>{cartItem.cartQuantity}</p>

                                        <button onClick={()=>increaseQuantity(cartItem)}
                                        className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-xl">+</button>
                                    </div>
                                    {/* remove button container */}
                                    <div className="flex h-1/3">
                                        <button className="flex" onClick={()=> handleDelete(cartItem)}>Remove</button>
                                    </div>

                                </div>
                            </div>
                            
                        ))}
                        </div>
                        </>
                        )}
        </div>
        
        {/* summary section */}
            <div className="flex flex-col w-1/4 bg-gray-100">
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
                    <button className="flex justify-center bg-black text-white text-xl font-md rounded-full h-fit w-full p-5">Checkout</button>
                </div>

            </div>
        {/* --------- */}
        </div>
        </div>
        </>
    );
}

export default Cart;