import React from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PaymentForm from "../../components/CardForm/CardForm";
import {
  getUser,
  getUsers,
  loginUser,
  subscriptionUser,
  subUser,
} from "../../redux/features/auth/authSlice";
import styles from "./SubscriptionPage.module.scss";

const SubscriptionPage = () => {
  const dispatch = useDispatch();
  const sub = useSelector((state) => state.auth.sub);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return "..";
  }
  const subActive = () => {
    dispatch(subscriptionUser({ userId: user.id, bool: true }));
  };
  const subDeActive = () => {
    dispatch(subscriptionUser({ userId: user.id, bool: false }));
  };

  return (
    <div className={styles.admin_page}>
      <div className={styles.content_wrapper}>
        {sub ? (
          <div>
            <h1>Вам доступны все фильмы без ограничений от VayKino!</h1>
            <h3 className={styles.info}>{`${user.username}`} ваша подписка активна </h3>
            <button className={styles.btn_2} onClick={subDeActive}>
              Отключить подписку
            </button>
          </div>
        ) : (
          <div>
            <h1>Смотри все фильмы без ограничений с подпиской от VayKino!</h1>
            <PaymentForm />
            <button className={styles.btn} onClick={subActive}>
              Купить подписку
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPage;
