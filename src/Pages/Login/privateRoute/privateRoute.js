import { CircularProgress } from '@mui/material';
import React, { useContext } from 'react';
import { Navigate,  useLocation } from 'react-router-dom';
import {AuthContext} from '../../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    
    
    if(loading){
        return <CircularProgress/>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;

    // const { user, isLoading } = useAuth();
    // if (isLoading) { return <CircularProgress /> }

};
export default PrivateRoute;