import React from 'react'
import "./Fullstack.css"

const Fullstack = () => {
  const a = useRef()
  const b = useRef()
  const c = useRef()
  const d = useRef()


  function aa() {
    a.current.scrollIntoView()
  }
  function bb() {
    b.current.scrollIntoView()
  }
  function cc() {
    c.current.scrollIntoView()
  }
  function dd() {
    d.current.scrollIntoView()
  }

  return (
    <>
     <header>
        <div className="fullstackdiv1">
          <div className="fullstackdiv1a">
            <img src="/src/assets/Full_Stack_Courses.jpg" alt="" />
          </div>
        </div>
      </header>
      <main>
        <div className="fullstackdiv2">

          <div className="fullstackdiv2a">
            <div className="fullstackdiv2a1">
              <div className="fullstackdivbox1">
                <p>Full Stack Courses</p>
              </div>
              <div className="fullstackdivbox2">
                <div className="fullstackdivbox2a" >
                  <button onClick={aa}>Courses</button>
                </div>
                <div className="fullstackdivbox2b">
                  <button onClick={bb}>Training Features</button>
                </div>
                <div className="fullstackdivbox2c">
                  <button onClick={cc}>Certificate</button>
                </div>
                <div className="fullstackdivbox2d">
                  <button onClick={dd}>Batch Time Table</button>
                </div>
              </div>
              <div className="fullstackdivbox3">
                <div className="fullstackdivbox3a">
                  <p>Full stack Courses</p>
                </div>
                <div className="fullstackdivbox3b">
                  <div className="fullstackdiv4" ref={a} >


                    {/* //------------------------------ */}
                    <div className="fullstackdiv4a">

                      <div className="fullstackdiv4a1">
                        <div className="fullstackdiv4a1a">
                          <img src="/src/assets/fullstack-1.jpg" alt="" />
                        </div>
                        <div className="fullstackdiv4a1b">
                          <div className="fullstackdiv4a1b1">
                            <p>Full Stack</p>
                          </div>
                          <div className="fullstackdiv4a1b2">
                            <p>Python</p>
                          </div>
                          <div className="fullstackdiv4a1b3">
                            <pre><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><span>4.5</span></pre>


                          </div>
                        </div>
                        <div className="fullstackdiv4a1c">

                          <div className="fullstackdiv4a1c1">
                            <p>ENROLL</p>
                          </div>
                          <div className="fullstackdiv4a1c2">
                            <center><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                            </svg></center>
                            <center><p>SHARE</p></center>

                          </div>

                        </div>
                      </div>

                      {/* --------------------- */}

                      <div className="fullstackdiv4a2">



                        <div className="fullstackdiv4a2a">
                          <img src="/src/assets/fullstack-2.jpg" alt="" />
                        </div>
                        <div className="fullstackdiv4a2b">
                          <div className="fullstackdiv4a2b1">
                            <p>UI Full Stack <br />Web</p>
                          </div>
                          <div className="fullstackdiv4a2b2">
                            <p>Development <br />With React</p>
                          </div>
                          <div className="fullstackdiv4a2b3">
                            <pre><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-half" viewBox="0 0 16 16">
                                <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                              </svg><span>4.5</span></pre>
                          </div>

                        </div>
                        <div className="fullstackdiv4a2c">

                          <div className="fullstackdiv4a2c1">
                            <p>ENROLL</p>
                          </div>
                          <div className="fullstackdiv4a2c2">
                            <center><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                            </svg></center>
                            <center><p>SHARE</p></center>

                          </div>

                        </div>


                      </div>

                      {/* --------------------------- */}

                      <div className="fullstackdiv4a3">



                        <div className="fullstackdiv4a3a">
                          <img src="/src/assets/fullstack-3.jpg" alt="" />
                        </div>
                        <div className="fullstackdiv4a3b">
                          <div className="fullstackdiv4a3b1">
                            <p>Full Stack Data</p>
                          </div>
                          <div className="fullstackdiv4a3b2">
                            <p>Science & AI</p>
                          </div>
                          <div className="fullstackdiv4a3b3">
                            <pre><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><span>5</span></pre>
                          </div>

                        </div>
                        <div className="fullstackdiv4a3c">

                          <div className="fullstackdiv4a3c1">
                            <p>ENROLL</p>
                          </div>
                          <div className="fullstackdiv4a3c2">
                            <center><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                            </svg></center>
                            <center><p>SHARE</p></center>

                          </div>

                        </div>



                      </div>
                      {/* ////////////////////////////////////////////////// */}

                      <div className="fullstackdiv4a4">

                        <div className="fullstackdiv4a4a">
                          <img src="/src/assets/fullstack-4.jpg" alt="" />
                        </div>
                        <div className="fullstackdiv4a4b">
                          <div className="fullstackdiv4a3b1">
                            <p>Full Stack.NET</p>
                          </div>
                          <div className="fullstackdiv4a4b2">
                            <p>core</p>
                          </div>
                          <div className="fullstackdiv4a4b3">
                            <pre><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-half" viewBox="0 0 16 16">
                                <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                              </svg><span>4.5</span></pre>
                          </div>

                        </div>





                        <div className="fullstackdiv4a4c">

                          <div className="fullstackdiv4a4c1">
                            <p>ENROLL</p>
                          </div>
                          <div className="fullstackdiv4a4c2">
                            <center><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                            </svg></center>
                            <center><p>SHARE</p></center>

                          </div>

                        </div>


                      </div>





                    </div>
                    {/* //------------------------------- */}
                    <div className="fullstackdiv4b">
                      <div className="fullstackdiv4b1">
                        <a href="">EXPLORE OUR COURSES</a>
                      </div>

                    </div>
                    <div ref={b} className="fullstackdiv5">
                      <div className="fullstackdiv5a">
                        <p>Training Features</p>

                      </div>
                      <div className="fullstackdiv5b">
                        <div className="fullstackdiv5b1">

                          <div className="fullstackdiv5b1a">
                            <img src="/src/assets/fullstack-5.png" alt="" />
                          </div>

                          <div className="fullstackdiv5b1b">
                            <p>Comprehensive</p>
                            <p>Curriculum</p>
                          </div>

                          <div className="fullstackdiv5b1c">
                            <p>Master web development <br /> with a full-stack curriculum  <br />covering front-end, back- <br />end, databases, and more.</p>
                          </div>
                          <div className="fullstackdiv5b1d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                          </div>


                        </div>
                        <div className="fullstackdiv5b2">


                          <div className="fullstackdiv5b2a">
                            <img src="/src/assets/fullstack-6.png" alt="" />
                          </div>

                          <div className="fullstackdiv5b2b">
                            <p>Hands-On Projects</p>

                          </div>

                          <div className="fullstackdiv5b2c">
                            <p>Apply skills to real-world <br /> projects for practical <br /> experience and enhanced <br />learning.</p>
                          </div>
                          <div className="fullstackdiv5b2d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                          </div>

                        </div>
                        <div className="fullstackdiv5b3">


                          <div className="fullstackdiv5b3a">
                            <img src="/src/assets/fullstack-7.png" alt="" />
                          </div>

                          <div className="fullstackdiv5b3b">
                            <p>Expert Instructors</p>

                          </div>

                          <div className="fullstackdiv5b3c">
                            <p>Learn from industry experts <br /> for insights and guidance in <br />full-stack development.</p>
                          </div>
                          <div className="fullstackdiv5b3d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                          </div>

                        </div>
                        <div className="fullstackdiv5b4">

                          <div className="fullstackdiv5b4a">
                            <img src="/src/assets/fullstack-8.png" alt="" />
                          </div>

                          <div className="fullstackdiv5b4b">
                            <p>Job Placement</p>
                            <p>Assistance</p>
                          </div>

                          <div className="fullstackdiv5b4c">
                            <p>Access job placement <br /> assistance for career <br /> support and employer <br /> connections.</p>
                          </div>
                          <div className="fullstackdiv5b4d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                          </div>


                        </div>
                        <div className="fullstackdiv5b5">

                          <div className="fullstackdiv5b5a">
                            <img src="/src/assets/fullstack-9.png" alt="" />
                          </div>

                          <div className="fullstackdiv5b5b">
                            <p>Certification upon</p>
                            <p>Completion</p>
                          </div>

                          <div className="fullstackdiv5b5c">
                            <p>Receive a recognized <br /> certification validating your <br />
                              full-stack development <br /> skills.</p>
                          </div>
                          <div className="fullstackdiv5b5d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                          </div>

                        </div>
                        <div className="fullstackdiv5b6">

                          <div className="fullstackdiv5b6a">
                            <img src="/src/assets/fullstack-10.png" alt="" />
                          </div>

                          <div className="fullstackdiv5b6b">
                            <p>24/7 Support</p>

                          </div>

                          <div className="fullstackdiv5b6c">
                            <p>Access round-the-clock <br /> support for immediate <br /> assistance, ensuring a  <br />seamless learning journey.</p>
                          </div>
                          <div className="fullstackdiv5b6d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                          </div>


                        </div>

                      </div>

                      <div className="fullstackdiv5c" ref={c} >
                        <div className="fullstackdiv5c1">
                          <p>General Certificate (Full Stack)</p>
                        </div>
                        <div className="fullstackdiv5c2">
                          <div className="fullstackdiv5c2a">
                            <p>null</p>
                          </div>
                          <div className="fullstackdiv5c2b">
                            <img src="" alt="" />
                          </div>
                        </div>
                      </div>

                      <div className="fullstackdiv5d">
                        <div className="fullstackdiv5d1">
                          <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                          </svg>TALK TO:<span> +91 8179191999</span></p>
                        </div>
                      </div>
                    </div>




                    <div className="fullstackdiv6 " ref={d} >
                      <div className="fullstackdiv6a">
                        <p>Batch Time Table</p>
                      </div>
                      <div className="fullstackdiv6b">
                        <div className="fullstackdiv6b1">

                          <div className="fullstackdiv7">
                            <div id="fullstackdarkcolor" className="fullstackdiv7a">
                              <div className="fullstackdiv7a1">
                                <p>Course Name</p>
                              </div>
                              <div className="fullstackdiv7a2">
                                <p>Faculty</p>
                              </div>
                              <div className="fullstackdiv7a3">
                                <p>Date</p>
                              </div>
                              <div className="fullstackdiv7a4">
                                <p>Time</p>
                              </div>
                              <div id="fullstackdiv7a5" className="fullstackdiv7a5">
                                <p>Mode of <br />trainging</p>
                              </div>
                              <div className="fullstackdiv7a6">
                                <p>Batch type</p>
                              </div>
                              <div className="fullstackdiv7a7">
                                <p>Meeting Link</p>
                              </div>

                            </div>
                            <div className="fullstackdiv7b">


                              <div className="fullstackdiv7b1">
                                <p>Full Stack .NET Core</p>
                              </div>
                              <div className="fullstackdiv7b2">
                                <p>Mr. Vishwa</p>
                              </div>
                              <div className="fullstackdiv7b3">
                                <p>Sep <br /> 15</p>
                              </div>
                              <div className="fullstackdiv7b4">
                                <p>9:00 AM <br /> (IST)</p>
                              </div>
                              <div className="fullstackdiv7b5">
                                <p>Classroom Training</p>
                              </div>
                              <div className="fullstackdiv7b6">
                                <p>Classroom Training</p>
                              </div>
                              <div className="fullstackdiv7b7">

                                <button>Click <br /> here</button>
                              </div>

                            </div>
                            <div id="fullstackdark" className="fullstackdiv7c">

                              <div className="fullstackdiv7b1">
                                <p>Full Stack .NET Core</p>
                              </div>
                              <div className="fullstackdiv7b2">
                                <p>Mr. Vishwa</p>
                              </div>
                              <div className="fullstackdiv7b3">
                                <p>Sep <br /> 15</p>
                              </div>
                              <div className="fullstackdiv7b4">
                                <p>9:00 AM <br /> (IST)</p>
                              </div>
                              <div className="fullstackdiv7b5">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7b6">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7b7">
                                <button>Click <br /> here</button>
                              </div>
                            </div>

                            <div className="fullstackdiv7d">

                              <div className="fullstackdiv7d1">
                                <p>Full Stack Java</p>
                              </div>
                              <div className="fullstackdiv7d2">
                                <p>Mr. Hari <br /> Krishnaa</p>
                              </div>
                              <div className="fullstackdiv7d3">
                                <p>Sep <br /> 15</p>
                              </div>
                              <div className="fullstackdiv7d4">
                                <p>7:30 PM  <br />(IST)</p>
                              </div>
                              <div className="fullstackdiv7d5">
                                <p>Classroom Training</p>
                              </div>
                              <div className="fullstackdiv7d6">
                                <p>Classroom Training</p>
                              </div>
                              <div className="fullstackdiv7d7">

                                <button>Click <br /> here</button>
                              </div>

                            </div>

                            <div id="fullstackdark" className="fullstackdiv7e">
                              <div className="fullstackdiv7d1">
                                <p>Full Stack Java</p>
                              </div>
                              <div className="fullstackdiv7d2">
                                <p>Mr. Hari <br /> Krishnaa</p>
                              </div>
                              <div className="fullstackdiv7d3">
                                <p>Sep <br /> 15</p>
                              </div>
                              <div className="fullstackdiv7d4">
                                <p>7:30 PM  <br />(IST)</p>
                              </div>
                              <div className="fullstackdiv7d5">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7d6">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7d7">

                                <button>Click <br /> here</button>
                              </div>
                            </div>
                            <div className="fullstackdiv7f">
                              <div className="fullstackdiv7d1">
                                <p>Full Stack <br /> Software Testing</p>
                              </div>
                              <div className="fullstackdiv7d2">
                                <p>Mr. Vamshi <br /> Mohan</p>
                              </div>
                              <div className="fullstackdiv7d3">
                                <p>Sep <br /> 15</p>
                              </div>
                              <div className="fullstackdiv7d4">
                                <p>9:00 PM  <br />(IST)</p>
                              </div>
                              <div className="fullstackdiv7d5">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7d6">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7d7">

                                <button>Click <br /> here</button>
                              </div>
                            </div>

                            <div id="fullstackdark" className="fullstackdiv7g">
                              <div className="fullstackdiv7d1">
                                <p>Full Stack Python</p>
                              </div>
                              <div className="fullstackdiv7d2">
                                <p>Mr. Ravi</p>
                              </div>
                              <div className="fullstackdiv7d3">
                                <p>Sep <br /> 15</p>
                              </div>
                              <div className="fullstackdiv7d4">
                                <p>9:00 AM  <br />(IST)</p>
                              </div>
                              <div className="fullstackdiv7d5">
                                <p>Classroom Training</p>
                              </div>
                              <div className="fullstackdiv7d6">
                                <p>Classroom Training</p>
                              </div>
                              <div className="fullstackdiv7d7">

                                <button>Click <br /> here</button>
                              </div>
                            </div>

                            <div className="fullstackdiv7h">

                              <div className="fullstackdiv7d1">
                                <p>Full Stack Python</p>
                              </div>
                              <div className="fullstackdiv7d2">
                                <p>Mr. Ravi</p>
                              </div>
                              <div className="fullstackdiv7d3">
                                <p>Sep <br /> 15</p>
                              </div>
                              <div className="fullstackdiv7d4">
                                <p>9:00 AM  <br />(IST)</p>
                              </div>
                              <div className="fullstackdiv7d5">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7d6">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7d7">

                                <button>Click <br /> here</button>
                              </div>

                            </div>

                            <div id="fullstackdark" className="fullstackdiv7i">

                              <div className="fullstackdiv7d1">
                                <p>Full Stack Java</p>
                              </div>
                              <div className="fullstackdiv7d2">
                                <p>Real-Time <br />Expert</p>
                              </div>
                              <div className="fullstackdiv7d3">
                                <p>Sep <br /> 15</p>
                              </div>
                              <div className="fullstackdiv7d4">
                                <p>4:00 PM  <br />(IST)</p>
                              </div>
                              <div className="fullstackdiv7d5">
                                <p>KPHB</p>
                              </div>
                              <div className="fullstackdiv7d6">
                                <p>KPHB</p>
                              </div>
                              <div className="fullstackdiv7d7">

                                <button>Click <br /> here</button>
                              </div>
                            </div>

                            <div className="fullstackdiv7j">
                              <div className="fullstackdiv7d1">
                                <p>Full Stack Java</p>
                              </div>
                              <div className="fullstackdiv7d2">
                                <p>Real-Time <br />Expert</p>
                              </div>
                              <div className="fullstackdiv7d3">
                                <p>Sep <br /> 15</p>
                              </div>
                              <div className="fullstackdiv7d4">
                                <p>4:00 PM  <br />(IST)</p>
                              </div>
                              <div className="fullstackdiv7d5">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7d6">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7d7">

                                <button>Click <br /> here</button>
                              </div>
                            </div>

                            <div id="fullstackdark" className="fullstackdiv7k">
                              <div className="fullstackdiv7d1">
                                <p>Full Stack Data <br /> Science & AI</p>
                              </div>
                              <div className="fullstackdiv7d2">
                                <p>Mr. Sriram</p>
                              </div>
                              <div className="fullstackdiv7d3">
                                <p>Sep <br />15</p>
                              </div>
                              <div className="fullstackdiv7d4">
                                <p>9:30 AM <br /> (IST)</p>
                              </div>
                              <div className="fullstackdiv7d5">
                                <p>JNTU-H</p>
                              </div>
                              <div className="fullstackdiv7d6">
                                <p>JNTU-H</p>
                              </div>
                              <div className="fullstackdiv7d7">

                                <button>Click <br /> here</button>
                              </div>

                            </div>
                            <div className="fullstackdiv7l">
                              <div className="fullstackdiv7d1">
                                <p>Full Stack Data<br />Science & AI</p>
                              </div>
                              <div className="fullstackdiv7d2">
                                <p>Mr. Sriram</p>
                              </div>
                              <div className="fullstackdiv7d3">
                                <p>Sep <br />15</p>
                              </div>
                              <div className="fullstackdiv7d4">
                                <p>9:30 AM <br /> (IST)</p>
                              </div>
                              <div className="fullstackdiv7d5">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7d6">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7d7">

                                <button>Click <br /> here</button>
                              </div>

                            </div>

                            <div id="fullstackdark" className="fullstackdiv7m">
                              <div className="fullstackdiv7d1">
                                <p>Full Stack Data<br />Science & AI</p>
                              </div>
                              <div className="fullstackdiv7d2">
                                <p>Mr. Mayur</p>
                              </div>
                              <div className="fullstackdiv7d3">
                                <p>Sep <br />17</p>
                              </div>
                              <div className="fullstackdiv7d4">
                                <p>7:30 AM <br /> (IST)</p>
                              </div>
                              <div className="fullstackdiv7d5">
                                <p>Classroom Training</p>
                              </div>
                              <div className="fullstackdiv7d6">
                                <p>Classroom Training</p>
                              </div>
                              <div className="fullstackdiv7d7">

                                <button>Click <br /> here</button>
                              </div>
                            </div>

                            <div className="fullstackdiv7n">
                              <div className="fullstackdiv7d1">
                                <p>Full Stack Data<br />Science & AI</p>
                              </div>
                              <div className="fullstackdiv7d2">
                                <p>Mr. Mayur</p>
                              </div>
                              <div className="fullstackdiv7d3">
                                <p>Sep <br />17</p>
                              </div>
                              <div className="fullstackdiv7d4">
                                <p>7:30 AM <br /> (IST)</p>
                              </div>
                              <div className="fullstackdiv7d5">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7d6">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7d7">

                                <button>Click <br /> here</button>
                              </div>

                            </div>

                            <div id="fullstackdark" className="fullstackdiv7o">
                              <div className="fullstackdiv7d1">
                                <p>Full Stack Python</p>
                              </div>
                              <div className="fullstackdiv7d2">
                                <p>Mr. Sai <br /> Vardhan</p>
                              </div>
                              <div className="fullstackdiv7d3">
                                <p>Sep <br />17</p>
                              </div>
                              <div className="fullstackdiv7d4">
                                <p>9:00 AM <br /> (IST)</p>
                              </div>
                              <div className="fullstackdiv7d5">
                                <p>JNTU-H</p>
                              </div>
                              <div className="fullstackdiv7d6">
                                <p>JNTU-H</p>
                              </div>
                              <div className="fullstackdiv7d7">

                                <button>Click <br /> here</button>
                              </div>

                            </div>

                            <div className="fullstackdiv7p">
                              <div className="fullstackdiv7d1">
                                <p>Full Stack Python</p>
                              </div>
                              <div className="fullstackdiv7d2">
                                <p>Mr. Sai <br /> Vardhan</p>
                              </div>
                              <div className="fullstackdiv7d3">
                                <p>Sep <br />17</p>
                              </div>
                              <div className="fullstackdiv7d4">
                                <p>9:00 AM <br /> (IST)</p>
                              </div>
                              <div className="fullstackdiv7d5">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7d6">
                                <p>Online <br />Training</p>
                              </div>
                              <div className="fullstackdiv7d7">

                                <button>Click <br /> here</button>
                              </div>
                            </div>
                            <div id="fullstackdark" className="fullstackdiv7q">
                              <div className="fullstackdiv7d1">
                                <p>Full Stack Python</p>
                              </div>
                              <div className="fullstackdiv7d2">
                                <p>Mr. K V Rao</p>
                              </div>
                              <div className="fullstackdiv7d3">
                                <p>Sep <br />22</p>
                              </div>
                              <div className="fullstackdiv7d4">
                                <p>7:15 AM <br /> (IST)</p>
                              </div>
                              <div className="fullstackdiv7d5">
                                <p>Classroom Training</p>
                              </div>
                              <div className="fullstackdiv7d6">
                                <p>Classroom Training</p>
                              </div>
                              <div className="fullstackdiv7d7">

                                <button>Click <br /> here</button>
                              </div>

                            </div>
                            <div className="fullstackdiv7r">
                              <div className="fullstackdiv7d1">
                                <p>Full Stack Python</p>
                              </div>
                              <div className="fullstackdiv7d2">
                                <p>Mr. K V Rao</p>
                              </div>
                              <div className="fullstackdiv7d3">
                                <p>Sep <br />22</p>
                              </div>
                              <div className="fullstackdiv7d4">
                                <p>7:15 AM <br /> (IST)</p>
                              </div>
                              <div className="fullstackdiv7d5">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7d6">
                                <p>Online <br /> Training</p>
                              </div>
                              <div className="fullstackdiv7d7">

                                <button>Click <br /> here</button>
                              </div>

                            </div>


                          </div>

                        </div>
                      </div>
                      <div className="fullstackdiv6c">
                        <div className="fullstackdiv6c1">
                          <p>ENROLL NOW</p>
                        </div>
                      </div>
                    </div>

                  </div>



                </div>
              </div>

            </div>

            <div className="fullstackdiv2a2">

              <div className="fullstackdiv2a2a">

              </div>
              <div className="fullstackdiv2a2b">
                <p id="fullstacksmall">Top 5 Technologies to learn</p>
                <p id="fullstacklarge"> Register for the Course !</p>
                <img src="/src/assets/women-with-laptop.png" alt="" />

              </div>
              <div className="fullstackdiv2a2c">
                <ul>
                  <li><input type="text" placeholder='Full Name' /></li>
                  <li> <input type="email" placeholder='Email address' /></li>
                  <li><input type="phone" placeholder='Mobile Number' /></li>
                  <li>
                    <select name="" id="">
                      <option value="">Select Course</option>
                      <option value="">Full Stack Software Test</option>
                      <option value="">Full Stack Python</option>
                      <option value="">UI Full Stack Web Development With React</option>
                      <option value="">Full Stack Data Science & AI</option>
                      <option value="">Full Stack.NET Core</option>
                      <option value="">Full Stack Java</option>
                    </select>
                  </li>
                  <li>
                    <select name="" id="">
                      <option value="">Mode Of Training</option>
                      <option value="">Online</option>
                      <option value="">Offline</option>
                      <option value="">Live</option>
                    </select>
                  </li>
                </ul>
              </div>
              <div className="fullstackdiv2a2d">
                <div className="fullstackdiv2a2dbox">



                  <div className="fullstackdiv2a2d1">
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="fullstackdiv2a2d2">
                    <p>
                      By Providing your contact <br />details, you agree to our <br /> <span> Terms of use</span>&<span>Privacy Policy</span></p>
                  </div>
                </div>
              </div>
              <div className="fullstackdiv2a2e">
                   <button>Submit</button>
              </div>


            </div>
          </div>

        </div>



      </main>
    </>
  )
}

export default Fullstack