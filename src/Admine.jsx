import React, { useState } from 'react'
import "./Admine.css"

const Admine = ({add}) => {
   
    const [cousre, setcourse] = useState("")
    const [faculty, setfaculty] = useState("")
    const [date, setdate] = useState("")
    const [time, settime] = useState("")
    // const [todo, settodo] = useState([])

// function add(){
//     const aa=[...todo,{cousre,faculty,date,time}]
//     settodo(aa)
// }

    return (
        <>

     <from className="alltodoitem">
        
          <input className='coursess' type="text" placeholder='Enter your courses Name' onChange={(e)=>setcourse(e.target.value)}/>
          <input className='coursess'  type="text" placeholder='Enter Your faculty Name' onChange={(e)=>setfaculty(e.target.value)}/>
          <input className='dates' type="date" placeholder='select date' onChange={(e)=>setdate(e.target.value)}/>
          <input className='dates'  type="time" placeholder='Your time is:' onChange={(e)=>settime(e.target.value)}/>
          <button className='btnes' onClick={()=>{}}>Click here</button>

          {/* <table border={1}>
             {
                todo.map((item,ind)=><>
                <tr> <th>{ind+1}</th>  <th>{item.cousre}</th> <th>{item.faculty}</th> <th>{item.date}</th> <th>{item.time}</th></tr>
                </>)
             }
          </table> */}

     </from>

        </>
    )
}

export default Admine