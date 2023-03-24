import React, { useRef, useState } from "react";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import SearchModal from "./SearchModal/SearchModal";
function Header() {
  const [open, setOpen] = useState(false);
  const searchRef = React.useRef();

  const navigate = useNavigate();

  const handleMain = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const menu = (
    <div className="header" ref={searchRef}>
      {" "}
      <div className="logo-container">
        <div className="logo" onClick={handleMain}>
          KINO
        </div>
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
        <input
          type="text"
          placeholder="Search"
          className="search-box"
          onClick={() => setOpen(true)}
        />
      </div>
      <div className="login-container">
        <button className="login-button" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );

  return (
    <>
      {!open ? menu : null}
      <SearchModal open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
