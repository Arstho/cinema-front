import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styles from "./Filter.module.scss";

const Filter = ({ onClickChengeSubCat, chengeGenre, chengeYear, chengeCountry, chengeRaiting, genre, year, country, raiting, subCat }) => {
  const { id } = useParams();
  const categories = useSelector((state) => state.category.categories);
  const genres = useSelector((state) => state.genre.genre);
  const arrSubCat = ['Все', 'Бесплатные', 'По подписке']

  return (
    <>
      <div className={styles.header_wrapper}>
        {categories.map(category => {
          if (category._id === id) {
            return <h1 className={styles.title}>{category.name} смотреть онлайн</h1>
          }
        })}
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
              {genres.map(genre => <option className={styles.filter_genre} value={genre._id}>{genre.name}</option>)}
            </select>
            <select className={styles.filter_cat} value={year} onChange={chengeYear}>
              <option className={styles.filter_genre}>Все годы</option>
              <option className={styles.filter_genre}>1980 - 1999</option>
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
              <option className={styles.filter_genre}>Корея Южная</option>
              <option className={styles.filter_genre}>Дания</option>
            </select>
            <select className={styles.filter_cat} value={raiting} onChange={chengeRaiting}>
              <option className={styles.filter_genre}>Любой рейтинг</option>
              <option className={styles.filter_genre} value={5}>Больше 5</option>
              <option className={styles.filter_genre} value={6}>Больше 6</option>
              <option className={styles.filter_genre} value={7}>Больше 7</option>
              <option className={styles.filter_genre} value={8}>Больше 8</option>
              <option className={styles.filter_genre} value={9}>Больше 9</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
