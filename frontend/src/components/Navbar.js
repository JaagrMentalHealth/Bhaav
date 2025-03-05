import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Emotion Library</Link>
      <Link to="/progress">Progress</Link>
    </nav>
  );
};

export default Navbar;
