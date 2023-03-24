import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
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
              <Link to={`/movie/${movie._id}`}>
                <img
                  className={styles.card_img}
                  src='https://mf-static-ssl.more.tv/jackal/4072353/bb760c5f-765b-47a4-89aa-23759ca41891_W500_H710.avif'
                  alt=''
                />
              </Link>
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
