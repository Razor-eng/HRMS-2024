import { useState } from "react";
import DataInput from "../Input/DataInput";
import Button from "../Button/Button";
import AddPunchingModal from "../Modal/AddPunchingModal";

const AddAttendance = () => {
    const [eid, setEid] = useState('');
    const [punchDate, setPunchDate] = useState('');
    const [name, setName] = useState('');
    const [inTime, setInTime] = useState('');
    const [outTime, setOutTime] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [modal, setModal] = useState(false);
    const [punchings, setPunchings] = useState(JSON.parse(localStorage.getItem('punchings')) || []);

    const handleSubmit = () => {
        let punchings = JSON.parse(localStorage.getItem('punchings')) || [];
        let punchingData = {
            employeeNo: eid,
            name: name,
            punchDate: punchDate,
            inTime: inTime,
            outTime: outTime
        }
        punchings.push(punchingData);
        localStorage.setItem('punchings', JSON.stringify(punchings))
        setPunchings(punchings);
    }

    return (
        <div className="pt-24 px-48">
            <h2 className="text-3xl font-semibold">Add Attendance</h2>
            <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl text-zinc-700 font-semibold">Manual Punching</h2>
                    <Button name={'Add Punching'} bgColor={'#4ea3ce'} className={'max-w-fit mt-2'} onClick={() => setModal(true)} />
                </div>
                <div className="grid grid-cols-3 gap-12 border py-4 px-6 shadow-md">
                    <DataInput placeholder={'From Date'} label={'From'} type={'text'} value={from} setValue={setFrom} />
                    <DataInput placeholder={'To Date'} label={'To'} type={'text'} value={to} setValue={setTo} />
                    <div className="flex items-end">
                        <Button name={'Filter'} bgColor={'#505459'} className={'w-28 mt-2'} onClick={handleSubmit} />
                    </div>
                </div>
                <div className="mt-2 border px-4 py-3 shadow-md h-[420px] overflow-y-auto">
                    <h2 className="text-xl font-semibold text-zinc-700 text-center underline">Punching Table</h2>
                    <table className="min-w-full mt-4 divide-y divide-gray-200 dark:divide-neutral-700">
                        <thead>
                            <tr>
                                <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">ID</th>
                                <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Employee Name</th>
                                <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Employee ID</th>
                                <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Punch Date</th>
                                <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">In Time</th>
                                <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Out Time</th>
                                <th scope="col" className="px-6 py-3 text-end text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {punchings.map((punch, id) => (
                                <tr key={id} >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{id + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{punch.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{punch.employeeNo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{punch.punchDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{punch.inTime}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{punch.outTime}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-400 hover:text-red-600 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <AddPunchingModal
                modal={modal} setModal={setModal}
                name={name} setName={setName}
                inTime={inTime} setInTime={setInTime}
                outTime={outTime} setOutTime={setOutTime}
                eid={eid} setEid={setEid}
                punchDate={punchDate} setPunchDate={setPunchDate}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default AddAttendance