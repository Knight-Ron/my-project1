import React from 'react';

const Navbar = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <ul style={{ display: 'inline-block', listStyle: 'none', padding: 0, margin: 0, }}>
        <li style={{ display: 'inline', marginRight: '20px' }}><a href="/">Home</a></li>
        <li style={{ display: 'inline', marginRight: '20px' }}><a href="/">About</a></li>
        <li style={{ display: 'inline' }}><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
