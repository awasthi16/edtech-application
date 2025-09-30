import React, { useState } from 'react'
import "./Student.css"
import Fees from './fees'
import Course from './Course'
import Reminder from './Reminder'
import JohriStudent from './JohriStudent'

const Student = () => {
  const [name, setname] = useState(false)


  return (
    <>
      <div className="box1">
        <div className="box1div1">
          <p id="largesize">Student Management</p>
          <p id="smallsize">Manage students, fees, courses, and reminders</p>

        </div>
        <div className="box1div2">
          <button><span id="large">+</span><span id="small">Add Student</span></button>
        </div>

      </div>
      <div className="box2">
        <ul>
          <li onClick={() => { setname("n") }}>Student</li>
          <li onClick={() => { setname("f") }}>Fees</li>
          <li onClick={() => { setname("c") }}>Courses</li>
          <li onClick={() => { setname("f1") }}>Remainders</li>
        </ul>
          </div>
        <div className="box3">
        {name == "n" && <div className="Innerstud"><JohriStudent/></div>}
        {name == "f" && <div className="fees"><Fees/></div>}
        {name == "c" && <div className="courses"><Course/></div>}
        {name == "f1"&&<div className="remainder"><Reminder/></div>}
 </div>
    
    </>
  )
}

export default Student