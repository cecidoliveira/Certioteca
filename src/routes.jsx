import React from "react";
import {createBrowserRouter } from "react-router-dom";

import Cert from "./Pages/Cert";
import Add from "./Pages/Add";


const routes = createBrowserRouter([
    {
        path: "/", 
        element: <Cert/>
    },{
        path: "/add",
        element: <Add/>
    }]);

export default routes
