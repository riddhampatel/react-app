import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [btnStyle, setBtnStyle] = useState({});
  const [btnClass, setBtnClass] = useState('');
  const [btnText, setBtnText] = useState('Submit');

  const handleMouseOver = () => {
    if (username.trim() === '' || password.trim() === '') {
      const container = document.querySelector('.container');
      const btn = document.querySelector('.btn');
      const maxX = container.clientWidth - btn.clientWidth - 20;
      const maxY = container.clientHeight - btn.clientHeight - 20;
      setBtnText('Pahele Data Fill Kar Be');
      setBtnClass('warning');
      setBtnStyle({
        position: 'absolute',
        left: Math.random() * maxX + 'px',
        top: Math.random() * maxY + 'px',
      });
    }
  };

  const handleInput = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      setBtnText('Haa ab Submit kar');
      setBtnClass('success');
      setBtnStyle({
        position: 'static',
        transform: 'translateX(0) scale(1.1)',
      });
    } else {
      setBtnText('Ha kar kar');
      setBtnClass('warning');
    }
  };

  return (
    <div className="container">
      <h1>Legend Form</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onFocus={() => setUsername('')}
        onChange={(e) => {
          setUsername(e.target.value);
          handleInput();
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          handleInput();
        }}
      />
      <button
        className={`btn ${btnClass}`}
        onMouseOver={handleMouseOver}
        style={btnStyle}
      >
        {btnText}
      </button>
    </div>
  );
}

export default App;
