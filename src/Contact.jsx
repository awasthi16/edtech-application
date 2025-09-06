import React from 'react'
import "./contact.css"


const Contact = () => {
  return (
    <>
    <div className="page1">
      <div className="left">
        <img src="https://nareshit.com/images/contact-image-01.png" alt="" />

      </div>
      <div className="right-div">
      <div className="contact">
        <form>
                  <h1>Contact Us</h1>

                  <div className="input-box">
                    <input type="text"placeholder='Full Name' required />
                    <input type="email" placeholder='Email address' />
                  </div>
                  <div className="input-box1">
                    <input type="tel" placeholder='Mobile Number' />
                  </div>

                   <div className="input-box1">
                    <input type="text" placeholder='Company Name / College Name' />
                  </div>

                  <div className="message">
                    <input type="text" placeholder='Company Name / College Name' />
                    
                  </div>
                  <div className="btn">
                                      <button type='submit'>Submit</button>

                  </div>
                  







        </form>


        
      </div>
    </div>
    </div>

    
    
    
    
    
    
    </>
    






    
  )
}

export default Contact