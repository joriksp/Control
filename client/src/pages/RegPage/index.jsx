import React, { useEffect, useState } from "react";
import styles from "./Reg.module.scss";

import Logo from "../../components/ui/Logo";
import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";

const Reg = () => {
   const [formData, setFormData] = useState({});
   const navigate = useNavigate();

   console.log(JSON.stringify(formData));

   const onSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await fetch("http://localhost:4444/auth/reg", {
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
         <h4>Регистрация</h4>
         <TextInput
            name={"fullName"}
            onChange={handleInputChange}
            placeholder={"ФИО"}
         />
         <TextInput
            name={"phone"}
            onChange={handleInputChange}
            placeholder={"Номер телефона"}
         />
         <TextInput
            name={"password"}
            onChange={handleInputChange}
            placeholder={"Придумайте пароль"}
            type={"password"}
         />
         <Button type={"submit"}>Регистрация</Button>
         <Link to={"/login"}>Есть аккаунт?</Link>
      </form>
   );
};

export default Reg;
