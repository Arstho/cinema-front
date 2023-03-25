import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchModal from "../SearchModal/SearchModal";
import UserModal from "../UserModal/UserModal.jsx";
import styles from "./Header.module.scss";

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
      <img src="./UserIcon.png" alt="" />
    </div>
  );

  const headerMenu = (
    <div className={styles.wrapper}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src="./logo_3.png" />
      </div>
      <div className={styles.menu}>
        <div className={styles.menu_li}>ФИЛЬМЫ</div>
        <div className={styles.menu_li}>МУЛЬТФИЛЬМЫ</div>
        <div className={styles.menu_li}>АНИМЕ</div>
        <div className={styles.menu_li}>СЕРИАЛЫ</div>
      </div>
      <div className={styles.search_and_login}>
        <input
          className={styles.search}
          type="text"
          placeholder="Найти"
          onClick={() => setOpen(true)}
        />
        <button className={styles.sub}>30 ДНЕЙ ПОДПИСКИ БЕСПЛАТНО</button>
        {token ? userIcon : <button className={styles.login}>войти</button>}
      </div>
      {userModal ? (
        <UserModal userModal={userModal} setUserModal={setUserModal} />
      ) : null}
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
