import React from "react";
import MovieCard from "../../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/features/movie/movieSlice";
import styles from './homePage.module.css'
import Slider from "../../components/Slider/Slider";

export const HomePage = () => {
  return (
    <div className={styles.home_page}>
      <div className={styles.content_wrapper}>
        <Slider />
        <iframe src="https://vk.com/video_ext.php?oid=-56028029&id=456245749&hash=880cce0cb50f8c08&hd=2" width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  );
};
