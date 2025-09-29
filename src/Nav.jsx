import React, { useState } from 'react'
import { Link } from "react-router-dom"
import style from "./Nav.module.css"
const Nav = () => {
  const [s, sets] = useState(false)
  // const [ss,setss]=useState(false)

  return (
    <>


      <div className={style.main}>
        <div className={style.nav}>
          <ul>
            <li>Blogs</li>
            <li>New Batches</li>
            <li>Hire From Us</li>
            <div className={style.img}>
              <img src="https://nareshit.com/images/phone-call.svg" alt="" width="16px" height="16" /><li>+91 9111118941</li> </div>
            <div className={style.img}>
              <img src="https://nareshit.com/images/envelope.svg" alt="" width="18px" height="18" />
              <li>support@zint.com</li>
            </div>
          </ul>
        </div>
        {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}

        <div className={style.nav1}>
          {/* <img src="https://zintinstitute.com/wp-content/uploads/2022/08/logo-zint-png-format-2022.png" alt="" width="225px" /> */}
          <img src="zint.jpeg " alt="" width="230px" height="80px"/>

          <div className={style.center}>
            <input style={{ border: "none", outline: "none" }} type="text" placeholder='Search course' />

            <div className={style.search}>

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg></div>
          </div>

          <div className={style.right}>
            <ul>
              <div className={style.hm}>
                <li> <Link to="/" ><img style={{ marginBottom: "4px" }} src="https://nareshit.com/images/home-icon.svg" alt="" width="18px" /></Link> </li>
              </div>

              <div className={style.icon}>


                <li><Link to="/AllCourses" onMouseOver={() => { sets("allCourse") }}>ALL COURSES</Link></li>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
              </div>
              <div className={style.icon}>
                <li><Link to="/Service" onMouseOver={() => { sets("Services") }}>SERVICE</Link></li>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
              </div>

              <div className={style.icon}>
                <li> <Link to="/Traning" onMouseOver={() => { sets("Traning") }} >TRANING</Link></li>
                {/* <span className='ranu' onMouseOver={()=>{sets("Traning")}}>Traning</span> */}


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
              </div>
              <div className={style.icon}>
                <li> <Link to="About" onMouseOver={() => { sets("About") }}>ABOUT</Link></li>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
              </div>

              <li><Link to="Contact">CONTACT</Link></li>



            </ul>
          </div>

          <div className="logg">
            <Link to="Login" className={style.loginbtn}>Login</Link>
          </div>

          {/* -----------------------nav1 , , ,main--------------------- */}
          {
            s == "allCourse" && <div className={style.all} onMouseLeave={() => { sets(!s) }}>
              <ul>

                <li><Link to="Fullstack">Full Stack Courses</Link></li>
                <li><Link to="Intern">Internships</Link></li>

               

              </ul>
            </div>
          }
          {
            s == "Services" && <div className={style.service} onMouseLeave={() => { sets(!s) }} >
              <ul>

                <li><Link to="Services1">Classroom Training</Link></li>
                <li><Link to="Services2">Online Training</Link></li>
                <li><Link to="Services3">Weekend Training</Link></li>
                <li> <Link to="Services4">Workshops</Link></li>
                <li><Link to="Services5">Real time projects</Link></li>
                <li><Link to="Services6">Internships</Link></li>
                <li><Link to="Services7">Corporate Training</Link></li>



              </ul>
            </div>
          }

          {s == "Traning" && <div className={style.traning} onMouseLeave={() => { sets(!s) }} >
            <ul>


              <li><Link to="Traning">New Batches</Link></li>
              <li><Link to="InterviewQuestion">Interview Questions</Link></li>
              <li> <Link to="Blog">Blogs</Link></li>
              <li><Link to="Placement">Placement Registration</Link></li>
              <li><Link to="Job">Job Assitances</Link></li>


            </ul>
          </div>
          }

          {s == "About" && <div className={style.about} onMouseLeave={() => { sets(!s) }} >
            <ul>

              <li><Link to="About">About Zint Institute</Link></li>

              <li><Link to="TrainersP">Trainers Profile</Link></li>
              <li><Link to="OurT">Our Theme</Link></li>
              <li> <Link to="Careers">Careers</Link></li>
              <li><Link to="Real">Real Testimonials</Link></li>
              <li><Link to="News">News & Eventss</Link></li>
              

            </ul>
          </div>
          }


        </div>











      </div>



    </>
 
  )
}

export default Nav
