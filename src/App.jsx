import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Traning from "./Traning"
import Login from "./Login"
import AllCourses from "./AllCourses"
import Timetable from "./Timetable"
import Contact from "./Contact"
import Footer from "./Footer"
import InterviewQuestion from "./InterviewQuestion"
import Blog from "./Blog"
import PlaceMent from "./PlaceMent"
import Job from "./Job"
import Services1 from "./Services1"
import Services2 from "./Services2"
import Services3 from "./Services3"
import Services4 from "./Services4"
import Services5 from "./Services5"
import Services6 from "./Services6"
import Services7 from "./Services7"
import Fullstack from "./Fullstack"

function App(){
return(<>
<div className="component">
<BrowserRouter>
<Nav/>
<Routes>
 <Route path="/" element={<Home/>}/>
<Route path="/Traning" element={<Traning/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/AllCourses" element={<AllCourses/>}/>
<Route path="/Service" element={<Service/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Contact" element={<Contact/>}/> 

{/* *************** Traning ***************** */}
<Route path="/Traning" element={<Traning/>}></Route>
<Route path="/InterviewQuestion" element={<InterviewQuestion/>}></Route>
<Route path="/Blog" element={<Blog/>}></Route>
<Route path="/Placement" element={<PlaceMent/>}></Route>
<Route path="/Job" element={<Job/>}></Route>

{/* #################  Service  ################# */}
<Route path="/Services1" element={<Services1/>}></Route>
<Route path="/Services2" element={<Services2/>}></Route>
<Route path="/Services3" element={<Services3/>}></Route>
<Route path="/Services4" element={<Services4/>}></Route>
<Route path="/Services5" element={<Services5/>}></Route>
<Route path="/Services6" element={<Services6/>}></Route>
<Route path="/Services7" element={<Services7/>}></Route>

{/*#################### ALL Couses##################*/}
</Routes>
<Footer/>
</BrowserRouter> 




</div>
</>)


}

export default App