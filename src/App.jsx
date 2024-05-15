import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar/Navbar"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import AddEmployee from "./Components/Employees/Add"
import EmployeeList from "./Components/Employees/List"
import EmployeeAwards from "./Components/Employees/Awards"
import EmployeeNotice from "./Components/Employees/Notice"
import EmployeeImport from "./Components/Employees/Import"
import AttendanceImport from "./Components/Attendance/Import"
import AddAttendance from "./Components/Attendance/Add"
import AddLeave from "./Components/Attendance/Leave"
import AbsentList from "./Components/Attendance/Absents"

function App() {
  return (
    <div className="z-10">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" >
            <Route path="add" element={<AddEmployee />} />
            <Route path="list" element={<EmployeeList />} />
            <Route path="awards" element={<EmployeeAwards />} />
            <Route path="notice" element={<EmployeeNotice />} />
            <Route path="import" element={<EmployeeImport />}></Route>
          </Route>
          <Route path="/attendance">
            <Route path="add" element={<AddAttendance />} />
            <Route path="leave" element={<AddLeave />} />
            <Route path="absents" element={<AbsentList />} />
            {/* <Route path="attendanceverification" element={<AttendanceVerification />}></Route> */}
            <Route path="import" element={<AttendanceImport />} />
          </Route>
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/project/:projectName" element={<ProjectDetails />} />
          <Route path="/skill/:skillName" element={<SkillDetails />} /> */}
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App
