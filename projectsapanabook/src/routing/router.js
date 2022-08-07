import React from "react";
import { Router as BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";



const Routing = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;