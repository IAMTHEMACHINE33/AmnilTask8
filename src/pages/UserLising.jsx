import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = ({ users }) => {
    console.log("asd",users)
    return (
      <div>
        <h2>User Listing Page</h2>
        {/* <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul> */}
        {/* <Link to="/register">Go back to Register</Link> */}
      </div>
    );
  };

export default UserList;
