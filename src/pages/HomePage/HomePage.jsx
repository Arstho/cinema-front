import React from "react";
import MovieCard from "../../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/features/movie/movieSlice";
import styles from './homePage.module.css'

export const HomePage = () => {
  const movies = useSelector((state) => state.movie.movies)
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch]);

    return (
      <div className={styles.main}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} releaseDate={movie.releaseDate} description={movie.description} poster={movie.posterUrl}/>
        ))}
      </div>
    );
  }