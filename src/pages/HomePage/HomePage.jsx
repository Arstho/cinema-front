import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/features/movie/movieSlice";
import styles from "./HomePage.module.scss";
import Slider from "../../components/Slider/Slider";
import { fetchCategories } from "../../redux/features/category/categorySlice";
import PosterSlider from "../../components/PosterSlider/PosterSlider";
import { Link } from "react-router-dom";



export const HomePage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchCategories());
  }, [dispatch]);
  const categories = useSelector((state) => state.category.categories);

  const posters = [
    {
      title: "Постер 1",
      imageUrl: "https://free4kwallpapers.com/uploads/originals/2015/12/09/prometheus-2012-movie-wallpaper.jpg"
    },
    {
      title: "Постер 2",
      imageUrl: "https://static.okko.tv/images/v2/8982481?scale=1&quality=80"
    },
    {
      title: "Постер 3",
      imageUrl: "https://kartinki.cc/files/img/post/377/interstellar-66.webp"
    },
    {
      title: "Постер 4",
      imageUrl: "https://static.okko.tv/images/v2/9192957?scale=1&quality=80"
    },
    {
      title: "Постер 5",
      imageUrl: "https://media.kg-portal.ru/tv/m/montauk/posters/montauk_28.jpg"
    }
  ];

  return (
    <>
    <div className={styles.home_page}>
      <div className={styles.posters}>
       <PosterSlider posters={posters}/>
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.category}>
          {categories.map((cat) => {
            return (
              <div>
                <Link className={styles.cat_title} to={`/category/${cat._id}`}>
                  <h2>{cat.name}</h2>
                </Link>
                <Slider catId={cat._id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};
