import React, { useState } from 'react'
import style from "./contact.module.css"


  const Contact = () => {
  const [task,settask] = useState ([])
  const [name,setname] = useState("tiger")
  const [email,setemail] = useState("")
  const [number,setnumber] = useState("")
  const [college,setcollege] = useState("")
  const [msg,setmsg] = useState("")




  function ad(){

    if(number>10){
      setmsg("no. is not val")
    }
    else{
      ("no. is valid")
    }
    const as = [...task,{name,email,number,college,msg}]
    settask(as)
    console.log(name)
    confirm(as)
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
                                 <button onClick={ad} type='submit'>Submit</button>
                      
                  </div>
                
                  

         </form>
         


        
      </div>
    </div>
    </div>

    
    
    
    
    
    
    </>
    






    
  )
}

export default Contact