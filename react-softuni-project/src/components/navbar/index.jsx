import React from 'react';
import { Link } from 'react-router-dom'; 
import { DASHBOARD } from '../../lib/routes';
import '../navbar/index.css'
import { useLogout } from '../../hooks/auth';

export default function Navbar() {
  const {logout, isLoading} = useLogout();
  return (
    <div className="navbar">
      <div className="flex-container">
        <Link to={DASHBOARD} className="link" style={{ color: 'teal', fontWeight: 'bold' }}>
          Home
        </Link>
        <button className="custom-button" onClick={logout}>Logout</button>
      </div>
    </div>
  )
}
