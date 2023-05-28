import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Pages/Home/Home';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
// import { Route, Routes } from 'react-router';

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

const Appw = () => {
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
      <Appw />
    </Router>
    
  );
}

export default App;
