import React from "react";
import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <>
      <div className={styles.header_wrapper}>
        <h1 className={styles.title}>Фильмы смотреть онлайн</h1>
      </div>
      <div className={styles.filter_cont}>
        <div className={styles.filter_wrapper}>
          <div className={styles.sub_cont}>
            <div className={styles.sub_cat_active}>Все</div>
            <div className={styles.sub_cat}>Бесплатные</div>
            <div className={styles.sub_cat}>По подписке</div>
          </div>
          <div className={styles.filter_cont_1}>
            <div className={styles.filter_cat}>Все жанры</div>
            <div className={styles.filter_cat}>Все годы</div>
            <div className={styles.filter_cat}>Все страны</div>
            <div className={styles.filter_cat}>Любой рейтинг</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
