import React from "react";
import { useDispatch } from "react-redux";
import Filter from "../../components/Filter/Filter";
import List from "../../components/List/List";
import { fetchGenres } from '../../redux/features/genre/genreSlice';
import { fetchMovies } from '../../redux/features/movie/movieSlice';
import { fetchCategories } from "../../redux/features/category/categorySlice";
import styles from "./ListPage.module.scss";

const ListPage = () => {
  const dispatch = useDispatch()
  const [genre, setGenre] = React.useState('');
  const [year, setYear] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [raiting, setRaiting] = React.useState('');
  const [subCat, setSubCat] = React.useState(0);


  React.useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={styles.list_page}>
      <Filter onClickChengeSubCat={(index) => { setSubCat(index) }} chengeGenre={(e) => { setGenre(e.target.value) }} chengeYear={(e) => { setYear(e.target.value) }}
        chengeCountry={(e) => { setCountry(e.target.value) }} chengeRaiting={(e) => { setRaiting(e.target.value) }} genre={genre} year={year} country={country} raiting={raiting} subCat={subCat} />
      <div className={styles.content_wrapper}>
        <List genre={genre} year={year} country={country} raiting={raiting} subCat={subCat} />
      </div>
    </div>
  );
};

export default ListPage;
