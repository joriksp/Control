import React from "react";
import styles from "./TextInput.module.scss";

const TextInput = ({ placeholder, type, onChange, name, value }) => {
   return (
      <input
         className={styles.field}
         placeholder={placeholder}
         type={type}
         onChange={onChange}
         name={name}
         value={value}
      />
   );
};

export default TextInput;
