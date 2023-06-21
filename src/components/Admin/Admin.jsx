import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import "./Admin.scss";
import { Link, Outlet } from "react-router-dom";
function Admin() {
  return (
    <div className="admin-homepage">
      <div className="admin-dash">
        <Sidebar />
      </div>
      <div className="admin-content">
        <div className="admin-header">
          <Link to="/" className="default-link">
            Home
          </Link>
        </div>
        <div className="admin-main">
          Main Content
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Admin;
