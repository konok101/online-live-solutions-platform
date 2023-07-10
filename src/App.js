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
import AdminDashboardReg from './Pages/AdminDashboard/AdminDashboardReg';
import AdminDashboardTeacher from './Pages/AdminDashboard/AdminDashboardTeacher';
import  AdminDashboardCourse from './Pages/AdminDashboard/AdminDashboardCourse';
import  AdminDashboardAllUser from './Pages/AdminDashboard/AdminDashboardAll';
import  HomeDashboardQuaries from './Pages/AdminDashboard/AdminDashboardQuaries';
import  TeacherDashboardRegStudent  from './Pages/TeacherDashboard/TeacherDashboardRegStudent';
import  TeacherDashboardAddCourse  from './Pages/TeacherDashboard/TeacherDashboardAddCourse';
import  AdminDashboaApplyTeacher  from './Pages/AdminDashboard/AdminDashboradApplyTeacher';

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
import StudentReview from './Pages/AdminDashboard/ContactQuaries/ContactList';
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
import VideoCallHome from './Pages/VideoCall/VideoCallHome';
import VideoRoom from './Pages/VideoCall/VideoRoom';
import TeacherRoute from './Pages/Login/privateRoute/TeacherRoute';


function Appw() {

  let routes = useRoutes([

    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/contact", element:<PrivateRoute> <ContactUs /> </PrivateRoute>},
    { path: "/review", element: <Review /> },
    { path: "/contactQuaries", element:<AdminRoute> <HomeDashboardQuaries /></AdminRoute> },
    { path: "/course", element: <PrivateRoute><CourseFooter />  </PrivateRoute> },
    { path: "/dashboard", element: <PrivateRoute><Dashboard />  </PrivateRoute> },
    { path: "/login", element: <Login /> },
    {
      path: "/teacherDashboard", element: <TeacherRoute>  <TeacherDashboard />
      </TeacherRoute>
    },

    {
      path: "/adminDashboard",
      element: <AdminRoute><AdminDashboard /></AdminRoute>
    },
    { path: "/register", element: <Register /> },
    { path: "/addCourse", element: <AdminRoute>  <AdminDashboardCourse /> </AdminRoute>},
    { path: "/addCourseByTeacher", element: <TeacherRoute><TeacherDashboardAddCourse /></TeacherRoute> },
    { path: "/addTeacher", element: <AdminRoute><AdminDashboardTeacher /></AdminRoute> },
    { path: "/allUsers", element: <AdminRoute><AdminDashboardAllUser /></AdminRoute> },
    { path: "/regStudent", element: <AdminRoute><AdminDashboardReg /></AdminRoute> },
    { path: "/applyTeacherList", element: <AdminRoute><AdminDashboaApplyTeacher /></AdminRoute> },
    { path: "/regStudentTeacher", element: <TeacherRoute><TeacherDashboardRegStudent /></TeacherRoute>  },
    { path: "/myEnrollment", element:<PrivateRoute> <MyEnrollment /> </PrivateRoute>},
    { path: "/ourTeachers", element: <OurTeachers /> },
    { path: "/applyForTeacher", element: <PrivateRoute><ApplyForTeacher /> </PrivateRoute>},
    { path: "/myReview/:courseSerial", element: <PrivateRoute><Reviews /></PrivateRoute> },
    { path: "/learnMore", element: <LearnMore /> },
    { path: "/ourReviews", element: <AddReview /> },
    { path: "/liveSolution", element: <LiveSolution /> },
    { path: "/problemSolving", element: <ProblemSolving /> },
    { path: "/24hSupport", element: <FullDaySupport /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/VideoCallHome", element:<PrivateRoute>  <VideoCallHome /> </PrivateRoute>},
    { path: "/room/:roomId", element: <PrivateRoute>  <VideoRoom /></PrivateRoute> },
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
