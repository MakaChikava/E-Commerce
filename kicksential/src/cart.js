
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector((state)=> state.cart.cartItems)
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
                    <h1 className="font-bold text-3xl">Cart</h1>
                </div>

                <div className='flex w-full flex-col p-8'>
                        <div>
                            <div className="flex justify-between">
                                <h3 className="font-bold">Product</h3>
                                <h3 className="font-bold">Price</h3>
                                <h3 className="font-bold">Quantity</h3>
                            </div>
                            <br/>
                {cart.length === 0?(
                        <p>there are no items</p>
                    ):(
                    <>
                    {cart.map((cartItem)=>(
                            <div className="flex justify-between">
                                <h3>
                                <img 
                                    src={cartItem.get_image}
                                    className="h-[100px]"
                                />
                                    {cartItem.name}
                                </h3>
                                <p>${cartItem.price}</p>
                                <div className="flex h-fit w-[50px] justify-between">
                                    <button>-</button>
                                    <p>{cartItem.cartQuantity}</p>
                                    <button>+</button>
                                </div>
                            </div>
                        ))}
                        </>
                        )}
                        </div>
                </div>
        </div>
        
        {/* summary section */}
            <div className="flex flex-col w-1/4 bg-gray-100">
                <div className="flex">
                    <h1 className="font-bold text-2xl p-4">Summary</h1>
                </div>
                
                {cart.map((cartItem)=>(
                    <>
                        <div className="flex justify-between p-4 w-full">
                            <p className="flex">{cartItem.cartQuantity}x {cartItem.name}</p>
                            <p className="flex">${cartItem.price * cartItem.cartQuantity}</p>
                        </div>

                    </>
                ))}

                <div className="flex w-full justify-between p-4">
                    <p className="flex font-bold">Total</p>
                    <p className="flex font-bold">$130.00</p>
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