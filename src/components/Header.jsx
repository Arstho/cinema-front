import React from 'react';
import { useSelector } from "react-redux";
import  { useNavigate, Link} from 'react-router-dom';
import './Styles.css'

export const Header = () => {
    const navigate = useNavigate()
    const categories = useSelector((state) => state.category.categories);

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
        {categories.map(category => {
          return  <Link  to={`/movie/${category._id}`}>
          <li className="category-item">{category.name}</li>
          </Link>
        })}
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