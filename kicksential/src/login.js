import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'bulma-toast'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
                console.log(token)
                localStorage.setItem('Token', JSON.stringify(token))
                toast({
                    message: ' Succesfully logged in!',
                    type: 'is-success',
                    dismissable: true,
                    pauseOnHover: true,
                    duration: 2000,
                    position: 'bottom-right',
                })
            })
    }


    return (
        <div>
            <Link to={'/'}>
                <h1 className="flex justify-center items-center text-neutral-600 text-4xl font-bold duration-500 m-3 p-2 cursor-pointer">KICKSENTIAL.</h1>
            </Link>
            <div className="w-full h-screen flex justify-center items-center flex-col">
                <div className="flex flex-col w-fit">
                    <form>
                        <input onChange={(e)=>{
                            handleUsername(e)
                        }} type="text" placeholder="username" className="flex border-2 p-2 border-black rounded-lg w-56"/>
                        <input onChange={(e)=>{
                            handlePassword(e)
                        }} type="Password" placeholder="Password" className="flex border-2 p-2 border-black rounded-lg w-56"/>
                    </form>
                    <button onClick={handleSubmit} className="flex w-56 text-white bg-black rounded-xl p-2 justify-center">Login</button>
                    
                </div>
            </div>
        </div>
    );
}

export default Login;