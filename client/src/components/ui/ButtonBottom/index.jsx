import React from "react";
import styles from "./ButtonBottom.module.scss";

const ButtonBottom = ({ children, ...props }) => {
   return (
      <button className={styles.button} {...props}>
         {children}
      </button>
   );
};

export default ButtonBottom;
