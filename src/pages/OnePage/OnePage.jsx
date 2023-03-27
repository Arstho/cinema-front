import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGenres } from '../../redux/features/genre/genreSlice';
import { fetchMovies } from '../../redux/features/movie/movieSlice';
import styles from './onePage.module.scss';

export const OnePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [switchText, setSwitchText] = useState(false);
  const [fullText, setFullText] = useState('');
  const genres = useSelector((state) => state.genre.genre)
  const movie = useSelector((state) =>
    state.movie.movies.find((elem) => {
      return elem._id === id;
    })
  );

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
  }, [dispatch]);

  useEffect(() => {
    setFullText(movie?.description?.slice(0, 500));
  }, [movie]);

  if (!movie) {
    return "loading";
  }

  const movieGenre = genres.reduce((acc, genre) => {
    if (movie.genre.includes(genre._id)) {
      return `${acc} ${genre.name}`
    }
    return acc;
  }, '');

  const hendleFullText = () => {
    if (switchText) {
      setFullText(movie.description.slice(0, 500))
      setSwitchText(false)
    }
    if (!switchText) {
      setFullText(movie.description)
      setSwitchText(true)
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <h1>{movie.name} ({movie.release}) смотреть онлайн</h1>
      </div>
      <iframe className={styles.video} src={movie.ref} allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
      <div className={styles.posterAndInfo}>
        <div className={styles.poster}>
          <img alt="poster" title="Фильм Спутник фото" src={movie.preview} />
        </div>

        <div className={styles.info}>
          <div>
            <div>Год: <a href="#"><span>{movie.release} {' '}</span></a>
            </div>
          </div>
          <div >
            <div>Страна: <a href="#">{movie.country}</a> {' '}</div>
          </div>
          <div >
            <div >Жанр: <a href="#">{movieGenre}</a> </div>
          </div>
          <div>
            <div>Стоимость: <a href="#">{movie.sub}</a> {' '}</div>
          </div>
          {/* <div>
            <h3> 16+</h3>
          </div> */}
        </div>
      </div>
      <div className={styles.discription}>
        {movie.description?.length < 501 ? movie.description :
          (fullText?.length >= 501 ? <p className={styles.readBtn}>{fullText} <p onClick={hendleFullText}>Скрыть</p></p>
            :
            <p className={styles.readBtn}>{fullText}...<p onClick={hendleFullText}>Читать</p></p>)}
      </div>
    </div>
  )
}

