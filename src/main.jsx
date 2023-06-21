import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./components/User/User.jsx";
import Admin from "./components/Admin/Admin.jsx";
import Home from "./components/Home/Home.jsx";
import ManageUser from "./components/Admin/Content/ManageUser.jsx";
import Side from "./components/Admin/Sidebar/Sidebar.jsx";
import DashBoard from "./components/Admin/Content/DashBoard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="users" element={<User />} />
        </Route>
        <Route path="/admins" element={<Admin />}>
          {/* <Route index element={<Side />} /> */}
          <Route index element={<DashBoard />} />
          <Route path="manage-user" element={<ManageUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
