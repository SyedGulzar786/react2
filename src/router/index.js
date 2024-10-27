import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/about";
import Profile from "../pages/profile";
export default function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        </BrowserRouter>
    )
}