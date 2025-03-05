import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/about";
import Profile from "../pages/profile";
import Login from "../pages/login";
import Layouti from "../components/ant_layout";
import AppLayout from "../components/appLayout";
import AppNotFound from "../components/notFound";
import { useEffect, useState } from "react";
import Signup from "../pages/signup";
import { auth, onAuthStateChanged } from "../config/firebase"
export default function AppRouter(){
    const [isUser, setIsUser] = useState(false);
          
    useEffect(() => {
onAuthStateChanged(auth, (user) => {
    console.log("user-->", user)
    if(user){
        setIsUser(true)
    }
    else{
        setIsUser(false)
    }
})
    },[])
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<AppLayout><Home/></AppLayout>}/>
            {/* <Route path="/profile/:username" element={<AppLayout><Profile/></AppLayout>}/> */}
            <Route path="/profile" element={isUser ? <AppLayout><Profile/></AppLayout> : <Navigate to={"/login"} />}/>
            <Route path="/about" element={<AppLayout><About/></AppLayout>}/>
            <Route path="/login" element={isUser ? <Navigate to={"/profile"} /> : <AppLayout><Login/></AppLayout>}/>
            {/* <Route path="/" element={user ? <Navigate to={"/profile/GULZAR"} /> : <AppLayout><Signup/></AppLayout>}/> */}
            <Route path="/" element={isUser ? <Navigate to={"/profile"} /> : <AppLayout><Signup/></AppLayout>}/>
            <Route path="*" element={<AppNotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}