/* eslint-disable react/prop-types */
import DataInput from "../Input/DataInput"

const AddPunchingModal = ({
    modal, setModal,
    name, setName,
    eid, setEid,
    punchDate, setPunchDate,
    inTime, setInTime,
    outTime, setOutTime,
    handleSubmit
}) => {
    return (
        <div className={`fixed top-0 left-0 bg-zinc-800 ${modal ? 'bg-opacity-70 w-screen h-screen' : 'bg-opacity-0 hidden'}`}>
            <div className={`duration-500 mt-0 ${modal ? 'opacity-100' : 'opacity-0'} ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center`}>
                <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                            Punching Details
                        </h3>
                        <button type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" data-hs-overlay="#hs-vertically-centered-modal"
                            onClick={() => setModal(false)}
                        >
                            <span className="sr-only">Close</span>
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="p-4 overflow-y-auto">
                        <div className="grid grid-cols-1 gap-2">
                            <DataInput label={'Employee Name'} placeholder={'Enter Employee Name'} type={'text'} value={name} setValue={setName} />
                            <DataInput label={'Employee ID'} placeholder={'Enter Employee ID'} type={'text'} value={eid} setValue={setEid} />
                            <DataInput label={'Punch Date'} placeholder={'Enter Punching Date'} type={'text'} value={punchDate} setValue={setPunchDate} />
                            <DataInput label={'In time'} placeholder={'Enter In Time'} type={'text'} value={inTime} setValue={setInTime} />
                            <DataInput label={'Out Time'} placeholder={'Enter Out Time'} type={'text'} value={outTime} setValue={setOutTime} />
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-overlay="#hs-vertically-centered-modal"
                            onClick={() => setModal(false)}
                        >
                            Close
                        </button>
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={handleSubmit}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPunchingModal