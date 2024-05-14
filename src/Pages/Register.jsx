/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom"
import Input from "../Components/Input/Input"
import Button from "../Components/Button/Button"
import { FaGoogle } from "react-icons/fa"
import { useEffect, useState } from "react"

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const isValidName = () => {
        if (/\s/.test(name) && name.length > 8) {
            setValidName(true);
        } else {
            setValidName(false);
        }
    }
    const isValidEmail = () => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    }
    const isValidPassword = () => {
        if (password.length > 6) {
            setValidPassword(true);
        } else {
            setValidPassword(false);
        }
    }

    useEffect(() => {
        isValidName();
        isValidEmail();
        isValidPassword();
    }, [name, email, password]);


    return (
        <div className="flex items-center pt-20 justify-center h-screen bg-gradient-to-r from-yellow-300 via-green-500 to-blue-500">
            <div className="flex w-[1000px] h-[660px] rounded-md bg-white py-8 pr-8">
                <div className="w-full mt-10">
                    <img src="/bg2.jpg" alt="" className="w-full h-[560px]" />
                </div>
                <div className="flex h-fit z-40 border w-96 flex-col bg-zinc-100 justify-center items-center gap-4 px-10 py-6 shadow-lg rounded-md">
                    <img src="/logo.png" alt="" className="w-48" />
                    <div className="w-96 px-6 flex flex-col gap-4">
                        <Input label={'Full Name'} type={'text'} value={name} setValue={setName} check={validName} />
                        <Input label={'Email'} type={'email'} value={email} setValue={setEmail} check={validEmail} />
                        <Input label={'Password'} type={'password'} value={password} setValue={setPassword} check={validPassword} />
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