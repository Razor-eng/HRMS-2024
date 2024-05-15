import { useState } from "react"
import DataField from "../Input/DataField"
import DataInput from "../Input/DataInput"
import DataSelect from "../Input/DataSelect"
import Button from "../Button/Button"

const AddEmployee = () => {
    const [eno, setEno] = useState('');
    const [cno, setCno] = useState('');
    const [name, setName] = useState('');
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [cname, setCname] = useState('');
    const [preAddress, setPreAddress] = useState('');
    const [perAddress, setPerAddress] = useState('');
    const [city, setCity] = useState('');
    const [age, setAge] = useState('');
    const [pincode, setPincode] = useState('');

    const cities = [
        'Hyderabad', 'Bangalore', 'Pune'
    ]

    const handleSubmit = () => {
        let employee = JSON.parse(localStorage.getItem('employees')) || [];
        let employeeData = {
            employeeNo: eno,
            cardNo: cno,
            name: name,
            fatherName: fname,
            email: email,
            companyName: cname,
            presentAddress: preAddress,
            permanentAddress: perAddress,
            age: age,
            city: city,
            pincode: pincode
        }
        employee.push(employeeData);
        localStorage.setItem('employees', JSON.stringify(employee))
    }

    return (
        <div className="pt-24 px-48">
            <h2 className="text-3xl font-semibold">Create Employee</h2>
            <div className="flex flex-col gap-2 mt-8">
                <div className="grid grid-cols-2 gap-12">
                    <DataInput placeholder={'Employee Number'} label={'Employee No.'} type={'text'} value={eno} setValue={setEno} />
                    <DataInput placeholder={'Card Number (8 digits)'} label={'Card No'} type={'text'} value={cno} setValue={setCno} />
                </div>
                <div className="grid grid-cols-2 gap-12">
                    <DataInput placeholder={'Employee Name'} label={'Employee Name'} type={'text'} value={name} setValue={setName} />
                    <DataInput placeholder={"Employee Father Name"} label={'Father Name'} type={'text'} value={fname} setValue={setFname} />
                </div>
                <div className="grid grid-cols-2 gap-12">
                    <DataInput placeholder={"Employee Email Address"} label={'Email'} type={'email'} value={email} setValue={setEmail} />
                    <DataInput placeholder={"Employee Company Name"} label={'Company Name'} type={'text'} value={cname} setValue={setCname} />
                </div>
                <div className="grid grid-cols-2 gap-12">
                    <DataField placeholder={'Employee Present Address'} label={'Present Address'} type={'text'} value={preAddress} setValue={setPreAddress} />
                    <DataField placeholder={'Employee Permanent Address'} label={'Permanent Address'} type={'text'} value={perAddress} setValue={setPerAddress} />
                </div>
                <div className="grid grid-cols-2 gap-12">
                    <DataSelect placeholder={'Select City'} label={'City'} options={cities} value={city} setValue={setCity} />
                    <DataInput placeholder={"Enter Pincode"} label={'Pincode'} type={'text'} value={pincode} setValue={setPincode} />
                </div>
                <div className="grid grid-cols-2 gap-12">
                    <DataInput placeholder={"Enter Age"} label={'Age'} type={'text'} value={age} setValue={setAge} />
                </div>
                <Button name={'Submit'} bgColor={'#2563EB'} className={'w-28 mt-2'} onClick={handleSubmit} />
            </div>
        </div>
    )
}

export default AddEmployee