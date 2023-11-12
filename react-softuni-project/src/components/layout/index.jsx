import React from 'react'
import { LOGIN } from '../../lib/routes';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth';

export default function Layout() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const {user, isLoading} = useAuth();

    
    useEffect(() => {
        if(pathname.startsWith("/protected") && !user){
            navigate(LOGIN)
        }
    }, [pathname, user])
    
    if(isLoading) return "Loading...";
  
    return (
        <>
            This is the Child: <Outlet/>
        </>
  )
}
