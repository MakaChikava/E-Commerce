import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

const Success = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col items-center justify-center w-full h-screen">
                <h1 className="flex justify-center items-center text-2xl w-full mb-5">Purchase succesfull!</h1>
                <Link to="/"><button className="flex rounded items-center justify-center w-[150px] h-[40px] bg-black text-white">Home</button></Link>
            </div>
        </div>
    );
}

export default Success;