import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Filter.module.scss";

const Filter = ({ onClickChengeSubCat, chengeGenre, chengeYear, chengeCountry, chengeRaiting, genre, year, country,raiting, subCat }) => {
  // const [genre, setGenre] = React.useState('');
  // const [year, setYear] = React.useState('');
  // const [country, setCountry] = React.useState('');
  // const [raiting, setRaiting] = React.useState('');
  // const [subCat, setSubCat] = React.useState(0);

  // const { id } = useParams();
  // const movies = useSelector((state) => state.movie.movies);
  const arrSubCat = ['Все', 'Бесплатные', 'По подписке']

  // const onClickChengeSubCat = (index) => {
  //   setSubCat(index);
  // };

  // const chengeGenre = (e) => {
  //   setGenre(e.target.value);
  // }
  // const chengeYear = (e) => {
  //   setYear(e.target.value);
  // }
  // const chengeCountry = (e) => {
  //   setCountry(e.target.value);
  // }
  // const chengeRaiting = (e) => {
  //   setRaiting(e.target.value);
  // }

  return (
    <>
      <div className={styles.header_wrapper}>
        <h1 className={styles.title}>Фильмы смотреть онлайн</h1>
      </div>
      <div className={styles.filter_cont}>
        <div className={styles.filter_wrapper}>
          <div className={styles.sub_cont}>
          {arrSubCat.map((item, i) => (
            <div onClick={() => onClickChengeSubCat(i)} className={subCat === i ? styles.sub_cat_active : styles.sub_cat}>{item}</div>
            ))}
          </div>
          <div className={styles.filter_cont_1}>
            <select className={styles.filter_cat} value={genre} onChange={chengeGenre}>
              <option className={styles.filter_genre}>Все жанры</option>
              <option className={styles.filter_genre}>Боевик</option>
              <option className={styles.filter_genre}>Триллер</option>
              <option className={styles.filter_genre}>Драма</option>
              <option className={styles.filter_genre}>Комедия</option>
              <option className={styles.filter_genre}>Ужасы</option>
              <option className={styles.filter_genre}>Мелодрама</option>
              <option className={styles.filter_genre}>Исторический</option>
              <option className={styles.filter_genre}>Детектив</option>
              <option className={styles.filter_genre}>Приключения</option>
            </select>
            <select className={styles.filter_cat} value={year} onChange={chengeYear}>
              <option className={styles.filter_genre}>Все годы</option>
              <option className={styles.filter_genre}>до 1999</option>
              <option className={styles.filter_genre}>2000 - 2005</option>
              <option className={styles.filter_genre}>2006 - 2010</option>
              <option className={styles.filter_genre}>2011 - 2015</option>
              <option className={styles.filter_genre}>2016 - 2020</option>
              <option className={styles.filter_genre}>2021 - 2023</option>
            </select>
            <select className={styles.filter_cat} value={country} onChange={chengeCountry}>
              <option className={styles.filter_genre}>Все страны</option>
              <option className={styles.filter_genre}>Австралия</option>
              <option className={styles.filter_genre}>Австрия</option>
              <option className={styles.filter_genre}>Бельгия</option>
              <option className={styles.filter_genre}>Великобритания</option>
              <option className={styles.filter_genre}>Германия</option>
              <option className={styles.filter_genre}>США</option>
              <option className={styles.filter_genre}>Бразилия</option>
              <option className={styles.filter_genre}>Индия</option>
              <option className={styles.filter_genre}>Дания</option>
            </select>
            <select className={styles.filter_cat} value={raiting} onChange={chengeRaiting}>
              <option className={styles.filter_genre}>Любой рейтинг</option>
              <option className={styles.filter_genre}>Больше 5</option>
              <option className={styles.filter_genre}>Больше 6</option>
              <option className={styles.filter_genre}>Больше 7</option>
              <option className={styles.filter_genre}>Больше 8</option>
              <option className={styles.filter_genre}>Больше 9</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
