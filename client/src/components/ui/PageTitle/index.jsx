import React from "react";
import styles from "./PageTitle.module.scss";

const PageTitle = ({ children }) => {
   return <div className={styles.pagetitle}>{children}</div>;
};

export default PageTitle;
