import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import List from "../../components/List/List";
import { fetchGenres } from '../../redux/features/genre/genreSlice';
import { fetchMovies } from '../../redux/features/movie/movieSlice';
import { fetchCategories } from "../../redux/features/category/categorySlice";
import styles from "./ListPage.module.scss";

const ListPage = () => {
  const dispatch = useDispatch();

  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [country, setCountry] = useState('');
  const [raiting, setRaiting] = useState('');
  const [subCat, setSubCat] = useState(0);

  const movies = useSelector((state) => state.movie.movies);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
    dispatch(fetchCategories());
  }, [dispatch]);

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.list_page}>
      <Filter
        onClickChengeSubCat={(index) => { setSubCat(index) }}
        chengeGenre={(e) => { setGenre(e.target.value) }}
        chengeYear={(e) => { setYear(e.target.value) }}
        chengeCountry={(e) => { setCountry(e.target.value) }}
        chengeRaiting={(e) => { setRaiting(e.target.value) }}
        genre={genre}
        year={year}
        country={country}
        raiting={raiting}
        subCat={subCat}
      />
      <div className={styles.content_wrapper}>
        <List
          genre={genre}
          year={year}
          country={country}
          raiting={raiting}
          subCat={subCat}
        />
      </div>
    </div>
  );
};

export default ListPage;