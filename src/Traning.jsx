import React, { useState } from 'react'
import "./Traning.css"
import PlaceMent from './PlaceMent'
import Job from './Job'
import Blog from './Blog'
import InterviewQuestion from './InterviewQuestion'
import DashBoard from './DashBoard'
import LogBatch from './LogBatch'
import Newbatchjohri from './Newbatchjohri'
// import Admine from './Admine'
// import DashBoard from './DashBoard'

const Traning = ({ todo }) => {
  

  // ..........................................todo list..................................................




  return (
    <>
      <Newbatchjohri/>
      <InterviewQuestion />
      <Blog />
      <PlaceMent />
      <Job />
    </>

  )
}

export default Traning