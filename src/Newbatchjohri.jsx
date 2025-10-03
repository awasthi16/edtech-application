import React, { useEffect, useState } from 'react'
import "./Newbatchjohri.css"

const Newbatchjohri = () => {
    

    const [name, setname] = useState("online")
    const [batch1,setbatch1]=useState([])
    

const add112= async()=>{

    let result=await fetch("http://localhost:5600/batch1")
    result=await result.json()
    console.log(result);
    setbatch1(result)
    }
    useEffect(()=>{add112()},[])

    return (
        <>


            <div className="newbatchtrainingdiv1">

                <div className="newbatchtrainingdiv1a">
                    <h1>New Batch Timetable</h1>
                </div>
                <div className="newbatchtrainingdiv1b">
                    <p>Explore new and trending free online courses.</p>
                </div>

            </div>

            <div className="newbatchtrainingdiv2">

                <div className="newbatchtrainingdiv2box">
                    <div className="newbatchtrainingdiv2boxdiv1">

                        <ul>
                            <li> <button onClick={() => { setname("online") }} style={{ background: name == "online" ? "linear-gradient(270deg,rgb(0,90,255),rgb(0,142,255))" : "none", color: name == "online" ? "white" : "black" }} >Online Training</button></li>
                            <li> <button onClick={() => { setname("class") }} style={{ background: name == "class" ? "linear-gradient(270deg,rgb(0,90,255),rgb(0,142,255))" : "none", color: name == "class" ? "white" : "black" }}>Classroom Training</button></li>
                            <li id="newbatchtrainingsmall"> <button onClick={() => { setname("KPHB") }} style={{ background: name == "KPHB" ? "linear-gradient(270deg,rgb(0,90,255),rgb(0,142,255))" : "none", color: name == "KPHB" ? "white" : "black" }}>KPHB</button></li>
                            <li> <button onClick={() => { setname("worhshops") }} style={{ background: name == "worhshops" ? "linear-gradient(270deg,rgb(0,90,255),rgb(0,142,255))" : "none", color: name == "worhshops" ? "white" : "black" }}>Workshops</button></li>
                            <li> <button onClick={() => { setname("internship") }} style={{ background: name == "internship" ? "linear-gradient(270deg,rgb(0,90,255),rgb(0,142,255))" : "none", color: name == "internship" ? "white" : "black" }}>Internships</button></li>
                            <li> <button onClick={() => { setname("weekend") }} style={{ background: name == "weekend" ? "linear-gradient(270deg,rgb(0,90,255),rgb(0,142,255))" : "none", color: name == "weekend" ? "white" : "black" }}>Weekend Training</button></li>
                            <li id="newbatchtrainingsmall" > <button onClick={() => { setname("JNTU-H") }} style={{ background: name == "JNTU-H" ? "linear-gradient(270deg,rgb(0,90,255),rgb(0,142,255))" : "none", color: name == "JNTU-H" ? "white" : "black" }}>JNTU-H</button></li>
                        </ul>

                    </div>

                    <div className="newbatchtrainingdiv2boxdiv2">
                        <div className="newbatchtrainingdiv2boxdiv2a">
                            <div className="newbatchtrainingdiv2boxdiv2a1">
                                <p>Show entries:</p>
                            </div>
                            <div className="newbatchtrainingdiv2boxdiv2a2">
                                <select name="" id="">–
                                    <option value="">30</option>
                                    <option value="">40</option>
                                    <option value="">50</option>
                                </select>
                            </div>

                        </div>
                        <div className="newbatchtrainingdiv2boxdiv2b">
                            <input type="search" name="" id="" placeholder='Search...' />
                        </div>
                    </div>

                    <div className="newbatchtrainingdiv2boxdiv3">
                        <table border={0}>
                            <tr>
                                <th id="newbatchtraininggaplarge"> <p>s no</p></th>
                                <th id="newbatchtraininggapsmall"><p>Course Name </p></th>
                                <th id="newbatchtraininggaplarge"> <p>Faculty</p></th>
                                <th id="newbatchtraininggaplarge"> <p>Date</p></th>
                                <th id="newbatchtraininggaplarge"> <p>Time</p></th>
                                <th> <p>Meeting Link</p></th>
                            </tr>
                        </table>

                        
                       
                    </div>
                    <div className="newbatchtrainingdiv2boxdiv4">

                            {
                                name == "online" && <div className="newbatchtrainingdiv2boxdiv4a">

                                <table border={0} cellSpacing={0}>
                                  {
                                   batch1.map((item,index)=><><tr style={{backgroundColor: (index%2)==1?"lightGray":"none"}}> <td id="index">{index+1}</td><td id="coursedata">{item.CourseName}</td>  <td id="facultydata">{item.Faculty}</td>  <td id="datedata">{item.Date}</td> <td id="timedata">{item.Time}</td> <td id="meetingdata">{item.Meeting}</td></tr></>)
                                  } 
                                </table>

                                </div>
                            }
                            {
                                name == "class" && <div className="newbatchtrainingdiv2boxdiv4b">
                                   <table border={0} cellSpacing={0}>
                                  {
                                   batch1.map((item,index)=><><tr style={{backgroundColor: (index%2)==1?"lightGray":"none"}}> <td id="index">{index+1}</td><td id="coursedata">{item.CourseName}</td>  <td id="facultydata">{item.Faculty}</td>  <td id="datedata">{item.Date}</td> <td id="timedata">{item.Time}</td> <td id="meetingdata">{item.Meeting}</td></tr></>)
                                  } 
                                </table>
                                </div>
                            }
                            {
                                name == "KPHB" && <div className="newbatchtrainingdiv2boxdiv4c">
                                       <table border={0} cellSpacing={0}>
                                  {
                                   batch1.map((item,index)=><><tr style={{backgroundColor: (index%2)==1?"lightGray":"none"}}> <td id="index">{index+1}</td><td id="coursedata">{item.CourseName}</td>  <td id="facultydata">{item.Faculty}</td>  <td id="datedata">{item.Date}</td> <td id="timedata">{item.Time}</td> <td id="meetingdata">{item.Meeting}</td></tr></>)
                                  } 
                                </table>
                                </div>
                            }
                            {
                                name == "worhshops" && <div className="newbatchtrainingdiv2boxdiv4d">
                                    <table border={0} cellSpacing={0}>
                                  {
                                   batch1.map((item,index)=><><tr style={{backgroundColor: (index%2)==1?"lightGray":"none"}}> <td id="index">{index+1}</td><td id="coursedata">{item.CourseName}</td>  <td id="facultydata">{item.Faculty}</td>  <td id="datedata">{item.Date}</td> <td id="timedata">{item.Time}</td> <td id="meetingdata">{item.Meeting}</td></tr></>)
                                  } 
                                </table>
                                </div>
                            }
                            {
                                name == "internship" && <div className="newbatchtrainingdiv2boxdiv4e">
                                       <table border={0} cellSpacing={0}>
                                  {
                                   batch1.map((item,index)=><><tr style={{backgroundColor: (index%2)==1?"lightGray":"none"}}> <td id="index">{index+1}</td><td id="coursedata">{item.CourseName}</td>  <td id="facultydata">{item.Faculty}</td>  <td id="datedata">{item.Date}</td> <td id="timedata">{item.Time}</td> <td id="meetingdata">{item.Meeting}</td></tr></>)
                                  } 
                                </table>
                                </div>
                            }
                            {
                                name == "weekend" && <div className="newbatchtrainingdiv2boxdiv4f">
                                       <table border={0} cellSpacing={0}>
                                  {
                                   batch1.map((item,index)=><><tr style={{backgroundColor: (index%2)==1?"lightGray":"none"}}> <td id="index">{index+1}</td><td id="coursedata">{item.CourseName}</td>  <td id="facultydata">{item.Faculty}</td>  <td id="datedata">{item.Date}</td> <td id="timedata">{item.Time}</td> <td id="meetingdata">{item.Meeting}</td></tr></>)
                                  } 
                                </table>
                                </div>
                            }
                            {
                                name == "JNTU-H" && <div className="newbatchtrainingdiv2boxdiv4g">
                                       <table border={0} cellSpacing={0}>
                                  {
                                   batch1.map((item,index)=><><tr style={{backgroundColor: (index%2)==1?"lightGray":"none"}}> <td id="index">{index+1}</td><td id="coursedata">{item.CourseName}</td>  <td id="facultydata">{item.Faculty}</td>  <td id="datedata">{item.Date}</td> <td id="timedata">{item.Time}</td> <td id="meetingdata">{item.Meeting}</td></tr></>)
                                  } 
                                </table>
                                </div>
                            }

                        </div>

                         <div className="newbatchtrainingdiv2boxdiv5">

                            <div className="newbatchtrainingdiv2boxdiv5a">
                                <p>Showing 1 to 30 of 30 entries</p>
                            </div>
                            <div className="newbatchtrainingdiv2boxdiv5b">
                                <div className="newbatchtrainingdiv2boxdiv5b1">
                                    <p>Previous</p>
                                </div>
                                <div className="newbatchtrainingdiv2boxdiv5b2">
                                    <p>1</p>
                                </div>
                                <div className="newbatchtrainingdiv2boxdiv5b3">
                                    <p>Next</p>
                                </div>


                            </div>

                        </div>

                </div>

            </div>
        </>
    )
}

export default Newbatchjohri