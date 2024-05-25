import { useState, useEffect } from "react";
import TextInput from "@ui/TextInput";
import Button from "@ui/Button";
import PageTitle from "@ui/PageTitle";
import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
   const [userData, setUserData] = useState({
      fullname: "",
      phone: "",
   });
   const [error, setError] = useState(null);
   const token = localStorage.getItem("token");

   const handleInputChange = ({ target: { name, value } }) => {
      setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
   };

   const updateProfile = async () => {
      try {
         const { fullname, phone } = userData;

         const response = await fetch("http://localhost:4444/auth/me", {
            method: "POST",
            body: JSON.stringify({ fullName: fullname, phone }),
            headers: {
               "Content-Type": "application/json",
               Authorization: token,
            },
         });
         const data = await response.json();
         if (data.success) {
            alert("Информация успешно обновлена");
         } else {
            setError("Ошибка");
         }
      } catch (err) {
         setError(err.message);
      }
   };

   useEffect(() => {
      const fetchUserData = async () => {
         try {
            const response = await fetch("http://localhost:4444/auth/me", {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: token,
               },
            });
            const data = await response.json();
            if (data.success) {
               setUserData(data);
            } else {
               setError("Ошибка");
            }
         } catch (err) {
            setError(err.message);
         }
      };

      fetchUserData();
   }, []);

   return (
      <>
         <PageTitle>Профиль</PageTitle>
         {userData && <p>Ваш профиль:</p>}
         <div className={styles.container}>
            <TextInput
               name={"fullname"}
               onChange={handleInputChange}
               placeholder={"ФИО"}
               value={userData.fullname}
            />
            <TextInput
               name={"phone"}
               onChange={handleInputChange}
               placeholder={"Номер телефона"}
               value={userData.phone}
            />
            <Button onClick={updateProfile}>Применить изменения</Button>
         </div>
         {error && <p>{error}</p>}
      </>
   );
};

export default ProfilePage;
