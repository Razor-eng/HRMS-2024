import { useState } from "react";
import DataInput from "../Input/DataInput";
import Button from "../Button/Button";

const EmployeeAwards = () => {
    const [awards, setAwards] = useState(JSON.parse(localStorage.getItem('awards')) || []);
    const [name, setName] = useState('');
    const [eid, setEid] = useState('');
    const [awardName, setAwardName] = useState('');
    const [awardDate, setAwardDate] = useState('');
    const [giftName, setGiftName] = useState('');

    const handleSubmit = () => {
        let awards = JSON.parse(localStorage.getItem('awards')) || [];
        let awardsData = {
            name: name,
            employeeId: eid,
            awardName: awardName,
            awardDate: awardDate,
            giftName: giftName,
        }
        awards.push(awardsData);
        setAwards(awards);
        localStorage.setItem('awards', JSON.stringify(awards));
    }

    return (
        <div className="pt-24 px-48">
            <h2 className="text-3xl font-semibold">Awards List</h2>
            <div className="mt-4 border px-4 py-3 shadow-md">
                <h2 className="text-xl font-semibold text-zinc-700 text-center underline">Add Award</h2>
                <div className="mt-4 flex flex-col gap-3">
                    <div className="grid grid-cols-3 gap-8">
                        <DataInput label={'Employee Name'} placeholder={'Enter Employee Name'} type={'text'} value={name} setValue={setName} />
                        <DataInput label={'Employee ID'} placeholder={'Enter Employee ID'} type={'text'} value={eid} setValue={setEid} />
                        <DataInput label={'Award Name'} placeholder={'Enter Award Name'} type={'text'} value={awardName} setValue={setAwardName} />
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <DataInput label={'Gift Name'} placeholder={'Enter Gift Name'} type={'text'} value={giftName} setValue={setGiftName} />
                        <DataInput label={'Award Date'} placeholder={'Enter Award Date'} type={'text'} value={awardDate} setValue={setAwardDate} />
                        <div className="flex justify-start items-end">
                            <Button name={'Add'} bgColor={'#f97583'} className={'w-36 h-12'} onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 border px-4 py-3 shadow-md h-[360px] overflow-y-auto">
                <h2 className="text-xl font-semibold text-zinc-700 text-center underline">Awards Table</h2>
                <table className="min-w-full mt-4 divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead>
                        <tr>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">ID</th>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Employee Name</th>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Employee ID</th>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Award Name</th>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Gift Name</th>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Award Date</th>
                            <th scope="col" className="px-6 py-3 text-end text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {awards.map((award, id) => (
                            <tr key={id} >
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{id + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{award.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{award.employeeId}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{award.awardName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{award.giftName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{award.awardDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-400 hover:text-red-600 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeAwards