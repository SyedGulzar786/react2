import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/about";
import Profile from "../pages/profile";
import Login from "../pages/login";
import Layouti from "../components/ant_layout";
import AppLayout from "../components/appLayout";
export default function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<AppLayout><Home/></AppLayout>}/>
            <Route path="/profile" element={<AppLayout><Profile/></AppLayout>}/>
            <Route path="/about" element={<AppLayout><About/></AppLayout>}/>
            <Route path="/" element={<AppLayout><Login/></AppLayout>}/>
        </Routes>
        </BrowserRouter>
    )
}