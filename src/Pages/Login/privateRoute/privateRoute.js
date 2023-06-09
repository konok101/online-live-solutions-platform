// import { CircularProgress } from '@mui/material';
// import React, { useContext } from 'react';
// import { Route } from 'react-router-dom';
// import { Navigate,  useLocation, useNavigate } from 'react-router-dom';
// import {AuthContext} from '../../../contexts/AuthProvider/AuthProvider';

// const PrivateRoute = ({ children}) => {

//     const {user,loading} = useContext(AuthContext);
//     const location = useNavigate();
//     if(loading){
//         return <CircularProgress/>
//     }

//     if(user){
//         return children;
//     }
    // return <Navigate to="/login" state={{from: location}} replace></Navigate>;
// return(
//     <Route
//     {...rest}
//     render={({ location }) =>
//         user.email ? (
//             children
//         ) : (
//             <Navigate
//                 to={{
//                     pathname: "/login",
//                     state: { from: location }
//                 }}
//             />
//         )
//     }
// />

    // const { user, isLoading } = useAuth();
    // if (isLoading) { return <CircularProgress /> }
// );
// };
// export default PrivateRoute;


// Amr kora code
// import { CircularProgress } from '@mui/material';
// import React, { useContext } from 'react';
// import { Navigate,  useLocation } from 'react-router-dom';
// import {AuthContext} from '../../../contexts/AuthProvider/AuthProvider';
// const PrivateRoute = ({ children }) => {
//     const {user,loading} = useContext(AuthContext);
//     const location = useLocation(); 
//     if(loading){
//         return <CircularProgress/>
//     }
//     if(user){
//         return children;
//     }
//     return <Navigate to="/login" state={{from: location}} replace></Navigate>;
//     // const { user, isLoading } = useAuth();
//     // if (isLoading) { return <CircularProgress /> }
// };
// export default PrivateRoute;



import { CircularProgress } from '@mui/material';
import React, { useContext } from 'react';
import { Navigate, useLocation,  } from 'react-router';
import {AuthContext} from '../../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    
    
    if(loading){
        return <CircularProgress/>
    }

    if(!user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;

    // const { user, isLoading } = useAuth();
    // if (isLoading) { return <CircularProgress /> }

};
export default PrivateRoute;

// import { CircularProgress } from '@mui/material';
// import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

// const PrivateRoute = ({ children, ...rest }) => {

//     const { user, isLoading } = useAuth();
//     if (isLoading) { return <CircularProgress /> }

//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 user.email ? (
//                     children
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: "/login",
//                             state: { from: location }
//                         }}
//                     />
//                 )
//             }
//         />

//     );
// };
// export default PrivateRoute;