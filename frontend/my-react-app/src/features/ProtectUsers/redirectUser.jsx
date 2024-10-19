import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectIfAuth({children}){
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            navigate('/home')
        }
    },[navigate]);

    return children;
}

export default RedirectIfAuth;