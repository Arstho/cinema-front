import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./userModal.module.css";
import logoutIcon from "../../assets/logout.png";
import { useDispatch, useSelector } from "react-redux";
import { authExit, getUsers } from "../../redux/features/auth/authSlice";

const UserModal = ({ userModal, setUserModal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    setUserModal(false);
  };

  const handleExit = () => {
    dispatch(authExit());
    setUserModal(false);
  };
  if (!user) {
    return "...";
  }
  return (
    <div className={styles.userModal}>
      <div className={styles.triangle} />
      <div className={styles.userName}>{user.username}</div>
      <div className={styles.logout}>
        <img onClick={handleExit} src={logoutIcon} alt='' />
      </div>
      <div className={styles.userMail}>{user.username}@gmail.com</div>
      <hr className={styles.line} />
      <div className={styles.modalSettings}>
        <div>Избранное</div>
        <Link to='/sub'>
          <div>Подписка</div>
        </Link>
        <div onClick={() => handleNavigate("/personal")}>Настройки</div>
        <div>Оценки</div>
      </div>
    </div>
  );
};

export default UserModal;
