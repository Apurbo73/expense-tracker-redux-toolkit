import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div className="header">
        <h1>Expense Tracker</h1>
      </div>
      <div classname="main">
        {children}
      </div>
      <div className="footer">©2023 Apurbo Deb Nath</div>
    </div>
  );
};

export default Layout;
