import React from "react";
import './Styles.css'

function MovieCard(props) {
    return (
      <div className="movie-card">
        <div className="movie-info">
          <div
            className="movie-poster"
          ><img src={props.poster} alt="" /></div>
          <h2 className="movie-title">{props.title}</h2>
          <p className="movie-release-date">{props.releaseDate}</p>
          <p className="movie-description">{props.description}</p>
          <button className="movie-watch-btn">Смотреть</button>
        </div>
      </div>
    );
  }
  
  export default MovieCard;
  