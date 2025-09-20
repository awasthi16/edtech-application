import React from 'react'
import "./PlaceMent.css"
import SevicesCommon from './SevicesCommon'

const PlaceMent = () => {
    return (
        <>
            <br />     <br />     <br />
            <div>
                <div className='palcementmaindiv'>
                    <div className='heading'>
                        <h1> Placement Registration</h1>
                    </div>

                    <div className='placementmain'>
                        <div className='placement'>
                            <img src='/placement.jpeg' width="100%"></img>
                        </div>
                        <div className='placement1'>
                            <p className='navigation'>Navigating Placement-Oriented IT Courses     </p>
                            <p className='ee'>Embarking on a journey towards a successful IT career involves strategic skill development. In this programme, we'll guide you through the most relevant and placement-oriented courses in the IT sector. These programmes are designed to enhance your employability and provide the practical skills demanded by industry leaders.</p>
                            <p className='ee'>Begin your journey by understanding the current requirements of the IT industry. Explore the in-demand skills and technologies that employers are seeking in prospective candidates.</p>
                            <p className='ee'>By completing these Programme, you'll have a comprehensive understanding of the courses that align with the demands of the IT job market. These placement-oriented courses will not only enhance your technical skills but also increase your employability in the dynamic and evolving IT sector. Best of luck in your pursuit of a rewarding IT career!</p>
                          
                          <button className='en'>Enroll Now</button>
                           <button className='enq1'>Enquiry</button>
                        </div>

                    </div>

                </div>




            </div>
            <br/>    
           <SevicesCommon></SevicesCommon>
        </>
    )
}

export default PlaceMent