import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styles from "./List.module.scss";

const List = ({ genre, year, country, raiting, subCat }) => {
  const { id } = useParams();
  const movies = useSelector((state) => state.movie.movies);
  const genres = useSelector((state) => state.genre.genre);

  const ex = movies.filter(mov => mov.genre.includes(genre))

  // const [filteredMovies, setFilteredMovies] = useState([]);
  // const movieGenre = genres.find(g => g?.name === genre)
  const filteredMov = movies.filter((movie) => {
    // if(genre && movie.genre !== genre) {
    //   return false
    // }
    if(genre && genre !== "Все жанры" && !movie.genre.includes(genre)) {
      console.log(movie.genre.includes(genre));
      return false
    }

    if(year && year !== 'Все годы' && !(+year.slice(0, 4) <= +movie.release && +year.slice(-4) >= +movie.release)) {
      return false
    }

    if(country && country !== 'Все страны' && movie.country.trim() !== country) {
      return false
    }

    if(raiting && raiting !== 'Любой рейтинг' && movie.raiting <= Number(raiting)) {
      return false
    }

    if(subCat && subCat !== 0 && subCat !== 2 && !(movie.sub === "Бесплатно")) {
      return false
    }
    if(subCat && subCat !== 0 && subCat !== 1 && !(movie.sub === "Подписка")) {
      return false
    }
    return true
  })
  // let prevArray = []

  // useEffect(() => {
  //   setFilteredMovies([...movies])
  // }, [movies])

  // useEffect(() => {
  //   if (genre !== "Все жанры") {
  //     const movieGenre = genres.find(g => g?.name === genre)
  //     setFilteredMovies(movies.filter(movie => movie.genre.includes(movieGenre?._id)))
  //     console.log("filt", filteredMovies);
  //     // prevArray = filteredMovies
  //   }

    // else if (genre === "Все жанры") {
    //   setFilteredMovies([...movies])
    // }

    // else if (year !== "Все годы") {
    //   setFilteredMovies(filteredMovies.filter(movie => +year.slice(0, 4) <= +movie.release && +year.slice(-4) >= +movie.release));
    // }

    // else if (year === "Все годы") {
    //   setFilteredMovies(filteredMovies)
    // }

    // if (country !== "Все страны") {
    //   setFilteredMovies(filteredMovies.filter(movie => movie.country.includes(country)));
    //   }

    // if (raiting !== "Любой рейтинг") {
    //   setFilteredMovies(filteredMovies.filter(movie => movie.raiting >= +(raiting.replace('Больше ', ''))));
    // }

    // else {
    //   setFilteredMovies([...movies])
    // }

    // return filteredMovies;

  // }, [genre, , raiting, subCat])

  // useEffect(() => {
  //   if (year !== "Все годы") {
  //     setFilteredMovies(filteredMovies.filter(movie => +year.slice(0, 4) <= +movie.release && +year.slice(-4) >= +movie.release));
  //   }
  //  }, [year])

  // useEffect(() => {
  //   if (country !== "Все страны") {
  //     setFilteredMovies(movies.filter(movie => movie.country.includes(country)));
  //   }
  // }, [country])

  // React.useMemo(() => {
  //   // if (genre !== "Все жанры") {
  //   //   const movieGenre = genres.find(g => g?.name === genre)
  //   //   setFilteredMovies(movies.filter(movie => movie.genre.includes(movieGenre?._id)))
  //   //   console.log("filt", filteredMovies);
  //   // }

  //   if (year !== "Все годы") {
  //     setFilteredMovies(filteredMovies.filter(movie => +year.slice(0, 4) <= +movie.release && +year.slice(-4) >= +movie.release));
  //   }

  //   // if (country !== "Все страны") {
  //   //   setFilteredMovies(filteredMovies.filter(movie => movie.country.includes(country)));
  //   //   }

  //   // if (raiting !== "Любой рейтинг") {
  //   //   setFilteredMovies(filteredMovies.filter(movie => movie.raiting >= +(raiting.replace('Больше ', ''))));
  //   // }

  //   else {
  //     setFilteredMovies([...movies])
  //   }

  //   return filteredMovies;
  // }, [genre, year, country, raiting, subCat])

  // console.log("FILTEREDMOVIE",filteredMov, country, year, raiting, genre );
  // filterMovies()

  // if (!filteredMovies) {
  //   return <div>Loading...</div>;
  // }


  return (
    <div className={styles.list}>
      {filteredMov?.map((movie, i) => {
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