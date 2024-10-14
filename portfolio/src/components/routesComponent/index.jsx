import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import AboutPages from "../../pages/aboutPages";
import TestComponents from "../../pages/test";
import NavBarComponent from "../navBar";

const RouterComponent = () => {
    return(
        <Routes>
            <Route path="/aboutPages" element={<AboutPages/>}/>
            <Route element={<NavBarComponent/>}>
                <Route index element={<Home/>}/>
                <Route path="/testComponents" element={<TestComponents/>}/>
            </Route>
        </Routes>
    )
}

export default RouterComponent