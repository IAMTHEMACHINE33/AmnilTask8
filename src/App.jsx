import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import "./pages/UserLising"
import UserList from './pages/UserLising'
import Register from './pages/UserRegister'
import { Routes, Route } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {

    setUsers([...users, user]);
    
  };
  console.log(users)
  return (
    <>
    <h2>User Listing Page</h2>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul> 
        {/* {/* <Link to="/register">Go back to Register</Link> */}
      <Routes>
        {/* <Route path = "/user"  render={(props) => <UserList {...props} users={users}  />}/> */}
        <Route path = "/register" element={<Register addUser={addUser} />} />
      </Routes>
    </>
  )
}

export default App
