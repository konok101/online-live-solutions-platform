import { CircularProgress } from '@mui/material';
import React, { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AdminRoute = ({ children, ...rest }) => {

    const { user, adminn, loading } = useContext(AuthContext);
    if (loading) { return <CircularProgress /> }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && adminn ? (
                    children
                ) : (
                    <Navigate
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />

    );
};
export default AdminRoute;