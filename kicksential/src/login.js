import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e) =>{
        setUsername(e.target.value)
        console.log(username)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
        console.log(password)

    }

    return (
        <div>
            <h1 className="flex justify-center items-center text-neutral-600 text-4xl font-bold duration-500 m-3 p-2 cursor-pointer">KICKSENTIAL.</h1>
            <div className="w-full h-screen flex justify-center items-center flex-col">
                <div className="flex flex-col w-fit">
                    <form>
                        <input onChange={(e)=>{
                            handleUsername(e)
                        }} type="text" placeholder="username" className="flex border-2 p-2 border-black rounded-lg w-56"/>
                        <input onChange={(e)=>{
                            handlePassword(e)
                        }} type="text" placeholder="Password" className="flex border-2 p-2 border-black rounded-lg w-56"/>
                    </form>
                    <button className="flex w-56 text-white bg-black rounded-xl p-2 justify-center">Login</button>
                    
                </div>
            </div>
        </div>
    );
}

export default Login;