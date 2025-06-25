import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#222', color: '#fff' }}>
      <div>
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Consultant Management</span>
        {role === 'admin' && (
          <Link to="/admin" style={{ marginLeft: '2rem', color: '#fff', textDecoration: 'none' }}>
            Admin Dashboard
          </Link>
        )}
      </div>
      <button onClick={handleLogout} style={{ background: '#444', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar; 