/* eslint-disable react/prop-types */
const DataSelect = ({ label, placeholder, options, setValue }) => {
    return (
        <div className="flex w-full flex-col gap-1 ">
            <label className="text-lg font-semibold text-zinc-700">
                {label}
            </label>
            <select
                className={`border text-zinc-500 w-full rounded-md border-zinc-300 p-2 outline-blue-500 cursor-pointer  `}
                onChange={e => setValue(e.target.value)}
            >
                <option className="bg-gray-200">{placeholder}</option>
                {options.map((option, id) => (
                    <option value={option} key={id}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default DataSelect