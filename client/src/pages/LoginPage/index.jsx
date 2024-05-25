import React, { useState } from "react";
import styles from "./LoginPage.module.scss";

import Logo from "../../components/ui/Logo";
import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
   const [formData, setFormData] = useState({});
   const navigate = useNavigate();

   const onSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await fetch("http://localhost:4444/auth/login", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
               "Content-Type": "application/json",
            },
         });
         const data = await response.json();
         console.log(data);
         if (data.success) {
            localStorage.setItem("token", data.token);
            navigate("/app");
         } else {
            alert("Ошибка");
         }
      } catch (err) {
         console.log(err);
      }
   };

   const handleInputChange = (e) => {
      setFormData({
         ...formData,
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
