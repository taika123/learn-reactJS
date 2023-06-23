import React from "react";
import ModalCreateUser from "./ModelCreateUser";
import { useState } from "react";
import "./ManageUser.scss";
import TableContent from "./TableContent";
function ManageUser() {
  const [show, setShow] = useState(false);

  return (
    <div className="manage-content">
      <div className="title"></div>
      <div className="user-content">
        <div className="addnew-user">
          <button className="btn" onClick={() => setShow(true)}>
            Add new user
          </button>
        </div>
        <div className="table-content">
          <TableContent />
          <ModalCreateUser show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
