import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./userModal.module.css";
import logoutIcon from "../../assets/logout.png";

const UserModal = ({ userModal, setUserModal }) => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    setUserModal(false);
  };
  return (
    <div className={styles.userModal}>
      <div className={styles.triangle} />
      <div className={styles.userName}>Мансур Умаров</div>
      <div className={styles.logout}>
        <img src={logoutIcon} alt='' />
      </div>
      <div className={styles.userMail}>muslim_abdulov@mail.ru</div>
      <hr className={styles.line} />
      <div className={styles.modalSettings}>
        <div>Избранное</div>
        <div>Подписка</div>
        <div onClick={() => handleNavigate("/personal")}>Настройки</div>
        <div>Оценки</div>
      </div>
    </div>
  );
};

export default UserModal;
