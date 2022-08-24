import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { App } from "./App";

// create the root element to render
const root = ReactDOM.createRoot(document.getElementById("root"));

// render the react app within the root element
root.render(<App />);
