import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import List from "../../components/List/List";
import { fetchGenres } from '../../redux/features/genre/genreSlice';
import { fetchMovies } from '../../redux/features/movie/movieSlice';
import { fetchCategories } from "../../redux/features/category/categorySlice";
import styles from "./ListPage.module.scss";

const ListPage = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={styles.list_page}>
      <Filter />
      <div className={styles.content_wrapper}>
        <List {...Filter}/>
      </div>
    </div>
  );
};

export default ListPage;
