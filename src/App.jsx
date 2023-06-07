import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import "./pages/UserLising"
import UserList from './pages/UserLising'
import Register from './pages/UserRegister'
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {

    setUsers([...users, user]);
    
  };
  console.log(users)
  return (
    <>
   
      <Routes>
        <Route path = "/user"  element={<UserList users={users} />}/>
        <Route path = "/register" element={<Register addUser={addUser} />} />
      </Routes>
    </>
  )
}

export default App
