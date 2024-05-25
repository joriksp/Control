import { useState, useEffect } from "react";
import TextInput from "@ui/TextInput";
import Button from "@ui/Button";
import PageTitle from "@ui/PageTitle";
import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
   const [userData, setUserData] = useState(null);
   const [error, setError] = useState(null);
   const token = localStorage.getItem("token");

   const handleInputChange = ({ target: { name, value } }) => {
      setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
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
               name={"fullName"}
               onChange={handleInputChange}
               placeholder={"ФИО"}
               value={userData?.fullname}
            />
            {/* Add other form fields here */}
         </div>
         {error && <p>{error}</p>}
      </>
   );
};

export default ProfilePage;
