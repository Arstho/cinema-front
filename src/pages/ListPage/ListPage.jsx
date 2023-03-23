import React from "react";
import Filter from "../../components/Filter/Filter";
import List from "../../components/List/List";
import styles from "./ListPage.module.scss";

const ListPage = () => {
  return (
    <div className={styles.list_page}>
      <Filter />
      <div className={styles.content_wrapper}>
        <List />
      </div>
    </div>
  );
};

export default ListPage;
