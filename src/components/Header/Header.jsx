import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import SearchModal from "../SearchModal/SearchModal";
import UserModal from "../UserModal/UserModal.jsx";
import styles from "./Header.module.scss";
import logo from "../../assets/logo_3.png";
import UserIcon from "../../assets/UserIcon.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const sub = useSelector((state) => state.auth.sub);
  const navigate = useNavigate();
  const categories = useSelector((state) => state.category.categories);
  const { id } = useParams();

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
        {categories.map((cat) => {
          return (
            <Link to={`category/${cat._id}`}>
              <div className={styles.menu_li}>{cat.name}</div>
            </Link>
          );
        })}
      </div>
      <div className={styles.search_and_login}>
        <input
          className={styles.search}
          type='text'
          placeholder='Найти'
          onClick={() => setOpen(true)}
        />
        {!sub &&
          <>
          <Link to='/sub'>
            <button className={styles.sub}>30 ДНЕЙ ПОДПИСКИ БЕСПЛАТНО</button>

          </Link>
          </>
        }
        {token ? (
          userIcon
        ) : (
          <Link to='/login'>
            <button className={styles.login}>войти</button>
          </Link>
        )}
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
