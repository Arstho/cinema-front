import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}></div>
        <div className={styles.menu}>
          <div className={styles.menu_li}>ФИЛЬМЫ</div>
          <div className={styles.menu_li}>МУЛЬТФИЛЬМЫ</div>
          <div className={styles.menu_li}>АНИМЕ</div>
          <div className={styles.menu_li}>СЕРИАЛЫ</div>
        </div>
        <div className={styles.search_and_login}>
          <input className={styles.search} type='text' placeholder='Найти' disabled='true' />
          <button className={styles.sub}>30 ДНЕЙ ПОДПИСКИ БЕСПЛАТНО</button>
          <button className={styles.login}>войти</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
