import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = ({canActive,redirectPath="/"}) => {
    if(!canActive){
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet></Outlet>
};

export default ProtectedRoutes;