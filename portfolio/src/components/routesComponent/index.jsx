import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import AboutPages from "../../pages/aboutPages";
import TestComponents from "../../pages/test";

const RouterComponent = () => {
    return(
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/aboutPages" element={<AboutPages/>}/>
            <Route path="/testComponents" element={<TestComponents/>}/>
        </Routes>
    )
}

export default RouterComponent