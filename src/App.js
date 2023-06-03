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


import Dashboard from './Pages/UserDashboard/UserDashboard';
import TeacherDashboard from './Pages/TeacherDashboard/Teacherdashboard';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import ContactUs from './Pages/Contact/ContactUs';
import AboutUs from './Pages/About/AboutUs';
import Review from './Pages/UserDashboard/Review/CarouselStudentReview';
import PrivateRoute from './Pages/Login/privateRoute/privateRoute';
import Math from './Pages/UserDashboard/Department/Math';
import English from './Pages/UserDashboard/Department/English';
import Science from './Pages/UserDashboard/Department/Science';
import AddTeacher from './Pages/AdminDashboard/AddTeacher';
import AllUsers from './Pages/AdminDashboard/AllUsers/AllUsers';

const Appw = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/review", element: <Review/> },
    { path: "/dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute>  },
    { path: "/login", element: <Login /> },
    { path: "/teacherDashboard", element: <TeacherDashboard/> },
    { path: "/adminDashboard", element: <AdminDashboard /> },
    { path: "/register", element: <Register /> },
    { path: "/math", element: <Math /> },
    { path: "/english", element: <English /> },
    { path: "/science", element: <Science /> },
    { path: "/addTeacher", element: <AddTeacher /> },
    { path: "/allUsers", element: <AllUsers /> },
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
