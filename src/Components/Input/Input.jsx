/* eslint-disable react/prop-types */
const Input = ({ type, label, value, setValue, check }) => {
    return (
        <div className="flex w-full flex-col gap-1 ">
            <label className="text-lg font-semibold text-zinc-700">
                {label}
            </label>
            <input
                type={type}
                placeholder={`Enter ${label}`}
                value={value}
                onChange={e => setValue(e.target.value)}
                className={`border w-full rounded-md border-zinc-300 p-2 ${value === '' ? 'outline-blue-500 border-none' : check ? 'outline-green-400 border-green-400' : 'outline-red-500 border-red-500'}`}
            />
        </div>
    )
}

export default Input