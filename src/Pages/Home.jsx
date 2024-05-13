import { Link } from "react-router-dom";
import Button from "../Components/Button/Button";

const Home = () => {
    return (
        <div className="px-32 h-screen py-40 flex justify-center">
            <div className="flex flex-col gap-3 mt-14">
                <h2 className="text-6xl font-semibold text-zinc-800">Welcome</h2>
                <h3 className="text-3xl">to <span className="font-semibold">Digital</span> Lync.</h3>
                <p className="text-xl text-zinc-700 mt-8">
                    Here you can, add employee add candidate update their info and data you can as well delete their data. A human resource management system (HRMS) helps businesses manage and automate their core HR processes such as employee data storage, benefits administration, time and attendance, and payroll.
                </p>
                <div className="flex gap-10 pr-40 mt-8">
                    <Link to={'/register'} className="w-full">
                        <Button name={'Sign Up'} bgColor={'#F2C618'} />
                    </Link>
                    <Link to={'/login'} className="w-full">
                        <Button name={'Login'} bgColor={'#DA3638'} />
                    </Link>
                </div>
            </div>
            <img src="homeBg.jpg" alt="" className="h-[500px] w-[500px]" />
        </div>
    )
}

export default Home