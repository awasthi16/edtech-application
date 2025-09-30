import React, { useState } from 'react'
import "./Faculty.css"
import Salray from './Salray'
import Schedule from './Schedule'
import Timetacking from './Timetacking'
import JohriFaculty from './JohriFaculty'

const Faculty = () => {
  const[name,setname]=useState(false)
  return (
  <>
  
<div className="facbox1">
        <div className="facbox1div1">
          <p id="faclargesize">Faculty Management</p>
          <p id="facsmallsize">Manage faculty, salaries, schedules, and performance</p>
        </div>

        <div className="facbox1div2">
          <button><span id="large">+</span><span id="small">Add Student</span></button>
        </div>
      </div>

      <div className="facbox2">
        <ul>
          <li onClick={() => { setname("fac") }}>Faculty</li>
          <li onClick={() => { setname("sal") }}>Salary</li>
          <li onClick={() => { setname("sch") }}>Schedule</li>
          <li onClick={() => { setname("tt") }}>Time Tacking</li>
        </ul>
          </div>
        <div className="facbox3">
        {name == "fac" && <div className="Innerfaculty"><JohriFaculty/></div>}
        {name == "sal" && <div className="salary"><Salray/></div>}
        {name == "sch" && <div className="Schedule"><Schedule/></div>}
        {name == "tt"&&<div className="timetacking"><Timetacking/></div>}
 </div>



  </>
  )
}

export default Faculty