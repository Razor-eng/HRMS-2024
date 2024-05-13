/* eslint-disable react/prop-types */
const Input = ({ type, label, value, setValue }) => {
    return (
        <div className="flex w-full flex-col gap-1 ">
            <label className="text-xl font-semibold">
                {label}
            </label>
            <input
                type={type}
                placeholder={`Enter ${label}`}
                value={value}
                onChange={e => setValue(e.target.value)}
                className="border w-full rounded-md border-zinc-300 outline-blue-500 p-2"
            />
        </div>
    )
}

export default Input