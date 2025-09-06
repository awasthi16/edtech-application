import React, { useState } from 'react'
import "./Login.css"
const Login = () => {
  const [FullName,setFullName] =useState("")
  const [MobileNumber,setMobileNumber] =useState("")
  const [Emailaddress,setEmailaddress]=useState("")
  const [todo,settodo] =useState([])
  const[msg,setmsg]=useState("")
  const[check,setcheck]=useState("")
  const[op,setop]=useState(true)
   const[op1,setop1]=useState(false)



  function Add(){
    const q="@"
    if(check.length==0){
      setmsg("Please accept terms and condition")
    }
    else if(FullName.length==0){
      setmsg("You have not filled your name")
    }
    else if(MobileNumber.length==0){
      setmsg("You have not filled your no.")
    }
    else if(Emailaddress.length==0){
      setmsg("You have not filled your email")
    }
    else if(Emailaddress==q){
      setmsg("email is not applicable")
    }
    
    else{
      const as = [...todo,{FullName,MobileNumber,Emailaddress,check}]
    settodo(as)
    setmsg("Submitted")
    }
  }

  
  return (
    
    <div>
      
      <div className="logsign">
        <div className="login">
            <div className="sl">
                <ul>
                <li  onClick={()=>{setop(true), setop1(false)}}>Signup</li>
                <li  onClick={()=>{setop(false), setop1(true)}}  >Login</li>
                </ul>
            </div>

            {/* ------------------- */}
            {op&&<div className="sp">
              <h2>Signup</h2>
<<<<<<< HEAD
            <h2>  Naresh IT account</h2>
            <div className="input">
=======
            <h2>  Zint account</h2>
            <div className="input-div">
>>>>>>> b17d44d63c8d43f337acd9b57d2a160ad69d13c9
                <input type="text" placeholder='Full Name' onChange={(e)=>setFullName(e.target.value)} />
                
                <input type="number" placeholder='Mobile Number' onChange={(e)=>setMobileNumber(e.target.value)} />
                <input type="email" placeholder='Email address' onChange={(e)=>setEmailaddress(e.target.value)}/>
            </div>
            <div className="checkbox">
            <input type="checkbox" placeholder='' onChange={(e)=> setcheck(e.target.value)}/>I accept Zint Institute Terms of Use and Privacy Notice.
            
            </div>
            <div className="para">
                            <p>{msg}</p>

            </div>

            <div className="button">
                                    <button onClick={Add}>  Submit</button>
                                    </div>
            </div>
}
{/* -----------login ----------------- */}
{
  op1&&<div className="lp">
              <h2>Login</h2>
<<<<<<< HEAD
            <h2>  Naresh IT account</h2>
            <div className="input">
=======
            <h2>  Zint account</h2>
>>>>>>> b17d44d63c8d43f337acd9b57d2a160ad69d13c9

              
                <input type="mobile number" placeholder='Mobile Number' onChange={(e)=>setMobileNumber(e.target.value)} />
                
            </div>
            
            <div className="para">
                            <p>{msg}</p>

            </div>

            <div className="button">
                                    <button onClick={Add}>  Submit</button>
                                    </div>
            </div>
}


{/* -------------- */}




        </div>
        </div>

      





    </div>
  )
}

export default Login