import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Adithya R Kulkarni. All rights reserved.</p>
          <p>Made with ❤️ By Adithya</p>
          <p className="footer-links">
            <a href="/">Home</a> • <a href="/projects">Projects</a> • <a href="/admin">Admin</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;