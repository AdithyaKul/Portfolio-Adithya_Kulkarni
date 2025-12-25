import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error('Error parsing user data:', e);
        localStorage.removeItem('user');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          Portfolio
        </Link>
        <nav className="nav">
          <ul>
            <li>
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/resume"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Resume
              </NavLink>
            </li>
            {user ? (
              <>
                {/* Admin link removed from navigation but still accessible via /admin URL */}
                <li>
                  <button 
                    onClick={handleLogout}
                    className="btn btn-secondary btn-small"
                    style={{ marginLeft: '0.5rem' }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              // Login link removed from navigation but still accessible via /login URL
              <></>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;