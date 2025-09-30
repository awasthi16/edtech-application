import React, { useState } from 'react'
import style from "./LogBatch.module.css"

const LogBatch = () => {
    
    const [cousre, setcourse] = useState("")
    const [faculty, setfaculty] = useState("")
    const [date, setdate] = useState("")
    const [time, settime] = useState("")
    const [link, setlink] = useState("")


const  add11= async()=>{
    console.warn(cousre,faculty,date,time,link)
    let result=await fetch("http://localhost:5600/batch",{
      method:"post",
      body:JSON.stringify({CourseName:cousre,Faculty:faculty,Date:date,Time:time,Meeting:link}),
      headers:{"content-type":"application/json"}
    })
    result=await result.json()
    console.log(result);
    localStorage.setItem("batch",JSON.stringify(result))
    }
    return (
        <>

            <div className={style.fromdiv}>

            
                    <input className={style.co} type="text" placeholder='Enter your courses Name' onChange={(e) => setcourse(e.target.value)} />
                    <input className={style.co} type="text" placeholder='Enter Your faculty Name' onChange={(e) => setfaculty(e.target.value)} />
                    <input className={style.da} type="date" placeholder='select date' onChange={(e) => setdate(e.target.value)} />
                    <input className={style.da} type="time" placeholder='Your time is:' onChange={(e) => settime(e.target.value)} />
                    <input className={style.da} type="text" placeholder='Meeting link' onChange={(e) => setlink(e.target.value)} />
                    <button className={style.da1} onClick={ add11 }>Click here</button>
            </div>



        </>
    )
}

export default LogBatch