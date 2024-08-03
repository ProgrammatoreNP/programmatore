import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './index.css'
import Login from './Components/Login.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx"
import Documentation from "./Pages/Documentation.jsx"
import NotFound from "./Pages/NotFound.jsx"
import VideoPageHTML from './Pages/VideoPageHTML.jsx'
import FreeCourses from './Pages/FreeCourses.jsx'
import CardDetails from './CardDetails.jsx'
import { Auth0Provider } from "@auth0/auth0-react";
import reactIcons from "https://cdn.jsdelivr.net/npm/react-icons@5.2.1/+esm";
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx'
import VideoPageCss from "./Courses/VideoPageCss.jsx"



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-kwt0z0w66tgo6vih.us.auth0.com"
      clientId="Av4BobMehIutIan0u2qovYvFqwmsRSrE"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/free-courses" element={<FreeCourses />} />
          <Route path="/free-courses/html" element={<VideoPageHTML />} />
          <Route path="/free-courses/css" element={<VideoPageCss />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/card/:id" element={<CardDetails />} />
        </Routes>
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);
