import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = ({ users }) => {
    return (
      <>
         <h2>User Listing Page</h2>
        <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
        </ul> 
        <Link to="/register">Go to Register</Link>
      </>
    );
  };

export default UserList;
