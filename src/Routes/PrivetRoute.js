import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from './../Context/UserContext';

const PrivetRoute = ({children}) => {
    const{user,loading}=useContext(Authcontext);
    let location = useLocation();
    if(loading){
        return<div>loading --------</div>
    }
    if(user&&user.uid){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />};

export default PrivetRoute;