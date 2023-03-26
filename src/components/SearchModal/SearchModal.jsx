import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

function SearchModal({ open, setOpen }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movie.movies);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(text.toLowerCase())
  );

  const inputRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        e.target.tagName !== "INPUT"
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setOpen]);

  return (
    <div
      className={
        open ? styles.searchMain + " " + styles.active : styles.searchMain
      }
    >
      <div className={styles.searchMod}>
        <button className={styles.closeButton} onClick={() => setOpen(false)}>
          <b>✕</b>
        </button>
        <input
          type="text"
          className={styles.inp}
          value={text}
          onChange={handleInputChange}
          ref={inputRef}
        />
      </div>
      <p className={styles.resultTitle}>Результаты поиска</p>
      <div className={styles.movieCardsContainer} ref={modalRef}>
        {filteredMovies.map((movie) => (
          <div
            className={styles.movieCard}
            key={movie.id}
            onClick={() => navigate(`/movie/${movie._id}`)}
          >
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
