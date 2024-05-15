const EmployeeList = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    return (
        <div className="pt-24 px-48">
            <h2 className="text-3xl font-semibold">Employee List</h2>
            <div className="mt-6 border rounded-md shadow-md h-[570px] overflow-y-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead>
                        <tr>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">ID</th>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Name</th>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Email</th>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Address</th>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">City</th>
                            <th scope="col" className="px-6 py-3 text-start text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Company</th>
                            <th scope="col" className="px-6 py-3 text-end text-sm font-semibold text-gray-500 uppercase dark:text-neutral-500">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, id) => (
                            <tr key={id} >
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{id + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{employee.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{employee.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{employee.permanentAddress}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{employee.city}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{employee.companyName}</td>
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

export default EmployeeList