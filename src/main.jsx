import React from "react";
import ReactDOM from "react-dom/client";

import {
    BrowserRouter
} from "react-router-dom";

import {
    HelmetProvider
} from "react-helmet-async";

import App from "./App";

import { initializeMeasurement } from "./utils/analytics";

import "./index.css";


initializeMeasurement();


ReactDOM
.createRoot(document.getElementById("root"))
.render(

    <BrowserRouter>

        <HelmetProvider>

            <App />

        </HelmetProvider>

    </BrowserRouter>

);