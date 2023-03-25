import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchGenres } from '../../redux/features/genre/genreSlice';
import { fetchMovies } from '../../redux/features/movie/movieSlice';
import { fetchCategories } from "../../redux/features/category/categorySlice";
import styles from "./List.module.scss";

const List = ({ genre, year, country, raiting, subCat }) => {
  const dispatch = useDispatch()
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
    dispatch(fetchCategories());
  }, [dispatch]);

  const movies = useSelector((state) => state.movie.movies);

  if (!movies) {
    return "loading";
  }
  
  console.log(movies[0].sub);
  console.log(subCat);
  return (
    <div className={styles.list}>
      {movies.map((movie) => {
        if (movie.category === id && (movie.country === country || country === "Все страны") && (movie.raiting === +raiting.slice(-1) || raiting === "Любой рейтинг") && ((year.slice(-4) > movie.release && year.slice(0, 4) < movie.release) || year === "Все годы") && (movie.sub === subCat || subCat === "Все")
        
        
        /*&& movie.genre === genre */) {
          return (
            <div className={styles.cardblock}>
              <Link className={styles.cat_title} to={`/movie/${movie._id}`}>
                <img className={styles.card_img} src={movie.preview} alt='' />
              </Link>
                <div className={styles.card_text}>
                  <div className={styles.card_title}>{movie.name}</div>
                  <div className={styles.card_sub}>{movie.sub}</div>
                </div>
                <div className={styles.card_rating}>{movie.raiting}</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default List;
