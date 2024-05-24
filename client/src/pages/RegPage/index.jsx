import React, { useState } from "react";
import styles from "./Reg.module.scss";

import Logo from "../../components/ui/Logo";
import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const Reg = () => {
   const [data, setData] = useState({});

   const onSubmit = (e) => {
      e.preventDefault();
      console.log(data);
   };

   const handleInputChange = (e) => {
      setData({
         ...data,
         [e.target.name]: e.target.value,
      });
   };

   return (
      <form className={styles.container} onSubmit={onSubmit}>
         <Logo style={{ color: "inherit", fontSize: "18px", padding: "0" }} />
         <h4>Регистрация</h4>
         <TextInput
            name={"name"}
            onChange={handleInputChange}
            placeholder={"ФИО"}
         />
         <TextInput
            name={"phone"}
            onChange={handleInputChange}
            placeholder={"Номер телефона"}
            type={"password"}
         />
         <TextInput
            name={"password"}
            onChange={handleInputChange}
            placeholder={"Пароль"}
            type={"password"}
         />
         <TextInput
            name={"passwordRepeat"}
            onChange={handleInputChange}
            placeholder={"Подтвердите пароль"}
            type={"password"}
         />
         <Button type={"submit"}>Регистрация</Button>
         <Link to={"/login"}>Есть аккаунт?</Link>
      </form>
   );
};

export default Reg;
