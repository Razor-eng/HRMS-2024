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

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const NavItems = [
        { icon: MdOutlineSpaceDashboard, title: 'Dashboard' },
        {
            icon: IoPeople, title: 'Employees', subNav: [
                { title: 'Employee Create', icon: BsPersonPlusFill },
                { title: 'Employee List', icon: FaRegListAlt },
                { title: 'Awards List', icon: RiAwardFill },
                { title: 'Notice List', icon: BiClipboard },
                { title: 'Employee Imports', icon: BiImport },
            ]
        },
        {
            icon: FaRegCalendarCheck, title: 'Attendance', subNav: [
                { title: 'Add Attendance', icon: BsPersonCheck },
                { title: 'Leave Application', icon: BsPersonX },
                { title: 'Absent Details', icon: BsFileX },
                { title: 'Attendance Verification', icon: GoVerified },
                { title: 'Attendance Imports', icon: BiImport },
            ]
        },
        {
            icon: MdAttachMoney, title: 'Payroll', subNav: [
                { title: 'Pay Slip', icon: BiMoneyWithdraw },
                { title: 'Salary Setup', icon: FaCashRegister },
                { title: 'Salary Process', icon: FaRegListAlt },
                { title: 'Employee Loan', icon: GiTakeMyMoney },
                { title: 'Employee Conveyance', icon: TbPackages },
                { title: 'Tax File Upload', icon: BiImport },
            ]
        },
        {
            icon: TbReportAnalytics, title: 'Reports', subNav: [
                { title: 'Attendance Report', icon: BsPersonSquare },
                { title: 'Payslip Bulk Download', icon: FaMailBulk },
                { title: 'Monthly salary', icon: BsCash },
                { title: 'Yearly Salary', icon: BiCalendar },
                { title: 'Salary Deductions', icon: MdMoneyOffCsred },
            ]
        },
        {
            icon: MdWorkOutline, title: 'Job', subNav: [
                { title: 'Candidate Create', icon: BsPersonPlusFill },
                { title: 'Candidate List', icon: BsPersonLinesFill },
                { title: 'Job Openings List', icon: BsOpencollective },
                { title: 'Job Application List', icon: RiAppsFill },
                { title: 'Trainings List', icon: MdModelTraining },
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
                    <img src="/logo.png" alt="" className="w-44" />
                </div>
            </div>
            <NavModal NavItems={NavItems} setOpen={setOpen} open={open} />
        </div>
    )
}

export default Navbar