import './App.css';
import React from 'react';
import Home from './Pages/Home/Home';
import { Box } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import ContactUs from './Pages/Contact/ContactUs';
import AboutUs from './Pages/About/AboutUs';
const Apps = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);
  return routes;
};

function App() {
  return (
    <Router>
      <Apps />
    </Router>
    
  );
}

export default App;
