import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/features/movie/movieSlice";
import styles from "./Slider.module.scss";

const Slider = ({ catId }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  React.useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <div className={styles.slider}>
      {movies.map((movie) => {
        if (movie.category === catId) {
          return (
            <div className={styles.cardblock}>
              <img className={styles.card_img} src={movie.preview} alt='' />
              <div className={styles.card_text}>
                <div className={styles.card_title}>{movie.name}</div>
                <div className={styles.card_sub}>{movie.sub}</div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Slider;
