import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'bulma-toast'
import { useDispatch } from "react-redux";
import { setToken } from "./redux/authSlice";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState([''])
    const dispatch = useDispatch()


    const handleUsername = (e) =>{
        setUsername(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = () =>{
        const loginData = {
            password: password,
            username: username
        }
        axios
            .post('http://127.0.0.1:8000/api/v1/token/login/', loginData)
            .then((res)=>{
                const token = res.data.auth_token
                dispatch(setToken(token))
                toast({
                    message: ' Succesfully logged in!',
                    type: 'is-success',
                    dismissable: true,
                    pauseOnHover: true,
                    duration: 2000,
                    position: 'bottom-right',
                })
                localStorage.setItem('user', username)
                window.location.replace('/')
            })
            .catch((error)=>{
                setError(error.response.data)
            })
    }


    return (
        <div className="flex flex-col h-screen justify-center">
            <Link to={'/'}>
                <h1 className="flex justify-center items-center text-black  hover:text-neutral-600 duration-500 text-4xl font-bold m-3 p-2 cursor-pointer">KICKSENTIAL.</h1>
            </Link>
            <div className="w-full h-3/6 flex justify-center">
                <div className="flex flex-col h-[300px] w-1/3 items-center">
                    <form>
                        <input onChange={(e)=>{
                            handleUsername(e)
                        }} type="text" placeholder="Username" className="flex border-2 p-2 mb-3 border-black rounded-lg w-56"/>
                        <input onChange={(e)=>{
                            handlePassword(e)
                        }} type="Password" placeholder="Password" className="flex border-2 p-2 mb-3 border-black rounded-lg w-56"/>
                    </form>

                    {error.non_field_errors ? 
                    (
                        <div className="flex justify-center bg-red-300 m-3 p-3 rounded">
                            <p className="flex">The username or password you entered is incorrect.</p>
                        </div>
                    ) : 
                    (
                        <p className="hidden">.</p>
                    )}

                    <button onClick={handleSubmit} className="flex w-56 text-white bg-black rounded-xl p-2 justify-center">Login</button>

                    <p className="flex mt-3">Don't have an account? <Link to="/signup" className="text-blue-500 ml-1">Signup</Link></p>
                    
                </div>
            </div>
        </div>
    );
}

export default Login;