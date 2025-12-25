import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleForgotEmailChange = (e) => {
    setForgotEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Store token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/admin');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setForgotSuccess('');
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: forgotEmail })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setForgotSuccess('Password reset email sent. Please check your inbox.');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-container">
          {!showForgotPassword ? (
            <>
              <div className="login-header">
                <h1>Admin Login</h1>
                <p>Please enter your credentials to access the admin panel</p>
              </div>
              
              {error && (
                <div className="alert alert-error animate-fade-in-up">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                  />
                </div>
                
                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? 'Logging in...' : 'Login'}
                  </button>
                </div>
              </form>
              
              <div className="login-footer">
                <button 
                  onClick={() => setShowForgotPassword(true)}
                  className="btn btn-secondary btn-small"
                >
                  Forgot Password?
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="login-header">
                <h1>Reset Password</h1>
                <p>Enter your email to receive a password reset link</p>
              </div>
              
              {error && (
                <div className="alert alert-error animate-fade-in-up">
                  {error}
                </div>
              )}
              
              {forgotSuccess && (
                <div className="alert alert-success animate-fade-in-up">
                  {forgotSuccess}
                </div>
              )}
              
              <form onSubmit={handleForgotPassword} className="login-form">
                <div className="form-group">
                  <label htmlFor="forgotEmail">Email</label>
                  <input
                    type="email"
                    id="forgotEmail"
                    name="forgotEmail"
                    value={forgotEmail}
                    onChange={handleForgotEmailChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </div>
              </form>
              
              <div className="login-footer">
                <button 
                  onClick={() => {
                    setShowForgotPassword(false);
                    setError('');
                    setForgotSuccess('');
                  }}
                  className="btn btn-secondary btn-small"
                >
                  Back to Login
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;