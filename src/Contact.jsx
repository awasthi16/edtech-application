import React, { useState } from 'react'
import style from "./Contact.module.css"

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
    <div className={style.page1}>
      <div className={style.left}>
        <img src="https://nareshit.com/images/contact-image-01.png" alt="" width="470px" height="470px" />

      </div>
      <div className={style.rightdiv}>

      <div className={style.contact}>
       
        <form>
                  <h1>Contact Us</h1>

                  <div className={style.inputb}>
                    <input type="text"placeholder='Full Name' required onChange={(e)=>setname(e.target.value)} />
                    <input type="email" placeholder='Email address' onChange={(e)=>setemail(e.target.value)} />
                  </div>
                  <div className={style.inputbox1}>
                    <input type="tel" placeholder='Mobile Number' onChange={(e)=>setnumber(e.target.value)} />
                  </div>

                   <div className={style.inputbox1}>
                    <input type="text" placeholder='Company Name / College Name' onChange={(e)=>setcollege(e.target.value)} />
                  </div>
                 

                   
                   <div className={style.message}>
                    <input type="text" placeholder="Describe message here" onChange={(e)=>setmsg(e.target.value)} />
                    
                  </div>
                  
                  <div className={style.subbmit}>
                                 <button onClick={collectData} type='submit'>Submit</button>
                      
                  </div>
                
                  

         </form>
         


        
      </div>
    </div>
    </div>

    
    
    
    
    
    
    </>
    






    
  )
}

export default Contact