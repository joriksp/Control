import React, { useState } from "react";
import styles from "./LoginPage.module.scss";

import Logo from "../../components/ui/Logo";
import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const LoginPage = () => {
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
         <h4>Вход</h4>
         <TextInput
            name={"phone"}
            onChange={handleInputChange}
            placeholder={"Номер телефона"}
         />
         <TextInput
            name={"password"}
            onChange={handleInputChange}
            placeholder={"Пароль"}
            type={"password"}
         />
         <Button type={"submit"}>Войти</Button>
         <Link to={"/reg"}>Нет аккаунта?</Link>
      </form>
   );
};

export default LoginPage;
