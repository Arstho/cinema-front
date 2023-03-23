import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/features/movie/movieSlice";
import styles from "./HomePage.module.scss";
import Slider from "../../components/Slider/Slider";
import { fetchCategories } from "../../redux/features/category/categorySlice";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchCategories());
  }, [dispatch]);
  const categories = useSelector((state) => state.category.categories);

  return (
    <div className={styles.home_page}>
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
  );
};
