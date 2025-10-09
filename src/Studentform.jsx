import React, { useState } from 'react'
import "./Studentform.css"

const Studentform = () => {

const[stuname,setstuname]=useState("")
  const[rollnum,setrollnum]=useState("")
  const[dob,setdob]=useState("")
  const[email,setemail]=useState("")
  const[number,setnumber]=useState("")
  const[submit,setsubmit]=useState([])

  function add()
  {
    const as=[...submit,{stuname,rollnum,dob,email,number}]
    setsubmit(as)
  }
  return (
    <>
    

     <div className="studentformdiv1">
        <div className="studentformbox">

        <input type="text"  placeholder='Enter Student name'   onChange={(e)=>setstuname(e.target.value)}/>
        <input type="text"  placeholder='Enter Your Roll Number'     onChange={(e)=>setrollnum(e.target.value)}/>
         <input type="date" name="" id="" placeholder='Enter Your DOB'    onChange={(e)=>setdob(e.target.value)}/>
         <input type="email" name="" id=""  placeholder='Enter your Email'    onChange={(e)=>setemail(e.target.value)}/>
        <input type="password" name="" id=""  placeholder='Enter your Mobile Number'    onChange={(e)=>setnumber(e.target.value)} />


       <button  onClick={add}>Submit</button>
        </div>

        {/* <div className="studentformbox1">
          <table  border={1}>
          <tr><th>S.No</th><th>Student Name</th> <th>Roll Number</th> <th>DOB</th> <th>Email</th> <th> Mobile Number</th></tr>
          {
              submit.map((item,index)=><><tr style={{background:index%2==0?"#c4af69ff":"white"}}><td>{index+1}</td><td>{item.stuname}</td> <td>{item.rollnum}</td><td>{item.dob}</td> <td>{item.email}</td> <td>{item.number}</td></tr></>)
          }
          </table>
        </div> */}

    </div>
    </>
  )
}

export default Studentform