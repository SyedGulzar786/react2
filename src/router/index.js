import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/about";
import Profile from "../pages/profile";
import Login from "../pages/login";
import Layouti from "../components/ant_layout";
import AppLayout from "../components/appLayout";
import AppNotFound from "../components/notFound";
import { useState } from "react";
export default function AppRouter(){
    const [user,setUser] = useState(true);  
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<AppLayout><Home/></AppLayout>}/>
            <Route path="/profile/:username" element={<AppLayout><Profile/></AppLayout>}/>
            <Route path="/about" element={<AppLayout><About/></AppLayout>}/>
            <Route path="/" element={user ? <Navigate to={"/profile/GULZAR"} /> : <AppLayout><Login/></AppLayout>}/>
            <Route path="*" element={<AppNotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}