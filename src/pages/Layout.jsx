import React from 'react';
import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="page-container">
      {children}
    </div>
  );
};

export default Layout;