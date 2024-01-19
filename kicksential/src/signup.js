import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'bulma-toast'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState([])
    const [error2, setError2] = useState('')

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
        if(password === password2){
            setError2('')
            const signUpData = {
                username: username,
                password: password
            }
            axios
                .post('http://127.0.0.1:8000/api/v1/users/', signUpData)
                .then(()=>{
                    window.location.replace('/login')
                })
                .catch((err)=>{
                    setError(err.response.data)
                    console.log(err.response.data)

                    toast({
                        message: `${error.password || error.username}`,
                        type: 'error',
                        dismissable: true,
                        pauseOnHover: true,
                        duration: 2000,
                        position: 'bottom-right',
                    })
                })

        } else{
            setError2("Passwords don't match")
            toast({
                message: "Passwords don't match",
                type: 'is-error',
                dismissable: true,
                pauseOnHover: true,
                duration: 2000,
                position: 'bottom-right',
                style: {
                    backgroundColor: 'red',
                    color: 'black'
                }
            })
            console.log(error2)

        }
        
    }

    return (
        <div className="flex flex-col h-screen justify-center">
            <Link to='/'><h1 className="flex justify-center items-center text-black  hover:text-neutral-600 duration-500 text-4xl font-bold m-3 p-2 cursor-pointer">KICKSENTIAL.</h1></Link>
            <div className="w-full h-3/6 flex justify-center">
                <div className="flex flex-col h-[300px] w-1/3 items-center">
                    <form>
                        <input onChange={(e)=>{
                            handleUsername(e)
                        }} type="text" placeholder="username" className="flex border-2 p-2 mb-3 border-black rounded-lg w-56"/>
                        <input onChange={(e)=>{
                            handlePassword(e)
                        }} type="text" placeholder="password" className="flex border-2 p-2 mb-3 border-black rounded-lg w-56"/>
                        <input onChange={(e)=>{
                            handlePassword2(e)
                        }} type="text" placeholder="confirm password" className="flex border-2 p-2 mb-3 border-black rounded-lg w-56"/>
                    </form>


                    {error.password || error.username ? 
                    (
                        <div className="flex justify-center bg-red-300 m-3 p-3 rounded">
                            <p className="flex">{error.password || error.username}</p>
                        </div>
                    ) : 
                    (
                        <p className="hidden">.</p>
                    )}

                {error2  ? 
                    <div className="flex justify-center bg-red-300 m-3 p-3 rounded">
                        <p className="flex">{error2}</p>
                    </div>
                    :
                    <p className="hidden">.</p> 
                }

                    <button onClick={handleSubmit} className="flex w-56 text-white bg-black rounded-xl p-2 mb-2 justify-center">Signup</button>
                    <p className="flex">already have an account?<Link to='/login' className="text-blue-500">login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;