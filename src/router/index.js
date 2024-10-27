import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/about";
import Profile from "../pages/profile";
import Login from "../pages/login";
import Layouti from "../components/ant_layout";
export default function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/profile" element={<Layouti><Profile/></Layouti>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    )
}