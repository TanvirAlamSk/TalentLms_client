/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Shared/Loader';
import { AuthProvider } from '../context/AuthContext';

const PrivateRouter = ({ children }) => {
    const { user, loader } = useContext(AuthProvider)
    const location = useLocation()

    if (loader) {
        return <Loader></Loader>
    }

    if (user && user?.uid) {
        return children
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

};

export default PrivateRouter;