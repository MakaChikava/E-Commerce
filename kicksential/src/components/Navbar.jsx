import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getTotals } from "../redux/cartSlice";
import { removeToken } from "../redux/authSlice";

const Navbar = () => {
    const [isAuthenticated] = useState(JSON.parse(localStorage.getItem("isAuthenticated")))
    const cart = useSelector((state)=> state.cart)
    const dispatch = useDispatch()

    const handleLogout = () =>{
        dispatch(removeToken())
        window.location.replace('/')
    }

    useEffect(()=>{
        dispatch(getTotals())
    }, [cart])
    return (
        <header className="bg-gray-200 fixed top-0 w-full shadow-md z-10">
            <nav className="flex justify-between">
                <Link to='/'>
                <h1 className="text-black text-4xl font-bold hover:text-neutral-600 duration-500 m-3 p-2 cursor-pointer">KICKSENTIAL..</h1>
                </Link>
                <div className="flex w-[320px] items-center justify-around">
                <Link to='/favorites'>
                    <svg 
                        aria-label="Like" 
                        className="h-[28px] w-[28px] flex" 
                        color="rgb(38, 38, 38)" 
                        fill="rgb(38, 38, 38)" 
                        role="img" 
                        viewBox="0 0 24 24">
                        <title>favorite</title>
                        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                    </svg>
                </Link>
                <Link to='/cart'>
                    <div className="flex">
                        <svg 
                            aria-hidden="true" 
                            className="h-[30px] w-[30px] flex" 
                            focusable="false" 
                            viewBox="0 0 24 24" 
                            role="img" 
                            fill="none">
                            <title>Cart</title>
                            <path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
                        </svg>
                        <div className="w-6 h-6 rounded-full bg-black -translate-x-2 -translate-y-4">
                            <h1 className="flex justify-center text-white ">{cart.cartTotalQuantity}</h1>
                        </div>
                    </div>
                </Link>
                {isAuthenticated ?
                        <h1 className=" font-medium"> Hi {localStorage.getItem('user')}!</h1> : <></>
                }
                {isAuthenticated ? 
                    <button onClick={()=> handleLogout()} className="flex h-2/3 items-center bg-black hover:bg-neutral-600 duration-500 text-white rounded-full m-3 p-2 pl-4 pr-4">Logout</button> : 
                    <Link to='/signup'><button className="flex h-2/3 items-center bg-black hover:bg-neutral-600 duration-500 text-white rounded-full m-3 p-2 pl-4 pr-4">Login / Signup</button></Link>
                }
                
                </div>
            </nav>
            </header>
    );
}

export default Navbar;