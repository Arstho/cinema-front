import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconBxUser from "../../IconBxUser";
import { getUsers } from "../../redux/features/auth/authSlice";
import styles from "./personalArea.module.css";

const PersonalArea = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const user = useSelector((state) => state.auth.user);
  if (!user) {
    return "...";
  }
  return (
    <>
      <div className={styles.continer}>
        <div className={styles.blokSiz}>
          <div className={styles.imgBlok}>
            {/* <img  className={styles.img} src={user} alt="изображение" /> */}
            <IconBxUser />
          </div>

          <div className={styles.text}>
            <h2>{user.username}</h2>
            <span>{user.username}@mail.ru </span>
          </div>
        </div>

        <div className={styles.blokMeny}>
          <div className={styles.blokUl}>
            <ul className={styles.meny}>
              <li className={styles.li1}>
                <a href='#'></a>ИЗБРАННОЕ
              </li>
              <li className={styles.li1}>
                <a href='#'></a>ОЦЕНКИ
              </li>
              <li className={styles.li1}>
                <a href='#'></a>ПОДПИСКА
              </li>
              <li className={styles.li1}>
                <a href='#'></a>НАСТРОЙКИ
              </li>
              <li className={styles.li1}>
                <a href='#'></a>ПРОМОКОДЫ
              </li>
              <li className={styles.li1}>
                <a href='#'></a>SMART TV
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.futer}>
        <h2>Здесь пока ничего нет</h2>
        <p className={styles.info}>
          Добавляй фильмы и сериалы в избранное, чтобы посмотреть их позже
        </p>
      </div>
    </>
  );
};

export default PersonalArea;
