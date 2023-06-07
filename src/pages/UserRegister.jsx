import { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ addUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Create a new user object
      const newUser = {
        id: Date.now(),
        name,
        email,
        password,
      };
  
      // Add the new user to the list
      addUser(newUser);

      // Reset the form fields after submission
      setName('');
      setEmail('');
      setPassword('');
    };
    return(
        <div>
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <Link to="/user">Go back to User List</Link>
      </div>
    );
}

export default Register;