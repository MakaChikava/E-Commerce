
import Navbar from "./components/Navbar";
const Cart = () => {
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
                <h1 className="font-bold text-3xl">Your Cart Items (0)</h1>
            </div>

            <div className='flex w-fit flex-col p-8'>
                <img 
                src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c92d772-f288-472e-97f1-4e1c9b3c3265/air-force-1-07-premium-mens-shoes.png'
                className='h-[200px] w-[200px]'
                alt="shoe"
                />

                <div className='flex justify-between'>
                    <div className='flex flex-col p-2'>
                        <p className='font-semibold'>Airforce I</p>
                    </div>
                    <div className='flex p-2'>
                        <p className='font-semibold'>$130</p>
                    </div>
                </div>
            </div>
        </div>
        {/* summary section */}
            <div className="flex flex-col w-1/4 bg-gray-100">
                <div className="flex">
                    <h1 className="font-bold text-2xl p-4">Summary</h1>
                </div>

                <div className="flex justify-between p-4 w-full">
                        <p className="flex">Airforce I</p>
                        <p className="flex">$130.00</p>
                </div>

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