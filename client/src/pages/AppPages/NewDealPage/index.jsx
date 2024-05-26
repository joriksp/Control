import { useState, useEffect } from "react";
import styles from "./NewDealPage.module.scss";

import TextInput from "@ui/TextInput";
import TextArea from "../../../components/ui/TextArea";
import Select from "../../../components/ui/Select";

import PageTitle from "@ui/PageTitle";
import ButtonBottom from "../../../components/ui/ButtonBottom";

import { useNavigate } from "react-router-dom";

const NewDealPage = () => {
   const nav = useNavigate();
   const [users, setUsers] = useState([]);
   const [formData, setFormData] = useState({
      name: "",
      task: "",
   });
   const [selectedExecutor, setSelectedExecutor] = useState("");
   const token = localStorage.getItem("token");

   const [file, setFile] = useState();

   const handleInputChange = ({ target: { name, value } }) => {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
   };

   const onSelectImageHandler = (files) => {
      const file = files[0];
      const formData = new FormData();
      formData.append("file", file);

      fetch("http://localhost:4444/upload", {
         method: "POST",
         headers: {
            "Contetnt-Type": "multipart/form-data",
         },
         body: formData,
      })
         .then((response) => response.json())
         .then((data) => setFile(data.url))
         .catch((error) => console.error(error));
   };

   const create = async () => {
      try {
         console.log({ ...formData, executor: selectedExecutor });
         const response = await fetch("http://localhost:4444/deals", {
            method: "POST",
            body: JSON.stringify({
               ...formData,
               executor: selectedExecutor,
               file,
            }),
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

   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const response = await fetch("http://localhost:4444/users", {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: token,
               },
            });
            const data = await response.json();
            if (data.success) {
               const users = data.users.map((user) => ({
                  value: user._id,
                  label: user.fullname,
               }));
               console.log(users);
               setUsers(users);
               setSelectedExecutor(users[0].value);
            } else {
               alert(`Error: ${data.msg}`);
            }
         } catch (error) {
            alert(`Error: ${error.message}`);
         }
      };
      fetchUsers();
   }, []);

   return (
      <>
         <PageTitle>Новая сделка</PageTitle>
         <p>Опишите ваши желания исполнителю</p>
         <TextInput
            name={"name"}
            onChange={handleInputChange}
            placeholder={"Название сделки"}
            value={formData.name}
         />
         <TextArea
            name={"task"}
            onChange={handleInputChange}
            placeholder={"Задача"}
            value={formData.task}
         />
         <Select
            items={users}
            value={selectedExecutor}
            onChange={(event) => {
               console.log(event.target.value);
               setSelectedExecutor(event.target.value);
            }}
         />
         <label htmlFor="file-upload" className={styles.file}>
            Загрузить файл
         </label>
         <input
            id="file-upload"
            type="file"
            onChange={(e) => onSelectImageHandler(e.target.files)}
         />
         <p className={styles.path}>{file}</p>
         <ButtonBottom onClick={create}>Создать</ButtonBottom>
      </>
   );
};

export default NewDealPage;
