import React from 'react'
import "./Job.css"
import SevicesCommon from './SevicesCommon'

const Job = () => {
    return (
        <>
            <br /><br />
            <div className="jobmaindiv">  
                        
                <div className="div1">
                    {/* <div className="dd"> JOB ASSISTANCE</div> */}
                    <img src="/job.png" alt="" width="600px" />
                </div>
                <div className="div2">
                    <p> Here at Zint Institute, our commitment to the success of your career begins beyond your training. Our active Placement Assistance Cell is committed to your job search and connects you with the potential employer.</p>
                    <p>Here's how our Placement Assistance program benefits you:</p>
                    <li>Comprehensive Screening Tests: We provide a detailed screening test that detects your talent and prepares you well enough for the job market.</li>
                    <li>On-Campus Recruitment Drives: IT companies directly contact Zint Institute for recruitment. Our Placement Assistance Cell arranges on-campus drives, thereby creating a platform for interaction with potential employers.</li>
                    <li>Career Counseling: Our expert career counselors offer personal career counseling to students in Resume Building, Interview Preparation, and Job Search Strategy for better employability.</li>
                    <li>Job Market Insights: We take you through all the current trends in the job market, present and future industrial demands so as to understand what employers want and how to present yourself efficiently in the market.</li>
                    <p>We offer wide-ranging support and resources, but be advised that employment is not guaranteed.</p>
                    <p>Now, get ready to take a leap forward in your career. Join Zint Institute now and let us make you future-ready with the best online and classroom training. Now, reach us to know more about the courses that you can opt for while embarking on a worthy career.</p>
                </div>
               
            </div>
             {/* <div className="bttt">
                    <button>Enquiry</button>
                </div> */}
            
            <br /><br /><br />
          
              <SevicesCommon></SevicesCommon>


        </>
    )
}

export default Job