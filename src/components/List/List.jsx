import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styles from "./List.module.scss";

const List = ({ genre, year, country, raiting, subCat }) => {
  const { id } = useParams();
  const movies = useSelector((state) => state.movie.movies);
  const genres = useSelector((state) => state.genre.genre);
  const movie = useSelector((state) =>
  state.movie.movies.find((elem) => {
    return elem._id;
  })
);

  const movieGenre = genres.reduce((acc, genre) => {
    if (movie.genre.includes(genre._id)) {
      return `${acc} ${movie.name}`
    }
    return acc;
  }, '');

  let filteredMovies = [...movies];

  const filterMovies = () => {
    if (genre !== "Все жанры") {
      filteredMovies = movies.filter(movie => movieGenre.split(' ').includes(movie.name));
      console.log(filteredMovies);
    }

    if (year !== "Все годы") {
      filteredMovies = filteredMovies.filter(movie => year.slice(0, 4) <= movie.release && year.slice(-4) >= movie.release);
    }

    if (country !== "Все страны") {
      filteredMovies = filteredMovies.filter(movie => movie.country.includes(country));
    }

    if (raiting !== "Любой рейтинг") {
      filteredMovies = filteredMovies.filter(movie => movie.raiting >= +(raiting.replace('Больше ', '')));
    }

    return filteredMovies;
  }
  filterMovies()
  
  if (!movies || !genres) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.list}>
      {filteredMovies.map((movie, i) => {
        if (
          movie.category === id
        ) {
          return (
            <div className={styles.cardblock} key={i}>
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
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default List;