const AbsentList = () => {
    const leaves = JSON.parse(localStorage.getItem('leaves')) || [];

    const getDate = (from, to) => {
        let date1 = from.split('/');
        date1 = date1[1] + '/' + date1[0] + '/' + date1[2];
        let date2 = to.split('/');
        date2 = date2[1] + '/' + date2[0] + '/' + date2[2];
        let differenceTime = (new Date(date2).getTime() - new Date(date1).getTime()) / (1000 * 3600 * 24);
        let days = Math.round(differenceTime);

        return days;
    }

    const checkDate = (to) => {
        let date1 = new Date().toLocaleDateString();
        let date2 = to.split('/');
        date2 = date2[1] + '/' + date2[0] + '/' + date2[2];

        let differenceTime = (new Date(date2).getTime() - new Date(date1).getTime()) / (1000 * 3600 * 24);
        let days = Math.round(differenceTime);

        return days >= 0;
    }

    return (
        <div className="pt-24 px-48">
            <h2 className="text-3xl font-semibold">Absent List</h2>
            <div className="mt-6 border rounded-md shadow-md h-[600px] overflow-y-auto">
                <table className="min-w-full mt-4 divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead>
                        <tr>
                            <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">ID</th>
                            <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Employee Name</th>
                            <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Employee ID</th>
                            <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">From Date</th>
                            <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">To Date</th>
                            <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Total Days</th>
                            <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Leave Type</th>
                            <th scope="col" className="px-3 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Status</th>
                            <th scope="col" className="px-3 py-3 text-end text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaves.filter(leave => {
                            return checkDate(leave.to)
                        }).map((leave, id) => (
                            <tr key={id} >
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{id + 1}</td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{leave.name}</td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{leave.employeeNo}</td>
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
    )
}

export default AbsentList