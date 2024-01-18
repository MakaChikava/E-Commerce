import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'bulma-toast'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState('')

    const handleUsername = (e) =>{
        setUsername(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)

    }

    const handlePassword2 = (e) =>{
        setPassword2(e.target.value)

    }

    const handleSubmit = () =>{
        if(username===''){
            setError('the username is missing')
            console.log(error)
            return;
        }else{
            setError('')
        }
        if (password===''){
            setError('the password is missing')
            console.log(error)
            return;
        }else{
            setError('')
        }
        if (password === password2){
            setError('')
            console.log("Password set!")
        } else{
            setError('Passwords do not match!')
            console.log(error)
        }

        if(error === ''){
            const signUpData = {
                username: username,
                password: password
            }
            axios
                .post('http://127.0.0.1:8000/api/v1/users/', signUpData)
                .then((res)=>{
                    toast({
                        message: ' Acount created, please log in!',
                        type: 'is-success',
                        dismissable: true,
                        pauseOnHover: true,
                        duration: 2000,
                        position: 'bottom-right',
                    })
                    window.location.replace('/login')
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    }

    return (
        <div>
            <h1 className="flex justify-center items-center text-neutral-600 text-4xl font-bold duration-500 m-3 p-2 cursor-pointer">KICKSENTIAL.</h1>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="flex flex-col w-fit">
                    <form>
                        <input onChange={(e)=>{
                            handleUsername(e)
                        }} type="text" placeholder="username" className="flex border-2 p-2 border-black rounded-lg w-56"/>
                        <input onChange={(e)=>{
                            handlePassword(e)
                        }} type="text" placeholder="password" className="flex border-2 p-2 border-black rounded-lg w-56"/>
                        <input onChange={(e)=>{
                            handlePassword2(e)
                        }} type="text" placeholder="confirm password" className="flex border-2 p-2 border-black rounded-lg w-56"/>
                    </form>

                    <div className="bg-red-500">
                        <p>{error}</p>
                    </div>

                    <button onClick={handleSubmit} className="flex w-56 text-white bg-black rounded-xl p-2 justify-center">Signup</button>
                    <p className="flex w-fit">already have an account?<Link to='/login' className="text-blue-500">login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;