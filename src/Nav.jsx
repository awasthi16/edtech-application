import React from 'react'
import { Link } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
    return (
        <div>

            <div className="nav">
                <img src="/src/assets/Screenshot 2025-08-25 102849.png" alt="" />
                <div className="search">
                    <input type="text" placeholder='Search Course' />
                    <div className="s">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </div>
                </div>
                <div className="link">
                    <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                    </svg></Link>

                    <Link to="/AllCourses">ALL COURSES</Link>
                    <Link to="/Service">SERVICE</Link>
                    <Link to="/Traning">TRANING</Link>
                    <Link to="/About">ABOUT</Link>
                    <Link to="/Contact">CONTACT</Link>
                    <div className="logi">
                        <Link to="/Login">LOGIN</Link>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Nav
