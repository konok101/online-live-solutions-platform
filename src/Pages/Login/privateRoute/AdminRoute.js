import { CircularProgress } from '@mui/material';
import React, { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AdminRoute = ({ children, ...rest }) => {


    const {user,admin, loading} = useContext(AuthContext);
    const location = useLocation();
    
    
    if(loading){
        return <CircularProgress/>
    }

    if(user.email && admin ){
        return children;
    }
    //  return <Navigate to="/login" state={{from: location}} replace></Navigate>;

    // const { user, isLoading } = useAuth();
    // if (isLoading) { return <CircularProgress /> }

};
export default AdminRoute;












//     const { user, admin, loading } = useContext(AuthContext);
//     if (loading) { return <CircularProgress /> }

//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 user?.email && admin ? (
//                     children
//                 ) : (
//                     <Navigate
//                         to={{
//                             pathname: "/",
//                             state: { from: location }
//                         }}
//                     />
//                 )
//             }
//         />

//     );
// };
// export default AdminRoute;