import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div>

            <div className="nav">

                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/AllCourses">AllCourses</Link>
                <Link to="/Service">Service</Link>
                 <Link to="/Traning">Traning</Link>
                   <Link to="/Login">Login</Link>
                   <Link to="/Contact">Contact</Link>



            </div>
        </div>
    )
}

export default Nav
