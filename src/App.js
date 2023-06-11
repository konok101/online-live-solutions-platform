import logo from './logo.svg';
import './App.css';
import React, {Fragment}  from 'react';
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
import Course from './Pages/Course/Course';
import StudentReview from './Pages/AdminDashboard/StudentReview/StudentReview';
import RegStudent from './Pages/AdminDashboard/RegStudent/RegStudent';
import StudentRegisted from './Pages/TeacherDashboard/StudentRegisted/StudentRegisted';



function Appw() {
  
  let routes = useRoutes([
    
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/review", element: <Review/> },
    { path: "/studentReview", element: <StudentReview/> },
    { path: "/course", element: <PrivateRoute><Course />  </PrivateRoute>},
    { path: "/dashboard", element: <PrivateRoute><Dashboard />  </PrivateRoute>},
    { path: "/login", element: <Login /> },
    { path: "/teacherDashboard", element: <PrivateRoute>  <TeacherDashboard/>
    </PrivateRoute>
   },

    { path: "/adminDashboard", 
    element: <PrivateRoute><AdminDashboard /> </PrivateRoute>  },
    { path: "/register", element: <Register /> },
    { path: "/math", element: <Math /> },
    { path: "/english", element: <English /> },
    { path: "/science", element: <Science /> },
    { path: "/addTeacher", element: <AddTeacher /> },
    { path: "/allUsers", element: <AllUsers /> },
    { path: "/regStudent", element: <RegStudent /> },
    { path: "/regStudentTeacher", element: <StudentRegisted /> },
  ]);
  return routes; 
};

function App() {
  return (

    <BrowserRouter>
      <Appw />
    </BrowserRouter>
    
  );
}

export default App;


// function App() {
//     return (
//         <div>
//         <Router>
       
//           <Routes>
//           <Route path='/'  element={<Home/>} />
//             </Routes>
//             </Router>
            
          
//         </div>
//     );
// }
// export default App;













// const Appw = () => {
//   let routes = useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "/home", element: <Home /> },
//     { path: "/about", element: <AboutUs /> },
//     { path: "/contact", element: <ContactUs /> },
//     { path: "/review", element: <Review/> },
//     { path: "/dashboard", element: <PrivateRoute><Dashboard />  </PrivateRoute>},
//     { path: "/login", element: <Login /> },
//     { path: "/teacherDashboard", element: <TeacherDashboard/> },
//     { path: "/adminDashboard", 
//     element: <AdminDashboard />  },
//     { path: "/register", element: <Register /> },
//     { path: "/math", element: <Math /> },
//     { path: "/english", element: <English /> },
//     { path: "/science", element: <Science /> },
//     { path: "/addTeacher", element: <AddTeacher /> },
//     { path: "/allUsers", element: <AllUsers /> },
//   ]);
//   return routes; 
// };

// function App() {
//   return (

//     <Router>
//       <Appw />
//     </Router>
    
//   );
// }

// export default App;
