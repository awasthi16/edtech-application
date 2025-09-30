import React, { useState } from 'react'
import "./Login.css"
const Login = () => {
  const [FullName, setFullName] = useState("")
  const [MobileNumber, setMobileNumber] = useState("")
  const [Emailaddress, setEmailaddress] = useState("")
  

  const [msg, setmsg] = useState("")
  const [check, setcheck] = useState("")
  const [op, setop] = useState(true)
  const [op1, setop1] = useState(false)



  const collect =async()=>{
    
    console.warn(FullName,MobileNumber,Emailaddress)
    let result=await fetch("http://localhost:5600/signup",{
      method:"post",
      body:JSON.stringify({FullName:FullName,Email:Emailaddress,Mobile:MobileNumber}),
      headers:{"content-type":"application/json"}
    })
    result=await result.json()
    console.log(result);
    localStorage.setItem("user1",JSON.stringify(result))
    

    const q = "@"
    if (check.length == 0) {
      setmsg("Please accept terms and condition")
    }
    else if (FullName.length == 0) {
      setmsg("You have not filled your name")
    }
    else if (MobileNumber.length == 0) {
      setmsg("You have not filled your no.")
    }
    else if (Emailaddress.length == 0) {
      setmsg("You have not filled your email")
    }
    else if (Emailaddress == q) {
      setmsg("email is not applicable")
    }
   else {
      setmsg("Submitted")
    }
  }


  const Add =async()=>{
    
    console.warn(MobileNumber)
    let result=await fetch("http://localhost:5600/login",{
      method:"post",
      body:JSON.stringify({Mobile:MobileNumber}),
      headers:{"content-type":"application/json"}
    })
    result=await result.json()
    console.log(result);
    localStorage.setItem("user1",JSON.stringify(result))
    
  }


  return (

    <div>

      <div className="logsign">
        <div className="login">
          <div className="sl">
            <ul>
              <li onClick={() => { setop(true), setop1(false) }}>Signup</li>
              <li onClick={() => { setop(false), setop1(true) }}  >Login</li>
            </ul>
          </div>
          <hr />

          {/* ------------------- */}
          {op && <div className="sp">
            <h2>Signup</h2>
            <h2>  Zint account</h2>
            <div className="input-div">
              <input type="text" placeholder='Full Name' onChange={(e) => setFullName(e.target.value)} />

              <input type="tel" placeholder='Mobile Number' onChange={(e) => setMobileNumber(e.target.value)} />
              <input type="email" placeholder='Email address' onChange={(e) => setEmailaddress(e.target.value)} />
            </div>
            <div className="checkbox">
              <input type="checkbox" placeholder='' onChange={(e) => setcheck(e.target.value)} />I accept Zint Institute Terms of Use and Privacy Notice.

            </div>
            <div className="para">
              <p>{msg}</p>

            </div>

            <div className="btnn">
              <button onClick={collect}>  Submit</button>
            </div>
          </div>
          }
          {/* -----------login ----------------- */}
          {
            op1 && <div className="lp">
              <h2>Login</h2>
              <h2>  Zint account</h2>


              <div className="input-box">

                <div className="box1">
                  +91
                </div>
                <div className="box22">
                  <input id="ranu" type="tel" placeholder=' Mobile Number' onChange={(e) => setMobileNumber(e.target.value)} />
                </div>

              </div>


              <div className="para"><p>{msg}</p></div>

              <div className="btnn">
                <button onClick={Add}>Submit</button>
              </div>
            </div>
          }


          {/* ----------------------------- */}




        </div>
      </div>







    </div>
  )
}

export default Login