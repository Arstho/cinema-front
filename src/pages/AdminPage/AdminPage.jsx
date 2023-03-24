import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/features/category/categorySlice";
import { fetchGenres } from "../../redux/features/genre/genreSlice";
import { addMovie } from "../../redux/features/movie/movieSlice";
import styles from "./AdminPage.module.scss";

const AdminPage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGenres());
  }, [dispatch]);
  const categories = useSelector((state) => state.category.categories);
  const genres = useSelector((state) => state.genre.genre);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ref, setRef] = useState("");
  const [country, setCountry] = useState("");
  const [preview, setPreview] = useState("");
  const [category, setCategory] = useState([]);
  const [genre, setGenre] = useState([]);
  const [director, setDirector] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [release, setRelease] = useState();
  const [raiting, setRaiting] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMovie({
        name,
        description,
        ref,
        country,
        preview,
        category,
        genre,
        director,
        budget,
        duration,
        release,
        raiting,
      }),
    );
  };

  const handleGenre = (value) => {
    if (genre.includes(value)) {
      setGenre([
        ...genre.filter((obj) => {
          return obj !== value;
        }),
      ]);
    } else {
      setGenre([...genre, value]);
    }
  };
  return (
    <div className={styles.admin_page}>
      <div className={styles.content_wrapper}>
        <div className={styles.add_movie}>
          <h1>Добавление фильма</h1>
          <form onSubmit={(e) => handleSubmit()}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.inp}
              type='text'
              placeholder='Название'
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.inp}
              type='text'
              placeholder='Описание'
            />
            <input
              value={preview}
              onChange={(e) => setPreview(e.target.value)}
              className={styles.inp}
              type='text'
              placeholder='Ссылка на превью'
            />
            <input
              value={ref}
              onChange={(e) => setRef(e.target.value)}
              className={styles.inp}
              type='text'
              placeholder='Ссылка на фильм'
            />
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className={styles.inp}
              type='text'
              placeholder='Страна'
            />
            {/* <input className={styles.inp} type='text' placeholder='Категория' />
            <input className={styles.inp} type='text' placeholder='Жанр' /> */}
            <div>
              <select
                className={styles.sel}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                name='category'>
                {categories.map((cat) => {
                  return <option value={cat._id}>{cat.name}</option>;
                })}
              </select>
            </div>
            <div>
              <select
                multiple
                className={styles.sel}
                value={genre}
                onChange={(e) => handleGenre(e.target.value)}
                name='genre'>
                {genres.map((genre) => {
                  return <option value={genre._id}>{genre.name}</option>;
                })}
              </select>
            </div>
            <input
              value={director}
              onChange={(e) => setDirector(e.target.value)}
              className={styles.inp}
              type='text'
              placeholder='Режиссер'
            />
            <input
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={styles.inp}
              type='text'
              placeholder='Бюджет фильма'
            />
            <input
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className={styles.inp}
              type='text'
              placeholder='Продолжительность фильма'
            />
            <input
              value={release}
              onChange={(e) => setRelease(e.target.value)}
              className={styles.inp}
              type='text'
              placeholder='Дата релиза'
            />
            <input
              value={raiting}
              onChange={(e) => setRaiting(e.target.value)}
              className={styles.inp}
              type='text'
              placeholder='Рейтинг'
            />
            <button onClick={(e) => handleSubmit(e)}>Добавить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
