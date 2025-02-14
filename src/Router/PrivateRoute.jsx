import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Components/AuthContext/AuthProvider';

const PrivateRoute = () => {
    const location = useLocation()
    console.log(location);

    const { user } = useContext(AuthContext)

    if (user && user.email) {
        return <div>{children}</div>
    }
    return (
        <Navigate state={location.pathname} to={"/signin"}></Navigate>
        
    );
};

export default PrivateRoute;