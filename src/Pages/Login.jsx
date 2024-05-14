import { FaGoogle } from "react-icons/fa"
import Button from "../Components/Button/Button"
import Input from "../Components/Input/Input"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="flex items-center pt-16 justify-center h-screen bg-gradient-to-r from-yellow-300 via-green-500 to-blue-500">
            <div className="flex w-[1000px] h-[660px] mt-4 rounded-md bg-white py-8 px-8">
                <div className="flex h-fit border w-96 mt-4 flex-col bg-zinc-100 justify-center items-center gap-4    px-10 py-6 shadow-lg rounded-md">
                    <img src="/logo.png" alt="" className="w-48" />
                    <div className="w-72 flex flex-col gap-4">
                        <Input label={'Email'} type={'email'} />
                        <div className="flex flex-col gap-2 mb-6">
                            <Input label={'Password'} type={'password'} />
                            <div className="flex justify-between">
                                <div className="flex gap-1">
                                    <input type="checkbox" className="cursor-pointer" />
                                    <p className="text-sm text-zinc-400">Remember me</p>
                                </div>
                                <p className="underline text-sm text-blue-400 hover:opacity-80 cursor-pointer">Forgot Password?</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full mt-2">
                        <Button name={'Login'} className={'rounded-full'} bgColor={'#1C80C2'} />
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
                        {`Don't`} have an account? <Link to={'/register'} className="underline underline-offset-2 text-sky-600">Register</Link>
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