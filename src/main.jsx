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


const container = document.getElementById("root");

const tree = (

    <BrowserRouter>

        <HelmetProvider>

            <App />

        </HelmetProvider>

    </BrowserRouter>

);


// Prerendered pages ship with server-rendered markup in #root, so they are
// hydrated. In `vite dev` (and any unexpected empty shell) the container is
// empty, so React mounts normally instead.
if (container.firstElementChild) {

    ReactDOM.hydrateRoot(container, tree);

} else {

    ReactDOM.createRoot(container).render(tree);

}
