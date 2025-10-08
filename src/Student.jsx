import React, { useState } from 'react'
import "./Student.css"
import Fees from './Fees'
import Course from './Course'
import Reminder from './Reminder'
import JohriStudent from './JohriStudent'

const Student = () => {
  const [name, setname] = useState("n")


  return (
    <>
      <div className="studentsbox1">
        <div className="studentsbox1div1">
          <p id="studentslargesize">Student Management</p>
          <p id="studentssmallsize">Manage students, fees, courses, and reminders</p>

        </div>
        <div className="studentsbox1div2">
          <button><span id="large">+</span><span id="small">Add Student</span></button>
        </div>

      </div>
      <div className="studentsbox2">
        <ul>
          <li onClick={() => { setname("n") }}  style={{background:name=="n"?"white":"none"}}>Student</li>
          <li onClick={() => { setname("f") }}  style={{background:name=="f"?"white":"none"}}>Fees</li>
          <li onClick={() => { setname("c") }} style={{background:name=="c"?"white":"none"}}>Courses</li>
          <li onClick={() => { setname("f1") }} style={{background:name=="f1"?"white":"none"}}>Remainders</li>
        </ul>
          </div>
        <div className="studentsbox3">
        {name == "n" && <div className="Innerstud"><JohriStudent/></div>}
        {name == "f" && <div className="fees"><Fees/></div>}
        {name == "c" && <div className="courses"><Course/></div>}
        {name == "f1"&&<div className="remainder"><Reminder/></div>}
 </div>
    
    </>
  )
}

export default Student