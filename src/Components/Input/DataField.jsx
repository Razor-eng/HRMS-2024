/* eslint-disable react/prop-types */
const DataField = ({ type, label, placeholder, value, setValue }) => {
    return (
        <div className="flex w-full flex-col gap-1 ">
            <label className="text-lg font-semibold text-zinc-700">
                {label}
            </label>
            <textarea
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={e => setValue(e.target.value)}
                className={`border w-full rounded-md border-zinc-300 p-2 outline-blue-500`}
            />
        </div>
    )
}

export default DataField