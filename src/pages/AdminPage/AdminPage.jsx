import React from "react";
import styles from "./AdminPage.module.scss";

const AdminPage = () => {
  return (
    <div className={styles.admin_page}>
      <div className={styles.content_wrapper}>
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <input type='text' />
      </div>
    </div>
  );
};

export default AdminPage;
