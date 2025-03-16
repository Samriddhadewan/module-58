import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>

    }
    if(user){
        return children;
    }
  return (
    <Navigate to="/login" state={location?.pathname}></Navigate>
  )
}

export default PrivateRoute