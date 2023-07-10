import { CircularProgress } from '@mui/material';
import React, { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const TeacherRoute = ({ children, ...rest }) => {


    const {user, teacher, loading} = useContext(AuthContext);
    const location = useLocation();
    
    
    if(loading){
        return <CircularProgress/>
    }

    if(user.email && teacher ){
        return children;
    }
     return <Navigate to="/login" state={{from: location}} replace></Navigate>;

    // const { user, isLoading } = useAuth();
    // if (isLoading) { return <CircularProgress /> }

};
export default TeacherRoute;










 