import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <div>
      
      <div className="logsign">
        <div className="login">
            <div className="sl">
                <ul>
                <a href="/Signup"><li>Signup</li></a>
                <a href="/Login"><li>Login</li></a>
                </ul>
            </div>
            <h2>Signup</h2>
            <h2>  Naresh IT account</h2>
            <div className="input">
                <input type="text" placeholder='Full Name' />
                <input type="number" placeholder='Mobile Number' />
                <input type="email" placeholder='Email address'/>
            </div>
            <div className="checkbox">
            <input type="checkbox" placeholder='' />I accept Naresh IT Terms of Use and Privacy Notice.

            </div>
            <div className="button">
            
                                    <button>  Submit</button>
                                    </div>


        </div>
        </div>

      





    </div>
  )
}

export default Login