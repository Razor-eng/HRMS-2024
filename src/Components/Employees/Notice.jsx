import { useState } from "react";
import DataInput from "../Input/DataInput";
import Button from "../Button/Button";
import DataField from "../Input/DataField";

const EmployeeNotice = () => {
    const [notices, setNotices] = useState(JSON.parse(localStorage.getItem('notices')) || []);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [noticeDate, setNoticeDate] = useState('');

    const handleSubmit = () => {
        let notices = JSON.parse(localStorage.getItem('notices')) || [];
        let noticeData = {
            title: title,
            description: description,
            status: status,
            noticeDate: noticeDate,
        }
        notices.push(noticeData);
        setNotices(notices);
        localStorage.setItem('notices', JSON.stringify(noticeData));
    }

    return (
        <div className="pt-24 px-48">
            <h2 className="text-3xl font-semibold">Notice List</h2>
            <div className="mt-4 border px-4 py-3 shadow-md">
                <h2 className="text-xl font-semibold text-zinc-700 text-center underline">Add Notice</h2>
                <div className="mt-4 flex flex-col gap-3">
                    <div className="grid grid-cols-3 gap-8">
                        <DataInput label={'Notice Title'} placeholder={'Enter Title'} type={'text'} value={title} setValue={setTitle} />
                        <DataInput label={'Notice Status'} placeholder={'Enter Notice Status'} type={'text'} value={status} setValue={setStatus} />
                        <DataInput label={'Notice Date'} placeholder={'Enter Notice Date'} type={'text'} value={noticeDate} setValue={setNoticeDate} />
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <DataField label={'Notice Description'} placeholder={'Enter Notice Description'} type={'text'} value={description} setValue={setDescription} />
                        <div className="flex justify-start items-end">
                            <Button name={'Add Notice'} bgColor={'#f97583'} className={'w-36 h-12'} onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 border px-4 py-3 shadow-md h-[330px] overflow-y-auto">
                <h2 className="text-xl font-semibold text-zinc-700 text-center underline">Notice Table</h2>
                <table className="min-w-full mt-4 divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead>
                        <tr>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">ID</th>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Title</th>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Status</th>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Created On</th>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Description</th>
                            <th scope="col" className="px-6 py-3 text-end text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notices.map((notice, id) => (
                            <tr key={id} >
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{id + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{notice.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{notice.status}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{notice.noticeDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{notice.description}</td>
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

export default EmployeeNotice