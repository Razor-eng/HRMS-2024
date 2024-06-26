const FileInput = () => {
    return (
        <form className="max-w-sm">
            <label className="sr-only">Choose file</label>
            <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 shadow-xl rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
    file:bg-sky-400 file:border-0
    file:text-white transition-all ease-in duration-150
    file:cursor-pointer hover:scale-105
    file:me-4 cursor-pointer
    outline-blue-500
    file:py-3 file:px-4
    dark:file:bg-neutral-700 dark:file:text-neutral-400"/>
        </form>
    )
}

export default FileInput