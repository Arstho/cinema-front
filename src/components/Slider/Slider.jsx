import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/features/movie/movieSlice";
import { Link } from "react-router-dom";
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
            <Link  to={`/movie/${movie._id}`}>
              <img
                className={styles.card_img}
                src='https://mf-static-ssl.more.tv/jackal/4072353/bb760c5f-765b-47a4-89aa-23759ca41891_W500_H710.avif'
                alt=''
              />
              </Link>
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
