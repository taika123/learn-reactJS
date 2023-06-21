import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
function Side() {
  return (
    <>
      <Sidebar>
        <Menu>
          <MenuItem component={<Link to="/admins" />}>Dash Board</MenuItem>

          <SubMenu label="Quizz">
            <MenuItem component={<Link to="/admins/manage-user" />}>
              Quan Ly User
            </MenuItem>
            <MenuItem> Quan Ly Bai Quizz </MenuItem>
            <MenuItem> Quan Ly Cau Hoi </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
}

export default Side;
