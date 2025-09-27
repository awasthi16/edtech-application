import React, { useRef } from 'react'
import "./Internships.css"

  
 const Internships = () => {
  const a = useRef()
  const b = useRef()
 

  function aa() {
    a.current.scrollIntoView()
  }
  function bb() {
    b.current.scrollIntoView()
  }
  return (
   <>


   
    <header>
        <div className="Internships1">
          <div className="Internshipsdiv1a">
            <img src="https://nareshit.com/images/Internship_Programs.jpg" alt="" />
          </div>
        </div>
      </header>


      <main>
         <div className="Internshipsdiv2">

          <div className="Internshipsdiv2a">
            <div className="Internshipsdiv2a1">
              <div className="Internshipsdivbox1">
                <p>Internships</p>
              </div>
              <div className="Internshipsdivbox2">
                <div className="Internshipsdivbox2a" >
                  <button onClick={aa} >Courses</button>
                </div>
                <div className="Internshipsdivbox2b">
                  <button  onClick={bb}>Training Features</button>
                </div>
           </div>
           {/* ############# */}

           <div className="Internshipsdivbox3">
                <div className="Internshipsdivbox3a">
                  <p>Internships Courses</p>
                </div>
                <div className="Internshipsdivbox3b">
                  <div className="Internshipsdiv4" ref={a} >


                     {/* //------------------------------ */}
                    <div className="Internshipsdiv4a">

                      <div className="Internshipsdiv4a1">
                        <div className="Internshipsdiv4a1a">
                            <img src="https://s3.ap-south-1.amazonaws.com/nareshit.images/internship-on-data-scince-online-training.jpg" alt=""  />

                        </div>
                        <div className="Internshipsdiv4a1b">
                          <div className="Internshipsdiv4a1b1">
                            <p>Internship program</p>
                          </div>
                          <div className="Internshipsdiv4a1b2">
                            <p>on Data Science</p>
                          </div>
                          <div className="Internshipsdiv4a1b3">
                            <pre><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><span>5</span></pre>


                          </div>
                        </div>
                        <div className="Internshipsdiv4a1c">

                          <div className="Internshipsdiv4a1c1">
                            <p>ENROLL</p>
                          </div>
                          <div className="Internshipsdiv4a1c2">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                            </svg>    <p> SHARE</p>

                          </div>

                        </div>
                      </div> 

                      {/* --------------------- */}

                      <div className="Internshipsdiv4a2">



                        <div className="Internshipsdiv4a2a">
                            <img src="https://s3.ap-south-1.amazonaws.com/nareshit.images/internship-on-python-online-training.jpg" alt="" />
                        </div>
                        <div className="Internshipsdiv4a2b">
                          <div className="Internshipsdiv4a2b1">
                            <p>Internship Program </p>
                          </div>
                          <div className="Internshipsdiv4a2b2">
                            <p>on Python</p>
                          </div>
                          <div className="Internshipsdiv4a2b3">
                            <pre><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-half" viewBox="0 0 16 16">
                                <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                              </svg><span>4.5</span></pre>
                          </div>

                        </div>
                        <div className="Internshipsdiv4a2c">

                          <div className="Internshipsdiv4a2c1">
                            <p>ENROLL</p>
                          </div>
                          <div className="Internshipsdiv4a2c2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                            </svg> 
                            <p>SHARE</p>

                          </div>

                        </div>


                      </div>

                      {/* --------------------------- */}

                       <div className="Internshipsdiv4a3">



                        <div className="Internshipsdiv4a3a">
                          <img src="https://s3.ap-south-1.amazonaws.com/nareshit.images/internship-on-devops-with-multicloud-online-training.jpg" alt="" />
                        </div>
                        <div className="Internshipsdiv4a3b">
                          <div className="Internshipsdiv4a3b1">
                            <p>Internship Program</p>
                          </div>
                          <div className="Internshipsdiv4a3b2">
                            <p>on DevOps with </p>
                            <p>Cloud</p>
                          </div>
                          <div className="Internshipsdiv4a3b3">
                            <pre><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><span>5</span></pre>
                          </div>

                        </div>
                        <div className="Internshipsdiv4a3c">

                          <div className="Internshipsdiv4a3c1">
                            <p>ENROLL</p>
                          </div>
                          <div className="Internshipsdiv4a3c2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                            </svg> <p>SHARE</p>
                            </div></div>
                       </div>

                  </div>
            
                      {/* ////////////////////////////////////////////////// */}
                      {/* --------------------------our courses---------------------- */}

                       

                     
                      
                     <div className="Internshipsdiv4b">
                      <div className="Internshipsdiv4b1">
                        <a href="">EXPLORE OUR COURSES</a>
                      </div>

                    </div>
                    <div ref={b} className="Internshipsdiv5">
                      <div className="Internshipsdiv5a">
                        <p>Training Features</p>

                      </div>
                      <div className="Internshipsdiv5b">
                        <div className="Internshipsdiv5b1">

                          <div className="Internshipsdiv5b1a">
                            <img src="https://s3.ap-south-1.amazonaws.com/nareshit.images/images/image_1705751839858.png" alt="" />
                          </div>

                          <div className="Internshipsdiv5b1b">
                            <p>Industry-Aligned Skill
 </p>
                            <p> Development</p>
                          </div>
                          <br />

                          <div className="Internshipsdiv5b1c">
                            <p>Explore diverse internship <br /> opportunities in collaboration <br />with leading industry partners. </p>
                          </div>
                          <div className="Internshipsdiv5b1d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                          </div>


                        </div>
                        <div className="Internshipsdiv5b2">


                          <div className="Internshipsdiv5b2a">
                            <img src="https://s3.ap-south-1.amazonaws.com/nareshit.images/images/image_1705751917628.png" alt="" />
                          </div>

                          <div className="Internshipsdiv5b2b">
                            <p>Hands-On Projects</p>

                          </div>
                          <br />
                          <br />

                          <div className="Internshipsdiv5b2c">
                            <p>Apply skills to real-world <br /> projects for practical <br /> experience and enhanced <br />learning.</p>
                          </div>
                          <div className="Internshipsdiv5b2d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                          </div>

                        </div>
                        <div className="Internshipsdiv5b3">


                          <div className="Internshipsdiv5b3a">
                            <img src="https://s3.ap-south-1.amazonaws.com/nareshit.images/images/image_1705752032898.png" alt="" />
                          </div>

                          <div className="Internshipsdiv5b3b">
                            <p>Flexible Internship </p>
                            <p>Duration</p>

                          </div>
                          <br />
                          <br />

                          <div className="Internshipsdiv5b3c">
                            <p>Learn from industry experts <br /> for insights and guidance in <br />full-stack development.</p>
                          </div>
                          <div className="Internshipsdiv5b3d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                          </div>

                        </div>
                        <div className="Internshipsdiv5b4">

                          <div className="Internshipsdiv5b4a">
                            <img src="https://s3.ap-south-1.amazonaws.com/nareshit.images/images/image_1705752046621.png" alt="" />

                          </div>

                          <div className="Internshipsdiv5b4b">
                            <p>Internship Certification
</p>
                          </div>
                          <br />

                          <div className="Internshipsdiv5b4c">
                            <p>Access job placement <br /> assistance for career <br /> support and employer <br /> connections.</p>
                          </div>
                          <div className="Internshipsdiv5b4d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                          </div>


                        </div>
                        <div className="Internshipsdiv5b5">

                          <div className="Internshipsdiv5b5a">
                            <img src="https://s3.ap-south-1.amazonaws.com/nareshit.images/images/image_1705752110543.png" alt="" />

                          </div>

                          <div className="Internshipsdiv5b5b">
                            <p>24/7 Intern Support</p>
                          </div>
                          <br />

                          <div className="Internshipsdiv5b5c">
                            <p>Receive a recognized <br /> certification validating your <br />
                              full-stack development <br /> skills.</p>
                          </div>
                          <div className="Internshipsdiv5b5d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                          </div>

                        </div>
                        <div className="Internshipsdiv5b6">

                          <div className="Internshipsdiv5b6a">
                            <img src="https://s3.ap-south-1.amazonaws.com/nareshit.images/images/image_1705752195843.png" alt="" />
                          </div>

                          <div className="Internshipsdiv5b6b">
                            <p>Remote Internship </p>
                            <p>Options</p>

                          </div>
                          <br />
                          <br />

                          <div className="Internshipsdiv5b6c">
                            <p>Access round-the-clock <br /> support for immediate <br /> assistance, ensuring a  <br />seamless learning journey.</p>
                          </div>
                          <div className="Internshipsdiv5b6d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                          </div>
                          </div>
                          </div>
              </div> 
         </div>
               


                  
      







         {/* ________________________________   */}
        </div>
     </div>
     </div>
     </div>
                    </div>

     
      </main>






   
   
   
   
   
   
   </>
  )
}

export default Internships