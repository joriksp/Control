import React from "react";
import styles from "./Logo.module.scss";

const Logo = (props) => {
   return (
      <button className={styles.logo} {...props}>
         <i className="fa-solid fa-terminal" aria-hidden="true"></i>
         <span>CONTROL</span>
      </button>
   );
};

export default Logo;
