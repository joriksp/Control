import React, { useState } from "react";
import styles from "./Table.module.scss";

const Table = ({ headers, data }) => {
   return (
      <table className={styles.table}>
         <tbody>
            <tr>
               {headers.map((header, index) => (
                  <th key={index}>{header}</th>
               ))}
            </tr>
            {data.map((row, rowIndex) => (
               <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                     <td key={cellIndex}>{cell}</td>
                  ))}
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default Table;
