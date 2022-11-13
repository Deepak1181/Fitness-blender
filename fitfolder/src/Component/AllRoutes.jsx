
 import {Routes,Route} from "react-router-dom"
import Home from "./Home";
import Login from "./Login";
import Programs from "./Programs";
 
 
 function AllRoutes() {
   return (
     <div>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/programs" element={<Programs/>}/>
       <Route path="/login" element={<Login/>}/>
     </Routes>
     </div>
   );
 }
 
 export default AllRoutes;
 