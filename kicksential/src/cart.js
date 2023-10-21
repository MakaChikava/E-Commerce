import Navbar from "./components/Navbar";
const Cart = () => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="flex justify-center">
                <h1 className="text-red-500 text-2xl">Your Cart Items (0)</h1>
            </div>
        </div>
    );
}

export default Cart;