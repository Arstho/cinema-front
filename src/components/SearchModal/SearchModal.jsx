import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Modal.module.css";

function SearchModal({ open, setOpen }) {
  const [text, setText] = useState("");
  const movies = useSelector((state) => state.movie.movies);
  console.log(movies);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div
      className={
        open ? styles.searchMain + " " + styles.active : styles.searchMain
      }
    >
      <div className={styles.searchMod}>
        <button className={styles.closeButton} onClick={() => setOpen(false)}>
          ✕
        </button>
        <input
          type="text"
          className={styles.inp}
          value={text}
          onChange={handleInputChange}
        />
      </div>
      <p className={styles.resultTitle}>Результаты поиска</p>
      <div className={styles.movieCardsContainer}>
        {filteredMovies.map((movie) => (
          <div className={styles.movieCard} key={movie.id}>
            <img src={movie.preview} alt={movie.name} />
            <div className={styles.movieCardInfo}>
              <h3>{movie.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchModal;
