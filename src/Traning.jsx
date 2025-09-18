import React, { useState } from 'react'
import "./Traning.css"
import PlaceMent from './PlaceMent'
import Job from './Job'

const Traning = () => {
  const [online, setonline] = useState(true)
  const [classroom, setclassroom] = useState(false)
  const [kphb, setkphb] = useState(false)
  const [workshop, setworkshop] = useState(false)
  const [intership, setintership] = useState(false)
  const [weakend, setweakend] = useState(false)
  const [jntuh, setjntuh] = useState(false)


  return (
    <>
      <div className="maintraning">

        <div className="batch">
          <h1>New Batch Timetable</h1>
          <p>Explore new and treding free Online Courses.</p>
        </div>

        <div className="Navbar">
          <ul>
            <li onClick={() => { setonline(true), setclassroom(false), setkphb(false), setworkshop(false), setintership(false), setweakend(false), setjntuh(false) }}>Online Traning</li>
            <li onClick={() => { setonline(false), setclassroom(true), setkphb(false), setworkshop(false), setintership(false), setweakend(false), setjntuh(false) }}> Classroom Traning</li>
            <li onClick={() => { setonline(false), setclassroom(false), setkphb(true), setworkshop(false), setintership(false), setweakend(false), setjntuh(false) }}>KPHB</li>
            <li onClick={() => { setonline(false), setclassroom(false), setkphb(false), setworkshop(true), setintership(false), setweakend(false), setjntuh(false) }}>Workshops</li>
            <li onClick={() => { setonline(false), setclassroom(false), setkphb(false), setworkshop(false), setintership(true), setweakend(false), setjntuh(false) }}>Internships</li>
            <li onClick={() => { setonline(false), setclassroom(false), setkphb(false), setworkshop(false), setintership(false), setweakend(true), setjntuh(false) }}>Weekend Traning</li>
            <li onClick={() => { setonline(false), setclassroom(false), setkphb(false), setworkshop(false), setintership(false), setweakend(false), setjntuh(true) }}>JNTU-H</li>
          </ul>


        </div>

        <div className="midnav">
          <p>Show entries:-</p>
          <select name="" id="">
            <option value="">30</option>
            <option value="">40</option>
            <option value="">50</option>
          </select>
          <div className="searchdiv">
            <input type="text" placeholder='Search.......' /></div>
        </div>
        <br />
        <div className="mainOnline">
          <div className="listdiv">
            <ul>
              <li>S.No</li>
              <li>Course Name</li>
              <li>Faculty</li>
              <li className='date'>Date</li>
              <li className='time'>Time</li>
              <li className='lim'>Meeting Link</li>
            </ul>
          </div>   </div>


        {/* .................................................swap work...................................................................... */}
        {online && <div className='online'>
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>}
        <div className="ll1">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll1">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll1">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll1">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll1">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll1">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll1">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll1">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll1">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>
        <div className="ll1">
          <li>0</li>
          <li>C#.NET</li>
          <li>Mr.Vishwas</li>
          <li>08 sep 2025</li>
          <li>9:00(IST)</li>
          <button className='bbb'>Click here</button>
        </div>

        {classroom && <div className='classroom'></div>}
        {kphb && <div className='kphb'></div>}
        {workshop && <div className='workshop'></div>}
        {intership && <div className='intership'></div>}
        {weakend && <div className='weakend'></div>}
        {jntuh && <div className='jntuh'></div>}


      </div>


      <PlaceMent />
      <Job />
    </>

  )
}

export default Traning