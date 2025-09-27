import React, { useState } from 'react'
import style from "./Dashboard.module.css"
// import Chart from './Chart'


const DashBoard = () => {
  const [Overview, setoverview] = useState(true)
  const [Students, setstudents] = useState(false)
  const [facultys, setfacultys] = useState(false)
  const [Analytics, setAnalytics] = useState(false)
  const [Reports, setrports] = useState(false)
  const [Management, setmanagement] = useState(false)

  const [OverviewNav, setOverviewNav] = useState(true)
  const [user, setuser] = useState(false)
  const [system, setsystem] = useState(false)
  const [task, settask] = useState(false)
  const [setting, setsetting] = useState(false)
  return (
    <>
      <div className={style.navbardashboard}>
        <div className={style.dashboardDiv}>
          <ul>
            <li onClick={() => { setoverview(true), setstudents(false), setfacultys(false), setAnalytics(false), setrports(false), setmanagement(false) }}>Overview</li>
            <li onClick={() => { setoverview(false), setstudents(true), setfacultys(false), setAnalytics(false), setrports(false), setmanagement(false) }}>Students</li>
            <li onClick={() => { setoverview(false), setstudents(false), setfacultys(true), setAnalytics(false), setrports(false), setmanagement(false) }}>Facultys</li>
            <li onClick={() => { setoverview(false), setstudents(false), setfacultys(false), setAnalytics(true), setrports(false), setmanagement(false) }}>Analytics</li>
            <li onClick={() => { setoverview(false), setstudents(false), setfacultys(false), setAnalytics(false), setrports(true), setmanagement(false) }}>Reports</li>
            <li onClick={() => { setoverview(false), setstudents(false), setfacultys(false), setAnalytics(false), setrports(false), setmanagement(true) }}>Management</li>

          </ul> </div></div>
      <div className={style.resultmaindiv}>
        <div className={style.resultdiv}>
          <li className={style.welcome}>Welcome, Emily Davis!</li>
          <li className={style.wel1}>You ar logged in as a owner</li>
          {Overview && <div className={style.overmaindiv}>

            <div className={style.overdiv}>
              <div className={style.levelmaindiv}>
                <li className={style.level}>Your Ascess Level</li>
                <div className={style.inputdiv}>
                  <div className={style.inputdiv1}>
                    <div className={style.div}>Overview</div>
                    <div className={style.div}>Students</div>
                    <div className={style.div}>Faculty</div>
                    <div className={style.div}>Analytics</div>
                    <div className={style.div}>Reports</div>
                    <div className={style.div}>Management</div>
                  </div> </div>  </div>  </div>
          </div>}


          {/* ..................................................................................... */}
          {Students && <div className={style.student}>  student</div>}
          {facultys && <div className={style.faculty}> faculty </div>}

          {/* ........................... .......................................................*/}
          {Analytics && <div className={style.analytics}>
            <div className={style.analyticsmaindiv}>
              <div className={style.analyticsdiv}>
                <div className={style.div4main}>
                  <div className={style.div4item1}>
                    <div className={style.total11}>
                      <li className={style.t1}>Total Students</li>
                      <div className={style.num}>
                        <li className={style.n1}>+12.5%</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                        </svg></li></div>
                      <li className={style.per1}>vs last quarter</li>
                    </div>


                    <div className={style.total21}>
                      <li className={style.t1}>Revenue This Month</li>
                      <div className={style.num}>
                        <li className={style.n2}>$162K</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                          <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                        </svg></li></div>
                      <li className={style.per2}>+4.5% this month</li>
                    </div>

                    <div className={style.total31}>
                      <li className={style.t3}>Course Completion</li>
                      <div className={style.num}>
                        <li className={style.n3}>89%</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                        </svg></li></div>
                      <li className={style.per3}>Above target</li>
                    </div>

                    <div className={style.total41}>
                      <li className={style.t4}>Avg Class Hours</li>
                      <div className={style.num}>
                        <li className={style.n4}>28.5</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-file-earmark-ruled" viewBox="0 0 16 16">
                          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h7v1a1 1 0 0 1-1 1zm7-3H6v-2h7z" />
                        </svg></li></div>
                      <li className={style.per4}>per week</li>
                    </div></div> </div></div> <br />
              <hr />
              <div className={style.chatmaindiv}>
                <div className={style.chatdiv}> 
                  <div className={style.chatdiv1}></div>
                  <div className={style.chatdiv2}></div>
                  <div className={style.chatdiv3}></div>
                  <div className={style.chatdiv4}></div>
                </div>  </div>


            </div><br /> <br />



          </div>}



          {Management && <div className={style.management}>


            <div className={style.insidenav}>
              <li onClick={() => { setOverviewNav(true), setuser(false), setsystem(false), settask(false), setsetting(false) }}>Overview</li>
              <li onClick={() => { setOverviewNav(false), setuser(true), setsystem(false), settask(false), setsetting(false) }}>Use Management</li>
              <li onClick={() => { setOverviewNav(false), setuser(false), setsystem(true), settask(false), setsetting(false) }}>System Healthe</li>
              <li onClick={() => { setOverviewNav(false), setuser(false), setsystem(false), settask(true), setsetting(false) }}>Task Management</li>
              <li onClick={() => { setOverviewNav(false), setuser(false), setsystem(false), settask(false), setsetting(true) }}>Settings</li>
            </div>

            {
              OverviewNav && <div className={style.overnavdivr}>


                <div className={style.rajveer}>
                  <div className={style.rajveer1}>


                    <div className={style.analyticsdiv}>
                      <div className={style.div4main}>
                        <div className={style.div4item1}>
                          <div className={style.total1}>
                            <li className={style.t1}>Total Students</li>
                            <div className={style.num}>
                              <li className={style.n1}>+12.5%</li>
                              <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                              </svg></li></div>
                            <li className={style.per1}>vs last quarter</li>
                          </div>

                          <div className={style.total2}>
                            <li className={style.t2}>Revenue This Month</li>
                            <div className={style.num}>
                              <li className={style.n2}>$162K</li>
                              <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                              </svg></li></div>
                            <li className={style.per2}>+4.5% this month</li>
                          </div>

                          <div className={style.total3}>
                            <li className={style.t3}>Course Completion</li>
                            <div className={style.num}>
                              <li className={style.n3}>89%</li>
                              <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                              </svg></li></div>
                            <li className={style.per3}>Above target</li>
                          </div>

                          <div className={style.total4}>
                            <li className={style.t4}>Avg Class Hours</li>
                            <div className={style.num}>
                              <li className={style.n4}>28.5</li>
                              <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-file-earmark-ruled" viewBox="0 0 16 16">
                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h7v1a1 1 0 0 1-1 1zm7-3H6v-2h7z" />
                              </svg></li></div>
                            <li className={style.per4}>per week</li>
                          </div></div> </div></div>



                  </div>    </div> <br /><br />
                <div className={style.rajveerdiv2}>
                  <div className={style.recent}>
                    <li className={style.rec}>Recent Activities</li>
                    <li className={style.lat}>Latest system activities and changes</li><br />

                    <div className={style.newstudent}>
                      <li className={style.newen}>New student enrolled</li>
                      <li className={style.en}>enrollment</li>
                    </div>
                    <li className={style.john}>John Doe • 2 hours ago</li><br /><br />
                    <div className={style.newstudent}>
                      <li className={style.newen}>Faculty salary processed</li>
                      <li className={style.en}>payment</li>
                    </div>
                    <li className={style.john}>Dr. Smith • 4 hours ago</li><br /><br />
                    <div className={style.newstudent}>
                      <li className={style.newen}>Course schedule updated</li>
                      <li className={style.en}>system</li>
                    </div>
                    <li className={style.john}>JAdmin • 6 hours ago</li><br /><br />
                    <div className={style.newstudent}>
                      <li className={style.newen}>Fee payment received</li>
                      <li className={style.en}>payment</li>
                    </div>
                    <li className={style.john}>Sarah Wilson • 8 hours ago</li><br /><br />

                  </div><br /><br />

                  <div className={style.upcoming}>
                    <li className={style.rec}>Upcoming Tasks</li>
                    <li className={style.lat}>Scheduled tasks and deadlines</li><br />

                    <div className={style.newstudent}>
                      <li className={style.newen}>Monthly fee collection</li>
                      <li className={style.en1} >high</li>
                    </div>
                    <li className={style.john} >Due: 2024-07-05</li>
                    <li className={style.ass}>Assignee: Finance Team</li><br />
                    <div className={style.newstudent}>
                      <li className={style.newen}>Faculty performance review</li>
                      <li className={style.en1}>medium</li>
                    </div>
                    <li className={style.john}>Due: 2024-07-10</li>
                    <li className={style.ass} >Assignee: HR Manager</li><br />
                    <div className={style.newstudent} >
                      <li className={style.newen}>System backup verification</li>
                      <li className={style.en1}>high</li>
                    </div>
                    <li className={style.john}  >Due: 2024-07-03</li>+
                    <li className={style.ass}>Assignee: IT Team</li><br />
                    <div className={style.newstudent} >
                      <li  className={style.newen}>Course catalog update</li>
                      <li className={style.en1}>low</li>
                    </div>
                    <li className={style.john}>Due: 2024-07-15</li>
                    <li className={style.ass}>Assignee: Academic Team</li><br /><br />


                  </div>
                </div> </div>}
            {
              user && <div className={style.userdiv}>
                <div className={style.userRolediv}>
                  <li className={style.roless}>User Roles & Permissions</li>
                  <li className={style.manaa}>Manage user access and permissions</li>
                  <div className={style.userRole}>
                    <div className={style.user1}>
                      <div className={style.add}> <li className={style.admin}>Administrator</li><li className={style.u3}>3 users</li> </div>
                      <li className={style.manaaa}>Full Access</li>
                      <button className={style.viewbtn}>View Users</button> <button className={style.editper}>Edit Permissions</button>
                    </div>
                    <div className={style.user2}>
                      <div className={style.add}> <li className={style.admin}>Faculty</li><li className={style.u3}>89 users</li> </div>
                      <li className={style.manaaa}>Teaching Access</li>
                      <button className={style.viewbtn}>View Users</button> <button className={style.editper}>Edit Permissions</button>
                    </div>
                    <div className={style.user3}>
                      <div className={style.add}> <li className={style.admin}>Manager</li><li className={style.u3}>8 users</li> </div>
                      <li className={style.manaaa}>Management Access</li>
                      <button className={style.viewbtn}>View Users</button> <button className={style.editper}>Edit Permissions</button>
                    </div>
                    <div className={style.user4}>
                      <div className={style.add}> <li className={style.admin}>Student</li><li className={style.u3}>99 users</li> </div>
                      <li className={style.manaaa}>Student Access</li>
                      <button className={style.viewbtn}>View Users</button> <button className={style.editper}>Edit Permissions</button>
                    </div> 
                  </div>
                </div>
              </div>
            }
            {
              system && <div className={style.systemdiv}>
                <div className={style.systemmaindiv}>
                  <li className={style.roless}>System Health Monitor</li>
                  <li className={style.manaa}>Real-time system status and performance</li><br /><br />
                  <div className={style.database}>  <li className={style.dddd}>Database</li>  <li className={style.heal}>healthy</li> </div>
                  <li className={style.manaa}>Uptime: 99.9%</li> <br /><br />
                  <div className={style.database}>  <li className={style.dddd}>API Server</li>  <li className={style.heal}>healthy</li> </div>
                  <li className={style.manaa}>Uptime: 99.8%</li> <br /><br />
                  <div className={style.database}>  <li className={style.dddd}>File Storage</li>  <li className={style.heal}>warning</li> </div>
                  <li className={style.manaa}>Uptime: 98.5%</li> <br /><br />
                  <div className={style.database}>  <li className={style.dddd}>Email Service</li>  <li className={style.heal}>healthy</li> </div>
                  <li className={style.manaa}>Uptime: 99.7%</li> <br /><br />
                </div>

              </div>
            }
            {
              task && <div className={style.taskdiv}>
                <div className={style.systemmaindiv}>
                  <li className={style.roless}>Task Management</li>
                  <li className={style.manaaa}>Assign and track institutional taskse</li><br /><br />
                  <div className={style.tasktillediv}>
                    <input className={style.Tasktitle} type="text" placeholder='Task title.............' /> <input className={style.assignee} type="text" placeholder='Assignee.........' /> <button className={style.Addt}>Add Task</button>
                  </div> <br /><br />
                  <div className={style.database}>  <li  className={style.dddd}>Monthly fee collection</li>  <li  className={style.heal}>high</li> </div>
                  <li className={style.manaaa}>Due: 2024-07-05 • Finance Team</li> <br /><br />
                  <div className={style.database}>  <li  className={style.dddd}>Faculty performance review</li>  <li  className={style.heal}>Medium</li> </div>
                  <li className={style.manaaa}>Due: 2024-07-10 • HR Manager</li> <br /><br />
                  <div cclassName={style.database}>  <li  className={style.dddd}>System backup verification</li>  <li  className={style.heal}>high</li> </div>
                  <li className={style.manaaa}>Due: 2024-07-03 • IT Team</li> <br /><br />
                  <div className={style.database}>  <li className={style.dddd}>Course catalog update</li>  <li className={style.heal}>low</li> </div>
                  <li className={style.manaaa}>Due: 2024-07-15 • Academic Team</li> <br /><br />
                </div>

              </div>
            }
            {
              setting && <div className={style.settingdiv}>
                <div className={style.settingmaindiv}>
                  <li className={style.con}>System Configuration</li>
                  <li className={style.con1}>Configure system settings and preferences</li><br /><br />
                  <div className={style.onoff}>
                    <li className={style.emn}>Email Notifications</li> <button>On Off</button> </div>
                  <li className={style.manaaa}>Send automated email notifications</li> <br />
                  <div className={style.onoff}>
                    <li className={style.emn}>Automatic Backup</li> <button>On Off</button> </div>
                  <li className={style.manaaa}>Daily automated system backups</li><br />
                  <div className={style.onoff}>
                    <li className={style.emn}>Maintenance Mode</li> <button>On Off</button> </div>
                  <li className={style.manaaa}>Enable system maintenance mode</li><br />

                  <hr className={style.hrrr} /> <br />
                  <button className={style.emailsettingss}> Email settings</button> <button className={style.emailsettingss}>schedule config</button> <button className={style.emailsettingss}>Securtiy Settings</button>
                  <br /><br />




                </div>
              </div>
            }


          </div>}
        </div>

      </div>

      {Reports && <div className={style.repots}>
        <div className={style.reportdiv}>
          <div className={style.gen}>
            <li className={style.rr}>Reports & Analytics</li>
            <button>Generate Custom Report</button>
          </div>
          <li className={style.cc}>Comprehensive Erporting and data analysis</li>
          {/* ..................................... */}
          <div className={style.div4item}>

            <div className={style.total}>
              <li className={style.t}>Total Students</li>
              <div className={style.num}>
                <li className={style.n}>1,247</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                </svg></li></div>
              <li className={style.per}>+12%</li>
            </div>


            <div className={style.total}>
              <li className={style.t}>Revenue This Month</li>
              <div className={style.num}>
                <li className={style.n}>$162K</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                </svg></li></div>
              <li className={style.per}>+4.5%</li>
            </div>

            <div className={style.total}>
              <li className={style.t}>Course Completion</li>
              <div className={style.num}>
                <li className={style.n}>89%</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                </svg></li></div>
              <li className={style.per}>+2.1%</li>
            </div>

            <div className={style.total}>
              <li className={style.t}>Faculty Efficiency</li>
              <div className={style.num}>
                <li className={style.n}>94%</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-file-earmark-ruled" viewBox="0 0 16 16">
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h7v1a1 1 0 0 1-1 1zm7-3H6v-2h7z" />
                </svg></li></div>
              <li className={style.per}>+1.8%</li>
            </div> </div> <br /> <br />
          {/* ............................ */}
          <div className={style.filterdiv}>
            <h2 className={style.fill}>Report Filters</h2>
            <div className={style.div3filter}>
              <input type="text" placeholder='Search Reports..........' />
              <select className={style.sub}>
                <option>All Departments</option>
                <option>Computer Science</option>
                <option>Mathematics</option>
                <option>Physics</option>
                <option>Chemistry</option>
              </select>
              <select className={style.sub}>
                <option>Weekly</option>
                <option>Monthy</option>
                <option>Quertely</option>
                <option>Yearly</option>
              </select>
            </div>   </div> <br /><br />

          <div className={style.Availablediv}>
            <li className={style.avlii}>Available Reports</li>
            <li className={style.dd}>Download or generate detailed reports</li> <br /><br />

            <div className={style.filediv}>
              <div className={style.ff}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-file-earmark-ruled" viewBox="0 0 16 16">
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h7v1a1 1 0 0 1-1 1zm7-3H6v-2h7z" />
                </svg>
                <div className={style.size}>
                  <li>Student Enrollment Report</li>
                  <li>Size: 2.4 MB • Generated: 2024-07-01</li>
                </div>
                <div className={style.btn3}>
                  <button>enrollment</button> <button>Monthly</button> <button className={style.down}>Download</button>
                </div></div></div> <br /> <br />

            <div className={style.filediv}>
              <div className={style.ff}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-file-earmark-ruled" viewBox="0 0 16 16">
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h7v1a1 1 0 0 1-1 1zm7-3H6v-2h7z" />
                </svg>
                <div className={style.size}>
                  <li>Faculty Performance Analysis</li>
                  <li>Size: 1.8 MB • Generated: 2024-06-30</li>
                </div>
                <div className={style.btn3}>
                  <button>Performance</button> <button>quarterly</button> <button className={style.down}>Download</button>
                </div></div></div> <br /><br />

            <div className={style.filediv}>
              <div className={style.ff}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-file-earmark-ruled" viewBox="0 0 16 16">
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h7v1a1 1 0 0 1-1 1zm7-3H6v-2h7z" />
                </svg>
                <div className={style.size}>
                  <li>Financial Summary</li>
                  <li>Size: 3.2 MB • Generated: 2024-07-01</li>
                </div>
                <div className={style.btn3}>
                  <button>financial</button> <button>Weekly</button> <button className={style.down}>Download</button>
                </div></div></div> <br /><br />

            <div className={style.filediv}>
              <div className={style.ff}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-file-earmark-ruled" viewBox="0 0 16 16">
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h7v1a1 1 0 0 1-1 1zm7-3H6v-2h7z" />
                </svg>
                <div className={style.size}>
                  <li>Course Completion Rates</li>
                  <li>Size: 1.5 MB • Generated: 2024-06-15</li>
                </div>
                <div className={style.btn3}>
                  <button>academic</button> <button>semester</button> <button className={style.down}>Download</button>
                </div></div></div> <br /><br />

            <div className={style.filediv}>
              <div className={style.ff}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-file-earmark-ruled" viewBox="0 0 16 16">
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h7v1a1 1 0 0 1-1 1zm7-3H6v-2h7z" />
                </svg>
                <div className={style.size}>
                  <li>Fee Collection Status</li>
                  <li>Size: 0.9 MB • Generated: 2024-07-01</li>
                </div>
                <div className={style.btn3}>
                  <button>financial</button> <button>Weekly</button> <button className={style.down}>Download</button>
                </div></div></div> <br /><br /></div><br />


          <div className={style.overviewdivdetails}> <br />
            <li className={style.ss}>Student Performance Overview</li>
            <li className={style.grade}>Detailed attendance and grade analysis</li> <br />
            <div className={style.list1div}>
              <li>Student</li>
              <li>Course</li>
              <li>Attendance</li>
              <li>Grade</li>
              <li>Status</li>
              <li>Actions</li>
            </div><br /><hr className={style.hrr} /><br />
            <div className={style.list1div}>
              <li>John Doe</li>
              <li>Computer Science</li>
              <li>95%</li>
              <li>A</li>
              <li>excellent</li>
              <li><button>View Details</button></li>
            </div><br /><hr className={style.hrr}/><br />
            <div className={style.list1div}>
              <li>Sarah Wilson</li>
              <li>	Mathematics</li>
              <li>88%</li>
              <li>A+</li>
              <li>good</li>
              <li><button>View Details</button></li>
            </div><br /><hr className={style.hrr}/><br />
            <div className={style.list1div}>
              <li>Mike Johnson</li>
              <li>	Physics</li>
              <li id={style.laalu}>92%</li>
              <li>B+</li>
              <li>excellent</li>
              <li><button>View Details</button></li>
            </div><br /><hr className={style.hrr} /><br />
            <div className={style.list1div}>
              <li>Emily Brown</li>
              <li>	Chemistry</li>
              <li>85%</li>
              <li>B</li>
              <li>good</li>
              <li><button>View Details</button></li>
            </div><br /><hr className={style.hrr} /><br />
            <div className={style.list1div}>
              <li>David Lee</li>
              <li>Computer Science</li>
              <li>78%</li>
              <li>C+</li>
              <li>average</li>
              <li><button>View Details</button></li>
            </div><br /></div>

        </div>  </div>}


    </>
  )
}

export default DashBoard