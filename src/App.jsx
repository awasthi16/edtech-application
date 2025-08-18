import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Traning from "./Traning"
import Login from "./Login"
import AllCourses from "./AllCourses"

function App(){
return(<>
<div className="component">
<BrowserRouter>
<Nav/>
<Routes>
<Route path="/Home" element={<Home/>}/>
<Route path="/Traning" element={<Traning/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/AllCourses" element={<AllCourses/>}/>
<Route path="/Service" element={<Service/>}/>
<Route path="/About" element={<About/>}/>


</Routes>
</BrowserRouter> 




</div>
</>)


}

export default App