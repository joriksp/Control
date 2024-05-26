import React from "react";
import styles from "./Select.module.scss";

const Select = ({ items, onChange, value }) => {
   return (
      <select value={value} onChange={onChange} className={styles.field}>
         {items.map((item, i) => (
            <option key={i} value={item.value}>
               {item.label}
            </option>
         ))}
      </select>
   );
};

export default Select;
