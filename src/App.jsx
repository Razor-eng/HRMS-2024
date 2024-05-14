import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar/Navbar"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Add from "./Components/Employees/Add"
import Dashboard from "./Pages/Dashboard"

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
            <Route path="add" element={<Add />} />
            {/* <Route path="list" element={<EmployeeList />}></Route>
            <Route path="imports" element={<EmployeeImports />}></Route>
            <Route path="awards" element={<EmployeeAwardsList />}></Route>
            <Route path="notice" element={<EmployeeNoticeList />}></Route> */}
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
