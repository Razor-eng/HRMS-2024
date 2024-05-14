/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const DashboardCard = ({ title, total, value, bgColor, circular }) => {
    const [val, setVal] = useState(0);

    const valueData = () => {
        let i = 0;
        while (i <= value) {
            setVal((i / total) * 100)
            i++;
        }
    }

    useEffect(() => {
        valueData()
    }, [])

    return (
        <div>
            {!circular ?
                <div className="w-full px-8 py-10 rounded-lg border-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-zinc-400" style={{ borderColor: `${bgColor}`, color: `${bgColor}` }}>
                    <h2 className="font-semibold text-xl">{title}</h2>
                    <h2 className="font-semibold text-xl mt-3">{value}</h2>
                    <div className="w-full">
                        <div
                            className={`inline-block mb-2 py-0.5 px-1.5 border text-xs font-medium rounded-sm transition-all ease-in duration-1000`}
                            style={{ marginLeft: `calc(${val}% - 2rem)`, borderColor: `${bgColor}` }}
                        >
                            {(val).toFixed(2)}%
                        </div>
                        <div className="flex w-full h-5 bg-gray-200 rounded-sm overflow-hidden" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="flex flex-col justify-center rounded-sm overflow-hidden text-xs text-white text-center whitespace-nowrap transition-all ease-in duration-1000" style={{ width: `${val}%`, backgroundColor: `${bgColor}` }}></div>
                        </div>
                    </div>
                </div>
                :
                <div className="relative size-56">
                    <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#22DD89]" strokeWidth="2" strokeDasharray="100" strokeDashoffset="0"></circle>
                        <g className="origin-center -rotate-90 transform">
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current transition-all ease-in duration-1000 text-[#f32a30]" strokeWidth="2" strokeDasharray="100" strokeDashoffset={val}></circle>
                        </g>
                    </svg>
                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <span className="text-center z-10 text-2xl font-bold text-gray-800">{((4 / 7) * 100).toFixed(2)}%</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default DashboardCard