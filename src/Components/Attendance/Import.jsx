import Button from "../Button/Button"
import FileInput from "../Input/FileInput"

const AttendanceImport = () => {
    return (
        <div className="pt-24 px-48">
            <h2 className="text-3xl font-semibold">Attendance Import</h2>
            <div className="border flex flex-col gap-8 shadow-md w-[700px] p-8 mt-8">
                <h3 className="text-xl font-semibold text-zinc-700">Import Attendance File</h3>
                <FileInput />
                <div className="w-40">
                    <Button name={'Upload'} bgColor={'#0D6EFD'} />
                </div>
            </div>
        </div>
    )
}

export default AttendanceImport