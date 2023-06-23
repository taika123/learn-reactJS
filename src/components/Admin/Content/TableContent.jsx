import React from "react";
import { useState } from "react";

function TableContent() {
  const [listUser, setListUser] = useState([
    {
      id: "1",
      username: "Dổ",
      email: "email",
      role: "User",
    },
    {
      id: "2",
      username: "Mutang",
      email: "gasdas@gmail.com",
      role: "Admin",
    },
  ]);
  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody>
        {listUser &&
          listUser.length > 0 &&
          listUser.map((item, i) => {
            return (
              <tr key={`table-index-${i}`}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            );
          })}

        {listUser && listUser.length === 0 && (
          <tr>
            <td scope="row" colSpan={"4"}>
              No data
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TableContent;
