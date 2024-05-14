/* eslint-disable react/prop-types */
import { TbPackages, TbReportAnalytics } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdAttachMoney, MdModelTraining, MdMoneyOffCsred, MdOutlineSpaceDashboard, MdWorkOutline } from "react-icons/md";
import { BiCalendar, BiClipboard, BiImport, BiMoneyWithdraw, } from "react-icons/bi";
import { BsCash, BsFileX, BsOpencollective, BsPersonCheck, BsPersonLinesFill, BsPersonPlusFill, BsPersonSquare, BsPersonX } from "react-icons/bs";
import { FaCashRegister, FaMailBulk, FaRegCalendarCheck, FaRegListAlt } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import NavModal from "./NavModal";
import { useState } from "react";
import { GoVerified } from "react-icons/go";
import { RiAppsFill, RiAwardFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const NavItems = [
        { icon: MdOutlineSpaceDashboard, title: 'Dashboard', path: '/dashboard' },
        {
            icon: IoPeople, title: 'Employees', subNav: [
                { title: 'Employee Create', path: '/employees/add', icon: BsPersonPlusFill },
                { title: 'Employee List', path: '/employees/list', icon: FaRegListAlt },
                { title: 'Awards List', path: '/employees/awards', icon: RiAwardFill },
                { title: 'Notice List', path: '/employees/notice', icon: BiClipboard },
                { title: 'Employee Imports', path: '/employees/import', icon: BiImport },
            ]
        },
        {
            icon: FaRegCalendarCheck, title: 'Attendance', subNav: [
                { title: 'Add Attendance', path: '/attendance/add', icon: BsPersonCheck },
                { title: 'Leave Application', path: '/attendance/leave', icon: BsPersonX },
                { title: 'Absent Details', path: '/attendance/absents', icon: BsFileX },
                { title: 'Attendance Verification', path: '/attendance/verification', icon: GoVerified },
                { title: 'Attendance Imports', path: '/attendance/import', icon: BiImport },
            ]
        },
        {
            icon: MdAttachMoney, title: 'Payroll', subNav: [
                { title: 'Pay Slip', path: '/payroll/payslip', icon: BiMoneyWithdraw },
                { title: 'Salary Setup', path: '/payroll/setup', icon: FaCashRegister },
                { title: 'Salary Process', path: '/payroll/process', icon: FaRegListAlt },
                { title: 'Employee Loan', path: '/payroll/loan', icon: GiTakeMyMoney },
                { title: 'Employee Conveyance', path: '/payroll/conveyance', icon: TbPackages },
                { title: 'Tax File Upload', path: '/payroll/import', icon: BiImport },
            ]
        },
        {
            icon: TbReportAnalytics, title: 'Reports', subNav: [
                { title: 'Attendance Report', path: '/reports/attendance', icon: BsPersonSquare },
                { title: 'Payslip Bulk Download', path: '/reports/payslip', icon: FaMailBulk },
                { title: 'Monthly salary', path: '/reports/monthly', icon: BsCash },
                { title: 'Yearly Salary', path: '/reports/yearly', icon: BiCalendar },
                { title: 'Salary Deductions', path: '/reports/deductions', icon: MdMoneyOffCsred },
            ]
        },
        {
            icon: MdWorkOutline, title: 'Job', subNav: [
                { title: 'Candidate Create', path: '/jobs/add', icon: BsPersonPlusFill },
                { title: 'Candidate List', path: '/jobs/list', icon: BsPersonLinesFill },
                { title: 'Job Openings List', path: '/jobs/openings', icon: BsOpencollective },
                { title: 'Job Application List', path: '/jobs/applications', icon: RiAppsFill },
                { title: 'Trainings List', path: '/jobs/trainings', icon: MdModelTraining },
            ]
        },
    ]

    return (
        <div className="border-b fixed w-full top-0">
            <div className="bg-white h-16 md:py-10 flex justify-between items-center px-10">
                <div className="flex items-center gap-6">
                    <div
                        className="border p-1 rounded-md cursor-pointer hover:bg-zinc-100"
                        onClick={() => setOpen(true)}
                    >
                        <RxHamburgerMenu fontSize={26} />
                    </div>
                    <Link to={'/'}>
                        <img src="/logo.png" alt="" className="w-44" />
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link to={'/register'}>
                        <Button name={'SignUp'} bgColor={'#01AC61'} />
                    </Link>
                    <Link to={'/login'}>
                        <Button name={'Login'} bgColor={'#2987C6'} />
                    </Link>
                    <img className="inline-block size-[45px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"></img>
                </div>
            </div>
            <NavModal NavItems={NavItems} setOpen={setOpen} open={open} />
        </div>
    )
}

export default Navbar