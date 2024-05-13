import { Link } from "react-router-dom"
import Input from "../Components/Input/Input"
import Button from "../Components/Button/Button"
import { FaGoogle } from "react-icons/fa"
import { useState } from "react"

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex z-10 items-center pt-20 justify-center h-screen">
            <div className="flex w-full h-full items-center justify-between rounded-md bg-white py-8 border shadow-lg">
                <div className="w-[800px]">
                    <img src="/bg2.jpg" alt="" className="w-full h-[600px]" />
                </div>
                <div className="flex h-fit w-[400px] flex-col justify-center items-center gap-4 mr-40">
                    <img src="/logo.png" alt="" className="w-48" />
                    <div className="w-full flex flex-col gap-4">
                        <Input label={'Full Name'} type={'text'} />
                        <Input label={'Email'} type={'email'} />
                        <Input label={'Password'} type={'password'} />
                    </div>
                    <div className="flex w-full mt-2">
                        <Button name={'Register'} className={'rounded-full'} bgColor={'#1C80C2'} />
                    </div>
                    <div className="flex w-full gap-4 items-center">
                        <div className="w-full border-2"></div>
                        <p className="flex text-sm text-zinc-400 w-full">or login with</p>
                        <div className="w-full border-2"></div>
                    </div>
                    <div className="flex w-full">
                        <button className="text-[#4285F4] flex items-center justify-center gap-3 font-semibold px-6 py-3 w-full rounded-full hover:opacity-90 transition-all ease-in border duration-150 border-[#4285F4]">
                            <FaGoogle size={18} />
                            Google
                        </button>
                    </div>
                    <h2 >
                        Already have an account? <Link to={'/login'} className="underline underline-offset-2 text-sky-600">Login</Link>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Register