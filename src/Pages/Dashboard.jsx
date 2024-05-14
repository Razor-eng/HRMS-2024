import { useEffect, useState } from "react"
import DashboardCard from "../Components/Cards/DashboardCard"

const Dashboard = () => {
    const [total, setTotal] = useState(0);
    const [present, setPresent] = useState(0);
    const [absent, setAbsent] = useState(0);

    useEffect(() => {
        setTotal(7);
        setPresent(4);
        setAbsent(3);
    }, [])


    return (
        <div className="h-screen py-28 px-28">
            <h2 className="text-3xl font-semibold">Dashboard</h2>
            <div className="grid grid-cols-3 gap-6 mt-5">
                <DashboardCard title={'Total Employees'} value={7} total={7} bgColor={'#2267ddb2'} />
                <DashboardCard title={'Total Present'} value={4} total={7} bgColor={'#22DD89'} />
                <DashboardCard title={'Total Absent'} value={3} total={7} bgColor={'#f32a30'} />
            </div>
            <div className="grid grid-cols-5 gap-6 mt-8">
                <div className="border flex gap-5 shadow-2xl px-10 py-10 col-span-2">
                    <img className="inline-block size-[100px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"></img>
                    <div className="flex flex-col gap-2 pt-3">
                        <h2 className="font-semibold text-lg">Rajat Kumar Maharana</h2>
                        <h4 className="text-sm">mrajat00@gmail.com</h4>
                    </div>
                </div>
                <div className="border col-span-3 px-8 py-6 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <h2 className="text-xl text-zinc-600 font-semibold">Summary</h2>
                    <div className="flex justify-between px-10">
                        <div className="mt-20">
                            <table className="divide-y divide-gray-200 border shadow-md">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-6 border-r text-start text-xs font-semibold text-gray-600 uppercase">Total</th>
                                        <th scope="col" className="px-6 py-6 border-r text-start text-xs font-semibold text-gray-600 uppercase">Present</th>
                                        <th scope="col" className="px-6 py-6 text-start text-xs font-semibold text-gray-600 uppercase">Absent</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-6 border-r whitespace-nowrap text-sm text-gray-700 text-center">{total}</td>
                                        <td className="px-6 py-6 border-r whitespace-nowrap text-sm text-gray-700 text-center">{present}</td>
                                        <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-700 text-center">{absent}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 px-6">
                            <DashboardCard value={4} total={7} circular={true} />
                            <p className="text-xl text-zinc-600">Attendance Percentage</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard