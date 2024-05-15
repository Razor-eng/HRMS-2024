import { useState } from "react";
import Button from "../Button/Button";
import DataInput from "../Input/DataInput";
import AddLeaveModal from "../Modal/AddLeaveModal";

const AddLeave = () => {
    const [eid, setEid] = useState('');
    const [name, setName] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [dept, setDept] = useState('');
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
    const [modal, setModal] = useState(false);
    const [leaves, setLeaves] = useState(JSON.parse(localStorage.getItem('leaves')) || []);

    const getDate = (from, to) => {
        let date1 = from.split('/');
        let date2 = to.split('/');
        date1 = date1[1] + '/' + date1[0] + '/' + date1[2];
        date2 = date2[1] + '/' + date2[0] + '/' + date2[2];
        let differenceTime = (new Date(date2).getTime() - new Date(date1).getTime()) / (1000 * 3600 * 24);
        let days = Math.round(differenceTime);

        return days;
    }

    const handleSubmit = () => {
        let leaves = JSON.parse(localStorage.getItem('leaves')) || [];
        let leaveData = {
            employeeNo: eid,
            name: name,
            dept: dept,
            from: from,
            to: to,
            type: type,
            status: status
        }
        leaves.push(leaveData);
        localStorage.setItem('leaves', JSON.stringify(leaves))
        setLeaves(leaves);
    }

    return (
        <div className="pt-24 px-48">
            <h2 className="text-3xl font-semibold">Add Attendance</h2>
            <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl text-zinc-700 font-semibold">Manual Punching</h2>
                    <Button name={'Add Leave'} bgColor={'#4ea3ce'} className={'max-w-fit mt-2'} onClick={() => setModal(true)} />
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
                                <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">ID</th>
                                <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Employee Name</th>
                                <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Employee ID</th>
                                <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Department</th>
                                <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">From Date</th>
                                <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">To Date</th>
                                <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Total Days</th>
                                <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Leave Type</th>
                                <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Status</th>
                                <th scope="col" className="px-3 py-3 text-end text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaves.map((leave, id) => (
                                <tr key={id} >
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{id + 1}</td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{leave.name}</td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{leave.employeeNo}</td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{leave.dept}</td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{leave.from}</td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{leave.to}</td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 text-center">{getDate(leave.from, leave.to)}</td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{leave.type}</td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{leave.status}</td>
                                    <td className="px-3 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-400 hover:text-red-600 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <AddLeaveModal
                modal={modal} setModal={setModal}
                name={name} setName={setName}
                eid={eid} setEid={setEid}
                dept={dept} setDept={setDept}
                to={to} setTo={setTo}
                from={from} setFrom={setFrom}
                type={type} setType={setType}
                status={status} setStatus={setStatus}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default AddLeave