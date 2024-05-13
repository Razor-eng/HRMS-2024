/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5"
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavModal = ({ NavItems, open, setOpen }) => {
    const [selected, setSelected] = useState(0);

    return (
        <div className={`${open ? 'w-screen' : 'w-0'} h-screen z-50 fixed overflow-hidden top-0 bg-black bg-opacity-60`}>
            <div className={`h-full z-50 fixed bg-zinc-100 overflow-hidden transition-all ease-in duration-200 ${open ? 'w-80' : 'w-0'}`}>
                <div className={`${open ? 'flex' : 'hidden'} flex-col`}>
                    <div className="flex justify-between px-4 py-4">
                        <img src="/logo.png" alt="" className="w-32" />
                        <button
                            className="p-1 rounded-md w-fit h-fit active:scale-90 transition-all outline-none ease-in duration-200 shadow-md bg-zinc-300 hover:opacity-80"
                            onClick={() => setOpen(false)}
                        >
                            <IoClose size={24} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-3 mt-6 pl-10">
                        {NavItems.map((item, id) => (
                            <div className="flex flex-col" key={id}>
                                <div
                                    className="text-xl flex items-center justify-between hover:bg-zinc-300 rounded-lg px-6 py-2 cursor-pointer w-52"
                                    onClick={() => { selected === id ? setSelected(0) : setSelected(id) }}
                                >
                                    <div className="flex items-center gap-2">
                                        <item.icon />
                                        <h2 className="col-span-3">{item.title}</h2>
                                    </div>
                                    {id !== 0 &&
                                        <RiArrowDropDownLine className={`${selected === id ? 'rotate-180' : ''}`} />
                                    }
                                </div>
                                {id !== 0 &&
                                    (selected === id &&
                                        <div className="bg-zinc-200 mr-[72px] rounded-md flex flex-col gap-3 py-4 overflow-hidden cursor-pointer">
                                            {item.subNav?.map((item, id) => (
                                                <div className={`flex items-center text-zinc-600 hover:text-zinc-950 pl-4 mx-2 py-1 rounded-md text-sm gap-2 active:scale-95 hover:scale-105 hover:shadow-md transition-all ease-in duration-150`} key={id}>
                                                    <item.icon size={18} />
                                                    <h2 className="col-span-3">{item.title}</h2>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavModal