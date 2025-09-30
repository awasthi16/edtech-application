import React from 'react'
import "./Reminder.css"

const Reminder = () => {
  return (
    <>

    <div className="reminderbox">
        <div className="reminderbox1">

          <ul>
            <li> <h2>Student Reminders</h2></li>
            <li>    <p>Important notifications and deadlines for students</p></li>
          </ul>


        </div>
        <div className="reminderbox2">

          <div className="reminderbox2a">
            <div className="reminderbox2a1">
              <div className="reminderbox2a1a">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4B5563" class="bi bi-bell" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                </svg>
              </div>
              <div className="reminderbox2a1b">

                <ul>
                  <li><h2>Fee Payment Due</h2></li>
                  <li><p>Semester fees due in 5 days</p></li>
                  <li><p>Due: 2024-07-06</p></li>
                </ul>

              </div>
            </div>
            <div className="reminderbox2a2">
              <div className="reminderbox2a2a">

                <button id="reminderEdit">Edit</button>
                <button id="reminderSend">Send</button>

              </div>
            </div>
          </div>

        </div>
        <div className="reminderbox3">






          <div className="reminderbox3a">
            <div className="reminderbox3a1">
              <div className="reminderbox3a1a">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4B5563" class="bi bi-bell" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                </svg>
              </div>
              <div className="reminderbox3a1b">

                <ul>
                  <li><h2>Assignment Submission</h2></li>
                  <li><p>Math assignment due tomorrow</p></li>
                  <li><p>Due: 2024-07-02</p></li>
                </ul>

              </div>
            </div>
            <div className="reminderbox3a2">
              <div className="reminderbox3a2a">

                <button id="reminderEdit">Edit</button>
                <button id="reminderSend">Send</button>

              </div>
            </div>
          </div>



        </div>
        <div className="reminderbox4">






           <div className="reminderbox4a">
            <div className="reminderbox4a1">
              <div className="reminderbox4a1a">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4B5563" class="bi bi-bell" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                </svg>
              </div>
              <div className="reminderbox4a1b">

                <ul>
                  <li><h2>Course Registration</h2></li>
                  <li><p>Register for next semester courses</p></li>
                  <li><p>Due: 2024-07-10</p></li>
                </ul>

              </div>
            </div>
            <div className="reminderbox4a2">
              <div className="reminderbox4a2a">

                <button id="reminderEdit">Edit</button>
                <button id="reminderSend">Send</button>

              </div>
            </div>
          </div>

        </div>
        <div className="reminderbox5">



            <div className="reminderbox5a">
            <div className="reminderbox5a1">
              <div className="reminderbox5a1a">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4B5563" class="bi bi-bell" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                </svg>
              </div>
              <div className="reminderbox5a1b">

                <ul>
                  <li><h2>Library Book Return</h2></li>
                  <li><p>Return borrowed books by Friday</p></li>
                  <li><p>Due: 2024-07-05</p></li>
                </ul>

              </div>
            </div>
            <div className="reminderbox5a2">
              <div className="reminderbox5a2a">

                <button id="reminderEdit">Edit</button>
                <button id="reminderSend">Send</button>

              </div>
            </div>
          </div>

        </div>
      </div>
    
    </>
  )
}

export default Reminder