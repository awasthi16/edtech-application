import React, { useState } from 'react'
import style from "./LogBatch.module.css"

const LogBatch = () => {
    const [todo, settodo] = useState([])
    const [cousre, setcourse] = useState("")
    const [faculty, setfaculty] = useState("")
    const [date, setdate] = useState("")
    const [time, settime] = useState("")
    const [link, setlink] = useState("")


    function add11() {
        const aa11 = [...todo, { cousre, faculty, date, time,link }]
        settodo(aa11)
    }
    return (
        <>

            <div className={style.fromdiv}>

                <form>
                    <input className={style.co} type="text" placeholder='Enter your courses Name' onChange={(e) => setcourse(e.target.value)} />
                    <input className={style.co} type="text" placeholder='Enter Your faculty Name' onChange={(e) => setfaculty(e.target.value)} />
                    <input className={style.da} type="date" placeholder='select date' onChange={(e) => setdate(e.target.value)} />
                    <input className={style.da} type="time" placeholder='Your time is:' onChange={(e) => settime(e.target.value)} />
                    <input className={style.da} type="text" placeholder='Meeting link' onChange={(e) => setlink(e.target.value)} />
                    <button className={style.da1} onClick={ add11 }>Click here</button>


                      <table border={0}>
                    {
                        todo.map((item) => <tr><th>{item.cousre}</th><th>{item.faculty}</th><th>{item.date}</th><th>{item.link}</th><th>{item.time}</th></tr>)
                    }</table>

                </form>
              
                
            </div>



        </>
    )
}

export default LogBatch