import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./List.module.scss";

const List = () => {
  const movies = useSelector((state) => state.movie.movies);
  const { id } = useParams();

  return (
    <div className={styles.list}>
      {movies.map((movie) => {
        if (movie.category === id) {
          return (
            <div className={styles.cardblock}>
              <img className={styles.card_img} src={movie.preview} alt='' />
              <div className={styles.card_text}>
                <div className={styles.card_title}>{movie.name}</div>
                <div className={styles.card_sub}>Подписка</div>
              </div>
              <div className={styles.card_rating}>5.7</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default List;
