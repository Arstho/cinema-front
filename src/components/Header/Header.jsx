import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SearchModal from "../SearchModal/SearchModal";
import UserModal from "../UserModal/UserModal.jsx";
import styles from "./Header.module.scss";
import logo from "../../assets/logo_3.png";
import UserIcon from "../../assets/UserIcon.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const modalHandler = () => {
    setUserModal(!userModal);
  };

  const userIcon = (
    <div className={styles.userIcon} onClick={modalHandler}>
      <img src={UserIcon} alt='' />
    </div>
  );

  const headerMenu = (
    <div className={styles.wrapper}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src={logo} />
      </div>
      <div className={styles.menu}>
        <Link to={"/category/641c16833e802ab92a09d4c7"}>
          <div className={styles.menu_li}>ФИЛЬМЫ</div>
        </Link>
        <Link to='/category/641c168c3e802ab92a09d4c9'>
          <div className={styles.menu_li}>МУЛЬТФИЛЬМЫ</div>
        </Link>
        <Link to='/category/641c16953e802ab92a09d4cb'>
          <div className={styles.menu_li}>АНИМЕ</div>
        </Link>
        <Link to='/category/641c169b3e802ab92a09d4cd'>
          <div className={styles.menu_li}>СЕРИАЛЫ</div>
        </Link>
      </div>
      <div className={styles.search_and_login}>
        <input
          className={styles.search}
          type='text'
          placeholder='Найти'
          onClick={() => setOpen(true)}
        />
        <button className={styles.sub}>30 ДНЕЙ ПОДПИСКИ БЕСПЛАТНО</button>
        {token ? userIcon : <button className={styles.login}>войти</button>}
      </div>
      {userModal ? <UserModal userModal={userModal} setUserModal={setUserModal} /> : null}
    </div>
  );
  return (
    <div>
      <div className={styles.header}>{!open ? headerMenu : null}</div>
      {<SearchModal open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Header;
