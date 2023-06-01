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


import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import ContactUs from './Pages/Contact/ContactUs';
import AboutUs from './Pages/About/AboutUs';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import Gallery from './Pages/UserDashboard/Gallery';
import Math from './Pages/UserDashboard/Department/Math';
import English from './Pages/UserDashboard/Department/English';
import Science from './Pages/UserDashboard/Department/Science';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import TeacherDashboard from './Pages/TeacherDashboard/Teacherdashboard';
import AddTeacher from './Pages/AdminDashboard/AddTeacher';
import AllUsers from './Pages/AdminDashboard/AllUsers/AllUsers';
const Apps = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/login", element: <Login /> },
    { path: "/dashboard", element: <UserDashboard /> },
    { path: "/adminDashboard", element: <AdminDashboard /> },
    { path: "/teacherDashboard", element: <TeacherDashboard /> },
    { path: "/register", element: <Register /> },
    { path: "/gallery", element: <Gallery /> },
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
      <Apps />
    </Router>
    
  );
}

export default App;
