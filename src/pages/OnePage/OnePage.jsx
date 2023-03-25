import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGenres } from '../../redux/features/genre/genreSlice';
import { fetchMovies } from '../../redux/features/movie/movieSlice';
// import { fetchCategories } from "../../redux/features/category/categorySlice";
import styles from './onePage.module.scss';

export const OnePage = () => {
  const [switchText, setSwitchText] = React.useState(false)
  const { id } = useParams();
  const dispatch = useDispatch()
  let movieGenre = ''
  const genres = useSelector((state) => state.genre.genre)
  const movie = useSelector((state) =>
    state.movie.movies.find((elem) => {
      return elem._id === id;
    })
  );

  React.useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
  }, [dispatch]);

  const [fullText, setFullText] = React.useState(movie?.description?.slice(0, 500))

  if (!movie) {
    return "loading";
  }

  for (let i = 0; i < genres.length; i++) {
    for (let j = 0; j < movie.genre.length; j++) {
      if (genres[i]._id === movie.genre[j])
        movieGenre = movieGenre + ' ' + genres[i].name
    }
  }

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
      <iframe className={styles.video} src="https://vk.com/video_ext.php?oid=-211760893&id=456239030&hash=062e3bf296d2697c&hd=4" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
      <div className={styles.posterAndInfo}>
        <div className={styles.poster}>
          <img alt="poster" title="Фильм Спутник фото" src={movie.preview} />
          <div className={styles.grade}>
            <svg width="22" height="9" xmlns="http://www.w3.org/2000/svg" className="ProjectTemplate-module__ratingIcon--cEKkF"><g fill="gray" fillRule="evenodd"><path d="M0 8.885h2.281V0H0zM7.136 0l-.528 4.157-.325-2.259A61.705 61.705 0 006.007 0H3.053v8.885H5.05l.008-5.866.836 5.866h1.42l.804-5.997v5.997h1.99V0H7.135M13.672 1.604c.088.048.145.13.17.245.032.115.04.376.04.777v3.445c0 .589-.04.949-.114 1.08-.073.14-.276.205-.6.205V1.52c.243 0 .413.025.504.083zm-.026 7.281c.544 0 .958-.032 1.226-.09.276-.057.504-.163.682-.32.186-.146.316-.359.39-.629.072-.27.121-.802.121-1.596V3.134c0-.843-.032-1.408-.088-1.694a1.546 1.546 0 00-.374-.777C15.4.425 15.1.263 14.71.155 14.328.057 13.687 0 12.59 0h-1.705v8.885h2.76zM19.8 6.734c0 .425-.024.695-.066.809-.04.115-.226.172-.364.172-.13 0-.228-.057-.268-.163-.05-.107-.073-.36-.073-.752V4.45c0-.4.023-.654.065-.752.04-.097.13-.147.26-.147.138 0 .324.05.372.172.05.114.073.36.073.728v2.283zM16.836 0v8.885h2.054l.138-.564c.186.228.389.4.617.515.218.107.552.164.811.164.365 0 .674-.09.934-.286.26-.188.43-.418.503-.679.065-.262.106-.655.106-1.187V4.353c0-.532-.017-.884-.04-1.048a1.25 1.25 0 00-.204-.507 1.209 1.209 0 00-.511-.401c-.22-.09-.48-.14-.788-.14-.26 0-.593.058-.82.156-.22.107-.422.27-.608.483V0h-2.192z"></path></g></svg> 6.4<svg width="12" height="13" xmlns="http://www.w3.org/2000/svg" className="ProjectTemplate-module__ratingIcon--cEKkF"><path d="M2.364.009v3.529h.18L4.909.008H8.18L3.815 4.092l.18.185L12 .004v2.971L4.904 5.573v.184L12 5.109v2.786l-7.096-.648v.185L12 10.029V13L3.995 8.728l-.18.184 4.365 4.083H4.908L2.545 9.466h-.181v3.529H0V0h2.364z" fill="gray" fillRule="evenodd"></path></svg> 6.3</div>
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
          <div>
            <h3> 16+</h3>
          </div>
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

