import { FaGoogle } from "react-icons/fa"
import Button from "../Components/Button/Button"
import Input from "../Components/Input/Input"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="flex items-center pt-16 justify-center h-screen bg-gradient-to-r from-yellow-300 via-green-500 to-blue-500">
            <div className="flex w-[900px] h-[648px] rounded-md bg-white py-8 px-8">
                <div className="flex h-fit border w-96 mt-8 flex-col bg-zinc-100 justify-center items-center gap-4    px-10 py-6 shadow-lg rounded-md">
                    <img src="/logo.png" alt="" className="w-48" />
                    <div className="w-72 flex flex-col gap-4">
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
                    <h2>
                        Already have an account? <Link to={'/register'} className="underline underline-offset-2 text-sky-600">Login</Link>
                    </h2>
                </div>
                <div className="w-full">
                    <img src="/bg1.jpg" alt="" className="w-full h-full" />
                </div>
            </div>
        </div>
    )
}

export default Login