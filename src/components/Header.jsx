import React from 'react';
import './Styles.css'
import  { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate()

    const handleMain = () => {
        navigate('/');
    }

    const handleLogin = () => {
        navigate('/login');
      };

  return (
    <div className="header">
         <div className="logo-container">
        {/* <img src="/path/to/logo.png" alt="Logo" className="logo" /> */}
        <div className='logo' onClick={handleMain}>KINO</div>
      </div>
      <div className="category-container">
        <ul className="category-list">
          <li className="category-item">Фильмы</li>
          <li className="category-item">TV</li>
          <li className="category-item">Мультфильмы</li>
          <li className="category-item">Сериалы</li>
        </ul>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-box" />
      </div>
      <div className="login-container">
        <button className="login-button" onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
}

export default Header;

