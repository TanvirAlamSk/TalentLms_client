/* eslint-disable react/prop-types */
import { useContext } from "react";
import { contextProvider } from "../context/AnthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Shared/Loader";

const PrivateRouter = ({ children }) => {
    const { user, loader } = useContext(contextProvider)
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