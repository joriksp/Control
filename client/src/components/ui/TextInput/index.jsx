import React from "react";
import styles from "./TextInput.module.scss";

const TextInput = ({ placeholder, type, onChange, name }) => {
   return (
      <input
         className={styles.field}
         placeholder={placeholder}
         type={type}
         onChange={onChange}
         name={name}
      />
   );
};

export default TextInput;
