import { useState, useEffect } from "react";
import TextInput from "@ui/TextInput";
import Button from "@ui/Button";
import PageTitle from "@ui/PageTitle";
import styles from "./NewDealPage.module.scss";
import { useNavigate } from "react-router-dom";

const NewDealPage = () => {
   const nav = useNavigate();

   const [formData, setFormData] = useState({
      name: "",
      task: "",
      executor: "",
   });
   const token = localStorage.getItem("token");

   const handleInputChange = ({ target: { name, value } }) => {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
   };

   const create = async () => {
      try {
         const response = await fetch("http://localhost:4444/deals", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
               "Content-Type": "application/json",
               Authorization: token,
            },
         });
         const data = await response.json();
         if (data.success) {
            alert("Информация успешно обновлена");
            nav("/app/deals");
         } else {
            alert("Ошибка", data);
         }
      } catch (err) {
         setError(err.message);
      }
   };

   return (
      <>
         <PageTitle>Новая сделка</PageTitle>
         <p>Опишите ваши желания исполнителю</p>
         <div className={styles.container}>
            <TextInput
               name={"name"}
               onChange={handleInputChange}
               placeholder={"Название сделки"}
               value={formData.name}
            />
            <TextInput
               name={"task"}
               onChange={handleInputChange}
               placeholder={"Задача"}
               value={formData.task}
            />
            <TextInput
               name={"executor"}
               onChange={handleInputChange}
               placeholder={"Исполнитель"}
               value={formData.executor}
            />
            <Button onClick={create}>Создать</Button>
         </div>
      </>
   );
};

export default NewDealPage;
