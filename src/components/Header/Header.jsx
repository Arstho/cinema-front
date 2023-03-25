import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const categories = useSelector((state) => state.category.categories);
  const { id } = useParams();

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}></div>
        <div className={styles.menu}>
          {categories.map(cat => {
              return (<Link to={`category/${cat._id}`}><div className={styles.menu_li}>{cat.name}</div></Link>)
          })}
        </div>
        <div className={styles.search_and_login}>
          <input className={styles.search} type='text' placeholder='Найти' disabled='true' />
          <button className={styles.sub}>30 ДНЕЙ ПОДПИСКИ БЕСПЛАТНО</button>
          <Link to='/login'>
            <button className={styles.login}>войти</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
