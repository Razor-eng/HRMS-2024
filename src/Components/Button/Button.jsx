/* eslint-disable react/prop-types */
const Button = ({ name, bgColor, className }) => {
    return (
        <button style={{ backgroundColor: `${bgColor}` }} className={`text-white font-semibold px-6 py-3 w-full rounded-md hover:opacity-90 transition-all ease-in border duration-150 ${className}`}>
            {name}
        </button>
    )
}

export default Button