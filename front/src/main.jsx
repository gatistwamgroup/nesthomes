import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-photo-view/dist/react-photo-view.css";
import { HelmetProvider } from "react-helmet-async";

AOS.init({
  duration:1000,
  once:true
});

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);