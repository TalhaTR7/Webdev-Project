import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './about.jsx';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <nav className='navbar'>
        <Link to={'/'} className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Go to Home</Link>
        <Link to={'/about'} className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>Go to About</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <ul>
              {users.map(user => (<li key={user.id}>{user.name}</li>))}
            </ul>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
