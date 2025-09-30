import React, { useState } from 'react'
import "./contact.css"


const Contact = () => {
  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [number,setnumber] = useState("")
  const [college,setcollege] = useState("")
  const [msg,setmsg] = useState("")

  const collectData = async()=>{
    console.warn(name,email,number,college,msg)
    let result=await fetch("http://localhost:5600/contact",{
      method:"post",
      body:JSON.stringify({FullName:name,Email:email,Mobile:number,Company:college,Message:msg}),
      headers:{"content-type":"application/json"}
    })
    result=await result.json()
    console.log(result);
    localStorage.setItem("contact",JSON.stringify(result))
    
  }
  return (
    <>
    <div className="page1">
      <div className="left">
        <img src="https://nareshit.com/images/contact-image-01.png" alt="" width="470px" height="470px" />

      </div>
      <div className="right-divv">

      <div className="contact">
       
   
                  <h1>Contact Us</h1>

                  <div className="input-box">
                    <input type="text"placeholder='Full Name' required onChange={(e)=>setname(e.target.value)} />
                    <input type="email" placeholder='Email address' onChange={(e)=>setemail(e.target.value)} />
                  </div>
                  <div className="input-box1">
                    <input type="tel" placeholder='Mobile Number' onChange={(e)=>setnumber(e.target.value)} />
                  </div>

                   <div className="input-box1">
                    <input type="text" placeholder='Company Name / College Name' onChange={(e)=>setcollege(e.target.value)} />
                  </div>
                 

                   
                   <div className="message">
                    <input type="text" placeholder="Describe message here" onChange={(e)=>setmsg(e.target.value)} />
                    
                  </div>
                  
                  <div className="subbmit">
                                 <button onClick={collectData} type='submit'>Submit</button>
                      
                  </div>
                
      </div>
    </div>
    </div>

    
    </>
    






    
  )

  }
export default Contact