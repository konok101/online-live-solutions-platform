import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Home from './Pages/Home/Home';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
// import { Route, Routes } from 'react-router';

import {
  Router,
  Routes,
  BrowserRouter,
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
import AdminRoute from './Pages/Login/privateRoute/AdminRoute';
import CourseFooter from './Pages/Course/CouseWithFooter';
import StudentReview from './Pages/AdminDashboard/StudentReview/ContactList';
import RegStudent from './Pages/AdminDashboard/RegStudent/RegStudent';
import StudentRegisted from './Pages/TeacherDashboard/StudentRegisted/StudentRegisted';
import AddCourse from './Pages/Course/AddCouse';
import AddCourseByTeacher from './Pages/TeacherDashboard/AddCoursebyTeacher';
import MyEnrollment from './Pages/UserDashboard/MyEnrollment/MyEnrollment';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import OurTeachers from './Pages/Home/OurTeachers/OurTeachers.js';
import ApplyForTeacher from './Pages/Home/ApplyForTeacher/ApplyForTeacher';
import Reviews from './Pages/Home/Reviews/Reviews';
import LearnMore from './Pages/Home/LearnMore/LearnMore';
import AddReview from './Pages/Home/Reviews/AddReview';
import LiveSolution from './Pages/Home/LiveSolution/LiveSolution';
import ProblemSolving from './Pages/Home/ProblemSolving/ProblemSolving';
import FullDaySupport from './Pages/Home/FullDaySupport/FullDaySupport';
import Gallery from './Pages/UserDashboard/Gallery';


function Appw() {

  let routes = useRoutes([

    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/review", element: <Review /> },
    { path: "/contactQuaries", element: <StudentReview /> },
    { path: "/course", element: <PrivateRoute><CourseFooter />  </PrivateRoute> },
    { path: "/dashboard", element: <PrivateRoute><Dashboard />  </PrivateRoute> },
    { path: "/login", element: <Login /> },
    {
      path: "/teacherDashboard", element: <PrivateRoute>  <TeacherDashboard />
      </PrivateRoute>
    },

    {
      path: "/adminDashboard",
      element: <AdminRoute><AdminDashboard /></AdminRoute>
    },
    { path: "/register", element: <Register /> },
    { path: "/math", element: <Math /> },
    { path: "/addCourse", element: <AddCourse /> },
    { path: "/addCourseByTeacher", element: <AddCourseByTeacher /> },
    { path: "/english", element: <English /> },
    { path: "/science", element: <Science /> },
    { path: "/addTeacher", element: <AddTeacher /> },
    { path: "/allUsers", element: <AllUsers /> },
    { path: "/regStudent", element: <RegStudent /> },
    { path: "/regStudentTeacher", element: <StudentRegisted /> },
    { path: "/myEnrollment", element: <MyEnrollment /> },
    { path: "/ourTeachers", element: <OurTeachers /> },
    { path: "/applyForTeacher", element: <ApplyForTeacher /> },
    { path: "/myReview/:courseSerial", element: <Reviews /> },
    { path: "/learnMore", element: <LearnMore /> },
    { path: "/ourReviews", element: <AddReview /> },
    { path: "/liveSolution", element: <LiveSolution /> },
    { path: "/problemSolving", element: <ProblemSolving /> },
    { path: "/24hSupport", element: <FullDaySupport /> },
    { path: "/gallery", element: <Gallery /> },
  ]);
  return routes;
};

function App() {
  
  return (


    <BrowserRouter>
      <AuthProvider>
        <Appw />
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
